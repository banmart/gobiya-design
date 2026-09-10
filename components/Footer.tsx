import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="foot">
      <div className="wrap">
        <div className="foot-grid">
          <div>
            <Image
              className="foot__mark"
              src="/gobiya-logo-black-white.webp"
              alt="Gobiya"
              width={1075}
              height={1075}
              decoding="async"
              unoptimized
            />
            <p className="foot-about">
              A Los Angeles web design and search studio. Fast custom websites, structured so
              Google and AI search can find and cite your business.
            </p>
          </div>

          <div>
            <h2>Services</h2>
            <ul>
              <li><a href="/web-design/">Web design</a></li>
              <li><a href="/seo/">Search optimization</a></li>
              <li><a href="/ai-search/">AI search &amp; GEO</a></li>

            </ul>
          </div>

          <div>
            <h2>Studio</h2>
            <ul>
              <li><a href="/work/">Work</a></li>
              <li><a href="/about/">About</a></li>
              <li><a href="/contact/">Contact</a></li>
              <li><a href="/#feed">Facebook updates</a></li>
            </ul>
          </div>

          <div>
            <h2>Contact</h2>
            <ul>
              <li><a href="tel:+13237441338">323-744-1338</a></li>
              <li><a href="mailto:steve@gobiya.com">steve@gobiya.com</a></li>
              <li><a href="mailto:hello@gobiya.com">hello@gobiya.com</a></li>
              <li>Los Angeles, California</li>
              <li>Weekdays, 9–6 Pacific</li>
            </ul>
          </div>
        </div>

        <div className="colophon">

          <p>© {new Date().getFullYear()} Gobiya. Web design &amp; search optimization, Los Angeles.</p>
        </div>
      </div>
    </footer>
  )
}
