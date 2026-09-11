const { test } = require('node:test')
const assert = require('node:assert/strict')
const fs = require('node:fs')
const ts = require('typescript')
const vm = require('node:vm')

const source = ts.transpileModule(fs.readFileSync('app/api/review/route.ts', 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
}).outputText
const fields = { fullName: 'Form Test', phone: '323-555-0100', website: 'example.com', email: 'test@example.com' }
function setup(fetch, env = { RESEND_API: 'test-key' }) {
  const context = { exports: {}, require, process: { env }, Response, URL, AbortSignal, fetch }
  vm.runInNewContext(source, context)
  return (body = fields, headers = {}) => context.exports.POST(new Request('https://gobiya.com/api/review/', {
    method: 'POST', headers: { 'Content-Type': 'application/json', ...headers }, body: JSON.stringify(body),
  }))
}

test('uses RESEND_API, sends all fields to Steve, sets reply-to, and deduplicates retries', async () => {
  const calls = []
  const post = setup(async (url, options) => {
    calls.push({ url, ...options }); return Response.json({ id: 'test-message' })
  })
  assert.equal((await post()).status, 200)
  await post()
  assert.equal(calls[0].url, 'https://api.resend.com/emails')
  assert.equal(calls[0].headers.Authorization, 'Bearer test-key')
  assert.equal(calls[0].headers['Idempotency-Key'], calls[1].headers['Idempotency-Key'])
  const email = JSON.parse(calls[0].body)
  assert.deepEqual(email.to, ['steve@gobiya.com'])
  assert.equal(email.from, 'Gobiya Agency <steve@gobiya.com>')
  assert.equal(email.reply_to, fields.email)
  for (const value of Object.values(fields)) assert.ok(email.text.includes(value))
})

test('invalid fields cannot trigger an email', async () => {
  const post = setup(() => { throw new Error('Must not contact Resend') })
  for (const invalid of [{ fullName: ' ' }, { phone: 'abc' }, { email: 'bad' }, { website: 'javascript:alert(1)' }, { fullName: 'Header\nInjection' }]) {
    assert.equal((await post({ ...fields, ...invalid })).status, 400)
  }
})

test('missing credentials return failure, never success', async () => {
  assert.equal((await setup(() => { throw new Error('Unexpected send') }, {})()).status, 503)
})

test('cross-origin submissions are rejected', async () => {
  assert.equal((await setup(() => { throw new Error('Unexpected send') })(fields, { Origin: 'https://other.example' })).status, 403)
})

test('Resend rejection, network failure, and malformed success remain failures', async () => {
  for (const send of [async () => Response.json({ error: 'rejected' }, { status: 403 }), async () => { throw new Error('offline') }, async () => Response.json({})]) {
    const response = await setup(send)()
    assert.equal(response.status, 502)
    assert.deepEqual(await response.json(), { success: false })
  }
})
