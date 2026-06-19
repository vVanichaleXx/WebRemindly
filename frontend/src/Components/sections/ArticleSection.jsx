import { BookOpen, Clock } from 'lucide-react';
import { articles } from '../../config/homeContent.js';

export default function ArticleSection() {
  return (
    <section id="journal" className="site-section article-section" aria-labelledby="journal-title">
      <div className="section-kicker">Product thinking</div>
      <div className="section-heading-row">
        <h3 id="journal-title">Short notes about the product philosophy.</h3>
        <p>
          Remindly is built around a simple idea: the app should help you decide what matters next,
          then get out of the way.
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
            <div className="article-extra">
              <span>More detail</span>
              <p>{article.extra}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
