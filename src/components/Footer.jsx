import React from 'react'

export default function Footer(){
  return (
    <footer className="footer footer-advanced">
      <div className="container footer-grid">
        <div className="footer-section footer-brand">
          <img src="/src/assets/nayef_logo_dark.png" alt="Al Nayef Group logo" className="footer-logo" loading="lazy" />
          <p>Al Nayef Group is a UAE-based diversified business group with a strong focus on quality, integrity and long-term client relationships.</p>
        </div>
        <div className="footer-section">
          <h4>Quick links</h4>
          <a href="#about">About</a>
          <a href="#services">Business Units</a>
          <a href="#why">Why Us</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="footer-section">
          <h4>Business units</h4>
          <a href="#details-vertex">Unique Vertex</a>
          <a href="#details-hashtagers">Unique Hashtagers</a>
          <a href="#details-dimension">Unique Dimension</a>
          <a href="#details-nineties">Nineties Real Estate</a>
        </div>
        <div className="footer-section">
          <h4>Contact</h4>
          <p>info@alnayefgroup.ae</p>
          <p>+971 4 123 4567</p>
          <p>Dubai, UAE</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Al Nayef Group. All rights reserved.</p>
      </div>
    </footer>
  )
}
