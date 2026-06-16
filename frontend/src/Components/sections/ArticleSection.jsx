import { BookOpen, Clock } from 'lucide-react';
import { articles } from '../../config/homeContent.js';

export default function ArticleSection() {
  return (
    <section id="journal" className="site-section article-section" aria-labelledby="journal-title">
      <div className="section-kicker">Product thinking</div>
      <div className="section-heading-row">
        <h3 id="journal-title">Short notes about the product philosophy.</h3>
        <p>
          These blocks make the site feel more considered: less sales page, more calm explanation
          of how the app thinks.
        </p>
      </div>

      <div className="article-grid">
        {articles.map((article) => (
          <article key={article.title} className="article-card">
            <div className="article-meta">
              <span><BookOpen size={15} strokeWidth={2.1} /> {article.tag}</span>
              <span><Clock size={15} strokeWidth={2.1} /> {article.readTime}</span>
            </div>
            <h4>{article.title}</h4>
            <p>{article.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
