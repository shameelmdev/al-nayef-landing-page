import { services } from '../data/servicesData'

export default function Services(){
  return (
    <div id="services" className="services-overview">
      <h3>Our Business Units</h3>
      <div className="services-grid">
        {services.map(s => (
          <article key={s.key} className="card service-card">
            <img src={s.img} alt={s.title + ' illustration'} loading="lazy" />
            <div className="service-body">
              <h4>{s.title}</h4>
              <p>{s.about}</p>
              <a className="btn outline" href={`#details-${s.key}`}>Learn More</a>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
