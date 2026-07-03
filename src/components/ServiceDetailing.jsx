import { services } from "../data/servicesData"


export default function ServiceDetailing(){
    return (
        <section className="service-details section">
            <h3>Explore the business units</h3>
            <div className="details-grid">
                {services.map(s => (
                <article key={s.key} id={`details-${s.key}`} className={"detail-hero"} style={{ backgroundImage: `url(${s.bgImg})` }} >
                    <div className="detail-inner">
                    <div className="detail-header">
                        <img src={s.img} alt={s.title + ' icon'} loading="lazy" />
                        <div>
                        <h4>{s.title}</h4>
                        <p>{s.desc}</p>
                        </div>
                    </div>
                    <p>{s.detail}</p>
                    <a className="btn small secondary" href="#contact">Request consultation</a>
                    </div>
                </article>
                ))}
            </div>
        </section>
    )

}