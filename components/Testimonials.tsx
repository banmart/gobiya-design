const testimonials = [
  {
    id: 'nicole',
    title: 'You increased my traffic in just 2 days!',
    quote: 'You did an amazing job on my website and you increased my traffic in just 2 days of being live. I am so happy. I love love love my website.',
    name: 'Nicole Brown', role: 'E-Commerce Founder', rating: 5,
  },
  {
    id: 'ghost',
    title: 'All of our marketing goals were met with one source.',
    quote: 'Wow great work ethic, extremely proficient and professional. All of our marketing goals were met with one source and I continuously brag about my service and encourage any/every business owner I’m in contact with. These people really help my business blossom and have done a tremendous job getting us to our customers. On top of the phenomenal job they have produced, they remain help full and are easy to get a hold of for any of my questions.',
    name: 'Ghost Rogue', role: 'Local Business Owner', rating: 5,
  },
  {
    id: 'jeremy',
    title: 'Great work and transparent pricing.',
    quote: 'These guys did real quality work for me and my company’s websites. I would recommend them to anybody. Steve took all the load off our developers’ shoulders and we let his SEO magic work on our sites. Rank is up, business is up, and more revenue is coming in. Thanks Gobiya.',
    name: 'Jeremy Littlefield', role: 'Marketing Director', rating: null,
  },
]

export default function Testimonials({ customer }: { customer?: 'nicole' | 'ghost' | 'jeremy' }) {
  const selected = customer ? testimonials.filter(item => item.id === customer) : testimonials
  return <section className={`section testimonials${customer ? ' testimonials--single' : ''}`} aria-labelledby="testimonials-heading">
    <div className="wrap">
      <div className="testimonial-heading"><p className="blog-meta">Client experiences</p><h2 className="t" id="testimonials-heading">In our clients’ words.</h2></div>
      <div className="testimonial-grid">{selected.map(item => <figure className="testimonial" key={item.id}>
        {item.rating && <p className="testimonial-stars" aria-label={`${item.rating} out of 5 stars`}><span aria-hidden="true">★★★★★</span></p>}
        <h3>{item.title}</h3>
        <blockquote><p>“{item.quote}”</p></blockquote>
        <figcaption><strong>{item.name}</strong><span>{item.role}</span></figcaption>
      </figure>)}</div>
    </div>
  </section>
}
