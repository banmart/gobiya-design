import { articles, readingMinutes } from '@/lib/articles'

export default function BlogSection({ homepage = false }: { homepage?: boolean }) {
  return <section className="section blog-section" aria-labelledby="blog-heading"><div className="wrap">
    <div className="blog-heading"><div><h2 className="t" id="blog-heading">{homepage ? 'Practical advice for your website.' : 'Three questions. Three focused guides.'}</h2><p>Clear answers for business owners, from planning a project to managing your online presence.</p></div>{homepage && <a className="home-work" href="/blog/">View the blog <span aria-hidden="true">↗</span></a>}</div>
    <div className="blog-list">{articles.map(article => <article className="blog-card" key={article.slug}>
      <p className="blog-meta">{article.topic} · {readingMinutes(article)} min read</p>
      <h3><a href={`/blog/${article.slug}/`}>{article.title}</a></h3>
      <p>{article.description}</p>
      <a className="home-work" href={`/blog/${article.slug}/`} aria-label={`Read: ${article.title}`}>Read article <span aria-hidden="true">↗</span></a>
    </article>)}</div>
  </div></section>
}
