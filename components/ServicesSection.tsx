const services = [
  { href: '/web-design/', title: 'Web design', text: 'Custom websites with clear content, mobile layouts, and a direct path to enquire.' },
  { href: '/seo/', title: 'Search optimization', text: 'Improve your service pages, local business information, and technical foundations.' },
  { href: '/ai-search/', title: 'AI search optimization', text: 'Make your business information easier for search and AI tools to access and understand.' },
]
export default function ServicesSection() {
  return <section className="section" id="services"><div className="wrap">
    <div className="head"><p className="eyebrow">Services</p><h2 className="t">What we do</h2></div>
    <div className="topic-grid">{services.map(service => <a className="topic-card" href={service.href} key={service.href}><h3>{service.title}</h3><p>{service.text}</p><span>Explore service <span aria-hidden="true">↗</span></span></a>)}</div>
  </div></section>
}
