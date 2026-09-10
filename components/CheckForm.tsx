'use client'

import { useRef, useState } from 'react'

export default function CheckForm() {
  const siteRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  const goalRef = useRef<HTMLSelectElement>(null)
  const [err, setErr] = useState<string | null>(null)
  const [status, setStatus] = useState<string | null>(null)
  const [siteInvalid, setSiteInvalid] = useState(false)
  const [emailInvalid, setEmailInvalid] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSiteInvalid(false)
    setEmailInvalid(false)
    setErr(null)

    const siteVal = siteRef.current?.value.trim() ?? ''
    const emailVal = emailRef.current?.value.trim() ?? ''

    if (!siteVal) {
      setSiteInvalid(true)
      setErr('Add your website address so we know what to look at.')
      siteRef.current?.focus()
      return
    }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(emailVal)) {
      setEmailInvalid(true)
      setErr('We need a working email to send the check to.')
      emailRef.current?.focus()
      return
    }

    const goalText = goalRef.current?.options[goalRef.current.selectedIndex].text ?? ''
    const subject = `AI search check — ${siteVal}`
    const body = `Site: ${siteVal}\nEmail: ${emailVal}\nPriority: ${goalText}\n`

    setStatus('Opening your email app with the details filled in. If nothing happens, write to hello@gobiya.com.')
    window.location.href =
      'mailto:hello@gobiya.com?subject=' + encodeURIComponent(subject) +
      '&body=' + encodeURIComponent(body)
  }

  return (
    <form
      className="prompt rise"
      style={{ '--i': 14 } as React.CSSProperties}
      id="check"
      noValidate
      onSubmit={handleSubmit}
    >
      <div className="prompt__field prompt__field--site">
        <label className="sr-only" htmlFor="f-site">Your website</label>
        <input
          id="f-site"
          className="prompt__input"
          type="text"
          name="website"
          inputMode="url"
          autoComplete="url"
          placeholder="yourbusiness.com"
          aria-describedby="f-err"
          aria-invalid={siteInvalid || undefined}
          required
          ref={siteRef}
        />
      </div>

      <div className="prompt__field prompt__field--mail">
        <label className="sr-only" htmlFor="f-email">Where to send it</label>
        <input
          id="f-email"
          className="prompt__input"
          type="email"
          name="email"
          autoComplete="email"
          placeholder="you@yourbusiness.com"
          aria-describedby="f-err"
          aria-invalid={emailInvalid || undefined}
          required
          ref={emailRef}
        />
      </div>

      {err && (
        <p className="prompt__err" id="f-err">{err}</p>
      )}

      <div className="prompt__bar">
        <a className="icon-btn rise" style={{ '--i': 16 } as React.CSSProperties}
           href="mailto:hello@gobiya.com" aria-label="Email us instead">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"
               strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="2.5" y="4.5" width="19" height="15" rx="2.5"/>
            <path d="m3.6 6.6 8.4 5.9 8.4-5.9"/>
          </svg>
        </a>

        <div className="prompt__right">
          <span className="prompt__goal rise" style={{ '--i': 17 } as React.CSSProperties}>
            <label className="sr-only" htmlFor="f-goal">What matters most</label>
            <select id="f-goal" name="goal" ref={goalRef}>
              <option value="found">Getting found on Google</option>
              <option value="ai">Showing up in AI answers</option>
              <option value="speed">A faster, better website</option>
              <option value="all">All three</option>
            </select>
            <svg className="prompt__caret" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                 strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="m6 9 6 6 6-6"/>
            </svg>
          </span>

          <button
            className="icon-btn icon-btn--send rise"
            style={{ '--i': 18 } as React.CSSProperties}
            type="submit"
            aria-label="Send my check"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9"
                 strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M4 12h15M13 6l6 6-6 6"/>
            </svg>
          </button>
        </div>
      </div>

      {status && (
        <p className="prompt__status" id="check-status" role="status">{status}</p>
      )}
    </form>
  )
}
