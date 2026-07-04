import { useState } from 'react'

export default function Navbar(){
  const [open, setOpen] = useState(false)
  return (
    <header className="nav">
      <div className="container nav-inner">
        <div className="brand">
          <img src="/assets/nayef_logo_dark.png" alt="Al Nayef Group logo" className="logo" loading="lazy" />
        </div>
        <nav className={"nav-links " + (open? 'open':'') } aria-label="Main navigation">
          <a href="#about">Home</a>
          <a href="#about">About</a>
          <a href="#services">Our Companies</a>
          <a href="#why">Why Us</a>
          <a href="#contact" className="btn small">Contact</a>
        </nav>
        <button className="nav-toggle" onClick={()=>setOpen(!open)} aria-expanded={open} aria-label="Toggle navigation">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
        </button>
      </div>
    </header>
  )
}
