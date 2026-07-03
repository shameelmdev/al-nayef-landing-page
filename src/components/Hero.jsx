export default function Hero(){
  return (
    <header className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <h1>Al Nayef Group</h1>
          <p className="lead">A diversified business group delivering innovation across Property Management, Marketing, IT solutions, Property interior
                              design, and Cleaning services in the United Arab Emirates with integrity and customer focus.</p>
          <div className="hero-actions">
            <a className="btn primary" href="#contact">Get in Touch</a>
            <a className="btn outline" href="#services">Our Businesses</a>
          </div>
        </div>
        <div className="hero-visual">
          <img src="/src/assets/about_us_background.jpg" alt="Abstract UAE corporate illustration" loading="lazy" />
        </div>
      </div>
    </header>
  )
}
