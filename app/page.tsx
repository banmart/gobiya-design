import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import Script from 'next/script'

// The whole site is this one page. Its markup lives in app/home.html and its
// motion/interaction code in public/gobiya.js, so both can be edited as plain
// HTML and JavaScript. The markup is read at build time and served as static HTML.
const markup = readFileSync(join(process.cwd(), 'app', 'home.html'), 'utf8')

export const dynamic = 'force-static'

export default function Page() {
  return (
    <>
      <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: markup }} />
      <Script src="/gobiya.js" strategy="afterInteractive" />
    </>
  )
}
