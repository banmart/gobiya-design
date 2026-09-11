'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function HomepageCheck() {
  const router = useRouter()
  const [fullName, setFullName] = useState('')
  const [phone, setPhone] = useState('')
  const [website, setWebsite] = useState('')
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [sending, setSending] = useState(false)
  const [submitError, setSubmitError] = useState('')

  return <section className="home-check" id="check" aria-labelledby="review-title">
    <p className="home-check-label">A good place to start</p>
    <h2 id="review-title">Get a free site review.</h2>
    <p>Find out what could work better on your website and in search.</p>
    <form aria-busy={sending} onSubmit={async event => {
      event.preventDefault()
      if (sending) return
      try {
        const url = new URL(/^https?:\/\//i.test(website.trim()) ? website.trim() : `https://${website.trim()}`)
        if (!['http:', 'https:'].includes(url.protocol) || !url.hostname.includes('.') || /\s/.test(website.trim())) throw new Error()
      } catch { setError('Enter a website address, such as yourbusiness.com.'); return }
      setError(''); setSubmitError(''); setSending(true)
      try {
        const response = await fetch('/api/review/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ fullName, phone, website, email }),
          signal: AbortSignal.timeout(20000),
        })
        const result = await response.json()
        if (!response.ok || !result.success) throw new Error()
        router.push('/thank-you/')
      } catch {
        setSubmitError('Your request could not be sent. Please try again or email steve@gobiya.com.')
        setSending(false)
      }
    }} onChange={() => { setError(''); setSubmitError('') }}>
      <fieldset className="home-check-fieldset" disabled={sending}>
      <div className="home-check-fields">
      <div>
      <label htmlFor="review-name">Full Name</label>
      <input id="review-name" name="name" type="text" autoComplete="name" placeholder="Your full name" value={fullName} onChange={event => setFullName(event.target.value)} required pattern=".*\S.*" maxLength={150} />
      </div>
      <div>
      <label htmlFor="review-phone">Phone</label>
      <input id="review-phone" name="phone" type="tel" autoComplete="tel" placeholder="Your phone number" value={phone} onChange={event => setPhone(event.target.value)} required maxLength={50} />
      </div>
      <div>
      <label htmlFor="review-website">Website</label>
      <input id="review-website" name="website" type="text" inputMode="url" autoComplete="url" placeholder="yourbusiness.com" value={website} onChange={event => setWebsite(event.target.value)} required maxLength={500} aria-invalid={!!error} aria-describedby={error ? 'review-error' : undefined} />
      </div>
      <div>
      <label htmlFor="review-email">Email</label>
      <input id="review-email" name="email" type="email" autoComplete="email" placeholder="you@yourbusiness.com" value={email} onChange={event => setEmail(event.target.value)} required maxLength={254} />
      </div>
      </div>
      {error && <p className="home-error" id="review-error" role="alert">{error}</p>}
      {submitError && <p className="home-error" role="alert">{submitError}</p>}
      <button className="home-primary" type="submit" disabled={sending}>{sending ? 'Sending request…' : 'Request a free review'} <span aria-hidden="true">→</span></button>
      </fieldset>
      <p className="home-form-note" aria-live="polite">{sending ? 'Sending your request to Gobiya Agency.' : 'Free, with no call required. We’ll reply using the contact details you provide.'}</p>
    </form>
    <div className="home-call"><span>Prefer a conversation?</span><a href="tel:+13237441338">Call 323-744-1338 <span aria-hidden="true">↗</span></a></div>
  </section>
}
