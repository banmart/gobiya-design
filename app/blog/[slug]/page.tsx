import { notFound } from 'next/navigation'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { articles, readingMinutes } from '@/lib/articles'
import { pageMetadata } from '@/lib/metadata'
import '../../home.css'

type Props = { params: Promise<{ slug: string }> }
export const dynamicParams = false
export function generateStaticParams() { return articles.map(({ slug }) => ({ slug })) }
export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const article = articles.find(item => item.slug === slug)
  if (!article) notFound()
  const metadata = pageMetadata(article.title, article.description, `/blog/${slug}/`)
  return { ...metadata, openGraph: { ...metadata.openGraph, type: 'article' } }
}

export default async function Page({ params }: Props) {
  const { slug } = await params
  const article = articles.find(item => item.slug === slug)
  if (!article) notFound()
  const url = `https://www.gobiya.com/blog/${slug}/`
  const structuredData = {
    '@context': 'https://schema.org', '@graph': [
      { '@type': 'BlogPosting', '@id': `${url}#article`, headline: article.title, description: article.description, mainEntityOfPage: url, url, inLanguage: 'en-US', author: { '@type': 'Organization', name: 'Gobiya Agency', url: 'https://www.gobiya.com/about/' }, publisher: { '@id': 'https://www.gobiya.com/#studio' } },
      { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.gobiya.com/' }, { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.gobiya.com/blog/' }, { '@type': 'ListItem', position: 3, name: article.title, item: url }] },
    ],
  }
  return <div className="home subpage blog-article">
    <a className="skip" href="#main">Skip to content</a><Nav />
    <main id="main">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }} />
      <article className="article-wrap">
        <header className="article-header"><nav aria-label="Breadcrumb"><a href="/">Home</a><span aria-hidden="true">/</span><a href="/blog/">Blog</a></nav>
          <p className="blog-meta">{article.topic} · {readingMinutes(article)} min read</p>
          <h1>{article.title}</h1><p className="article-description">{article.description}</p><p className="article-byline">By Gobiya Agency</p>
        </header>
        <div className="article-layout">
          <aside className="article-contents"><h2>In this article</h2><nav aria-label="Article sections">{article.sections.map(section => <a key={section.id} href={`#${section.id}`}>{section.title}</a>)}</nav></aside>
          <div className="article-body"><p className="article-takeaway">{article.takeaway}</p>
            {article.sections.map(section => <section id={section.id} key={section.id}><h2>{section.title}</h2>{section.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}{section.checklist && <ul>{section.checklist.map(item => <li key={item}>{item}</li>)}</ul>}{section.source && <p className="article-source">Reference: <a href={section.source.href}>{section.source.label}</a></p>}</section>)}
            <div className="article-next"><h2>How we can help</h2><p>{article.service.text}</p><a className="home-work" href={article.service.href}>{article.service.label} <span aria-hidden="true">↗</span></a></div>
            <nav className="article-related" aria-label="More articles"><h2>More from the blog</h2>{articles.filter(item => item.slug !== slug).map(item => <a key={item.slug} href={`/blog/${item.slug}/`}>{item.title}<span aria-hidden="true">↗</span></a>)}</nav>
          </div>
        </div>
      </article>
    </main><Footer />
  </div>
}
