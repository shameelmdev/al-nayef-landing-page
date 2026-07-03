import { benefits } from '../data/servicesData'

export default function Features(){
  return (
    <section id="about" className="container section about-section">
      <div className="section-intro">
        <span className="eyebrow">About Us</span>
        <h2>Strength through diversified business expertise.</h2>
        <p className="muted">Al Nayef Group is a prominent and rapidly expanding multi-sector business 
          conglomerate based in the United Arab Emirates. Renowned for our diversified 
          and synergistic portfolio, we operate across pivotal industries including Property 
          Management, Marketing, IT solutions, Property interior design, and Cleaning 
          services in the United Arab Emirates.
          Guided by a relentless commitment to excellence and innovation, we continuously 
          strive to surpass client expectations while driving sustainable, strategic growth. At 
          Al Nayef Group, we are dedicated to reshaping the future of business in the UAE 
          through our expertise and integrated approach.
        </p>
      </div>

      <div className="vision-mission">
        <article className="vision-card card">
          <h4>Vision</h4>
          <p>Our vision is to be the foremost multi-sector business group in the UAE, renowned for our dedication to innovation, excellence, and synergy. We strive to set high standards in services, shaping the future of business and driving the prosperity of the UAE.</p>
        </article>
        <article className="mission-card card">
          <h4>Mission</h4>
          <p>At Al Nayef Group, our mission is to excel across various industries in the UAE by providing innovative solutions and strategic expertise. We are committed to delivering superior value in multiple industries, helping our clients achieve their objectives and fostering long-term growth.</p>
        </article>
      </div>

      <section id="why" className="why-choose section why-section">
        <div className="section-intro">
          <span className="eyebrow">Why choose us</span>
          <h2>Trusted, capable and client-centered</h2>
          <p className="muted">Our approach blends a professional team, regional insight and a focus on outcomes to create strong partnerships.</p>
        </div>
        <div className="why-grid">
          {benefits.map(item => (
              <article key={item.label} className="why-card">
                <div className="why-icon"><img src={item.icon} alt={item.label + ' icon'} loading="lazy"/></div>
                <h4>{item.label}</h4>
                <p>{item.detail}</p>
              </article>
            ))}
        </div>
      </section>
    </section>
  )
}
