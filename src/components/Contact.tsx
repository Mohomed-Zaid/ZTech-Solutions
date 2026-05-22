import { useState, type FormEvent, type ChangeEvent } from 'react'
import emailjs from '@emailjs/browser'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const formspreeId = import.meta.env.VITE_FORMSPREE_ID as string | undefined
  const contactEmail = (import.meta as any).env?.VITE_CONTACT_EMAIL ?? 'info@ztech.local'
  const emailjsPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string | undefined
  const emailjsServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID as string | undefined
  const emailjsTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string | undefined

  const mailTo = () => {
    const subject = encodeURIComponent('Project inquiry from website')
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)
    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="section">
      <div className="mb-10 flex items-end justify-between">
        <h2 className="heading">Let’s build something exceptional</h2>
        <p className="subtle">Tell us about your project</p>
      </div>
      <div className="grid gap-8 md:grid-cols-2">
        <div className="card p-6">
          <form
            onSubmit={async (e: FormEvent<HTMLFormElement>) => {
              e.preventDefault()
              if (emailjsPublicKey && emailjsServiceId && emailjsTemplateId) {
                try {
                  setStatus('sending')
                  const res = await emailjs.send(
                    emailjsServiceId,
                    emailjsTemplateId,
                    {
                      name,
                      reply_to: email,
                      message,
                      time: new Date().toLocaleString(),
                      from_name: name,
                      from_email: email,
                      email,
                    },
                    { publicKey: emailjsPublicKey }
                  )
                  if (res.status === 200) {
                    setStatus('sent')
                    setName('')
                    setEmail('')
                    setMessage('')
                  } else {
                    setStatus('error')
                  }
                } catch (err) {
                  console.error('EmailJS send failed:', err)
                  setStatus('error')
                }
              } else if (formspreeId) {
                try {
                  setStatus('sending')
                  const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
                    method: 'POST',
                    headers: {
                      'Accept': 'application/json',
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ name, email, message }),
                  })
                  if (res.ok) {
                    setStatus('sent')
                    setName('')
                    setEmail('')
                    setMessage('')
                  } else {
                    setStatus('error')
                  }
                } catch {
                  setStatus('error')
                }
              } else {
                mailTo()
              }
            }}
            className="grid gap-4"
          >
            <div className="grid gap-2">
              <label className="text-sm text-muted">Your name</label>
              <input
                className="rounded-xl border border-[var(--border)] bg-transparent px-4 py-3 outline-none focus:ring-2 focus:ring-[var(--brand)]/40"
                value={name}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                placeholder="Jane Doe"
              />
            </div>
            <div className="grid gap-2">
              <label className="text-sm text-muted">Email</label>
              <input
                className="rounded-xl border border-[var(--border)] bg-transparent px-4 py-3 outline-none focus:ring-2 focus:ring-[var(--brand)]/40"
                value={email}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                type="email"
                placeholder="jane@company.com"
              />
            </div>
            <div className="grid gap-2">
              <label className="text-sm text-muted">Message</label>
              <textarea
                className="min-h-[120px] rounded-xl border border-[var(--border)] bg-transparent px-4 py-3 outline-none focus:ring-2 focus:ring-[var(--brand)]/40"
                value={message}
                onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value)}
                placeholder="Tell us about your goals, timeline, and budget..."
              />
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <button type="submit" className="btn-primary disabled:opacity-60" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending…' : status === 'sent' ? 'Sent ✓' : 'Send inquiry'}
              </button>
              <a href="#services" className="btn-ghost">View services</a>
              {status === 'error' && (
                <span className="text-sm text-red-400">Something went wrong. Please try again or email us directly.</span>
              )}
              {status === 'sent' && (
                <span className="text-sm text-green-400">Thanks! We’ll get back within 1 business day.</span>
              )}
            </div>
          </form>
        </div>
        <div className="space-y-4">
          <div className="card p-6">
            <div className="text-sm text-muted">Email</div>
            <a href={`mailto:${contactEmail}`} className="text-lg">{contactEmail}</a>
          </div>
          <div className="card p-6">
            <div className="text-sm text-muted">WhatsApp / Call</div>
            <a
              href="https://wa.me/94788531318"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg hover:text-[var(--brand)] transition"
            >
              +94 788531318
            </a>
            <div className="mt-1 text-xs text-muted">or call</div>
          </div>
          <div className="card p-6">
            <div className="text-sm text-muted">Working hours</div>
            <div className="text-lg">Mon–Fri, 9:00–18:00</div>
          </div>
          <div className="card p-6">
            <div className="text-sm text-muted">Response time</div>
            <div className="text-lg">Within 1 business day</div>
          </div>
        </div>
      </div>
    </section>
  )
}
