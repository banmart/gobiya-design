'use client'

import { useEffect, useRef, useState } from 'react'

type Message = { role: 'assistant' | 'user'; text: string }
type Step = 'goal' | 'website' | 'email' | 'ready'
const greeting = 'What would you like to improve about your website?'
const suggestions = ['A better website', 'Getting found on Google', 'Showing up in AI answers']

export default function CheckForm() {
  const [messages, setMessages] = useState<Message[]>([{ role: 'assistant', text: greeting }])
  const [step, setStep] = useState<Step>('goal')
  const [input, setInput] = useState('')
  const [goal, setGoal] = useState('')
  const [website, setWebsite] = useState('')
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const log = useRef<HTMLDivElement>(null)
  const field = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const element = log.current
    if (element) element.scrollTop = element.scrollHeight
  }, [messages])

  function send(value = input) {
    const text = value.trim()
    if (!text) return
    setError('')
    let reply = ''
    if (step === 'goal') {
      setGoal(text)
      setStep('website')
      reply = 'What is your website address?'
    } else if (step === 'website') {
      try {
        const url = new URL(/^https?:\/\//i.test(text) ? text : `https://${text}`)
        if (!['http:', 'https:'].includes(url.protocol) || !url.hostname.includes('.') || /\s/.test(text)) throw new Error()
      } catch {
        setError('Enter a website address, such as yourbusiness.com.')
        field.current?.focus()
        return
      }
      setWebsite(text)
      setStep('email')
      reply = 'What email address should Gobiya use to reply?'
    } else if (step === 'email') {
      if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(text)) {
        setError('Enter a valid email address.')
        field.current?.focus()
        return
      }
      setEmail(text)
      setStep('ready')
      reply = 'Your request is ready. Open the email draft below, review it, and send it to Gobiya. This chat has not analyzed your site or sent any information.'
    } else return
    setMessages(previous => [...previous, { role: 'user', text }, { role: 'assistant', text: reply }])
    setInput('')
    field.current?.focus()
  }

  function restart() {
    setMessages([{ role: 'assistant', text: greeting }])
    setStep('goal'); setInput(''); setGoal(''); setWebsite(''); setEmail(''); setError('')
    field.current?.focus()
  }

  const draft = 'mailto:steve@gobiya.com?subject=' + encodeURIComponent(`Website review — ${website}`) + '&body=' + encodeURIComponent(`Website: ${website}\nEmail: ${email}\nPriority: ${goal}\n`)
  const placeholder = step === 'goal' ? 'Tell us what you want to improve…' : step === 'website' ? 'yourbusiness.com' : 'you@yourbusiness.com'

  return <section className="review-chat prompt rise" style={{ '--i': 14 } as React.CSSProperties} id="check" aria-labelledby="chat-title">
    <header className="chat-header"><div><strong id="chat-title">How does your website measure up?</strong><span>Gobiya assistant · Guided preview</span></div><button className="chat-reset" type="button" onClick={restart} aria-label="Start a new conversation" title="New conversation">↺</button></header>
    <div className="chat-messages" ref={log} role="log" aria-label="Website review conversation" aria-live="polite" aria-relevant="additions">
      {messages.map((message, index) => <div className={`chat-message chat-message--${message.role}`} key={index}><span className="chat-speaker">{message.role === 'assistant' ? 'Gobiya' : 'You'}</span><p>{message.text}</p></div>)}
    </div>
    {step === 'goal' && <div className="chat-suggestions" aria-label="Suggested replies">{suggestions.map(text => <button type="button" key={text} onClick={() => send(text)}>{text}<span aria-hidden="true">↗</span></button>)}</div>}
    {step === 'ready' ? <div className="chat-ready"><a className="btn-dark" href={draft}>Open email draft ↗</a><button className="chat-reset" type="button" onClick={restart}>Start over</button></div> : <form className="chat-composer" onSubmit={event => { event.preventDefault(); send() }} noValidate>
      <label className="sr-only" htmlFor="chat-input">{step === 'goal' ? 'Your website goal' : step === 'website' ? 'Your website address' : 'Your email address'}</label>
      <input id="chat-input" ref={field} value={input} onChange={event => setInput(event.target.value)} placeholder={placeholder} type={step === 'email' ? 'email' : 'text'} inputMode={step === 'website' ? 'url' : step === 'email' ? 'email' : 'text'} autoComplete={step === 'email' ? 'email' : step === 'website' ? 'url' : 'off'} aria-invalid={!!error} aria-describedby={error ? 'chat-error' : 'chat-note'} maxLength={1000} />
      <button type="submit" disabled={!input.trim()} aria-label="Send message"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 19V5m-6 6 6-6 6 6" /></svg></button>
    </form>}
    {error && <p className="chat-error" id="chat-error" role="alert">{error}</p>}
    <p className="chat-note" id="chat-note">Scripted conversation · No AI connected · Nothing sent until you email</p>
  </section>
}
