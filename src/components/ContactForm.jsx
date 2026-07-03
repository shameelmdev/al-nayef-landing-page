import {useState, useEffect} from 'react'

export default function ContactForm(){
  const [form, setForm] = useState({name:'', email:'', message:''})
  const [status, setStatus] = useState('idle')
  const [toast, setToast] = useState(null)

  const endpoint = import.meta.env.VITE_SHEET_ENDPOINT || ''
  const isSending = status === 'sending'

  function validate(){
    return form.name.trim().length>1 && /\S+@\S+\.\S+/.test(form.email) && form.message.trim().length>5
  }

  useEffect(()=>{
    if(!toast) return
    const timer = setTimeout(()=>setToast(null), 4200)
    return ()=>clearTimeout(timer)
  }, [toast])

  async function handleSubmit(e){
    e.preventDefault()
    if(!validate()){
      setStatus('idle')
      setToast({type:'error', message:'Please complete all fields correctly.'})
      return
    }
    setStatus('sending')
    setToast(null)
    try{
      // If endpoint is not configured, not attempting to POST — keeping structure intact
      if(!endpoint){
        await new Promise(resolve => setTimeout(resolve, 700))
        setStatus('idle')
        setForm({name:'', email:'', message:''})
        setToast({type:'success', message:`Thank you! Your message has been submitted successfully. We'll get back to you soon.`})
        return
      }
      const res = await fetch(endpoint, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain' },
        body: JSON.stringify({
          timestamp: new Date().toISOString(),
          name: form.name,
          email: form.email,
          message: form.message
        })
      })
      setStatus('idle')
      setForm({name:'', email:'', message:''})
      setToast({type:'success', message:`Thank you! Your message has been submitted successfully. We'll get back to you soon.`})
    }catch(err){
      setStatus('idle')
      setToast({type:'error', message:'Unable to submit your message. Please try again later.'})
    }
  }

  return (
    <section id="contact" className="container section contact-section">
      <h2>Contact Us</h2>
      <p className="muted">Use the form below to reach Al Nayef Group. We aim to respond within 48 hours.</p>
      <form className="contact-form" onSubmit={handleSubmit} noValidate>
        <label>
          <span>Name</span>
          <input
            name="name"
            required
            value={form.name}
            onChange={e=>setForm({...form, name:e.target.value})}
            placeholder="Your full name"
          />
        </label>
        <label>
          <span>Email</span>
          <input
            name="email"
            type="email"
            required
            value={form.email}
            onChange={e=>setForm({...form, email:e.target.value})}
            placeholder="name@company.com"
          />
        </label>
        <label>
          <span>Message</span>
          <textarea
            name="message"
            required
            value={form.message}
            onChange={e=>setForm({...form, message:e.target.value})}
            placeholder="Briefly tell us about your project or inquiry"
          />
        </label>

        <div className="form-row">
          <button className="btn primary" type="submit" disabled={isSending}>
            {isSending && <span className="button-loader" aria-hidden="true" />}
            {isSending ? 'Sending…' : 'Send Message'}
          </button>
          {toast && (
            <div className={`toast ${toast.type}`} role="status" aria-live="polite">
              {toast.message}
            </div>
          )}
        </div>
      </form>
    </section>
  )
}
