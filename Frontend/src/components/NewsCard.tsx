import React from 'react';
import { NewsArticle } from '../types';
import { Clock, ExternalLink, BookOpen } from 'lucide-react';

interface NewsCardProps {
  article: NewsArticle;
  isEducational?: boolean;
}

const NewsCard: React.FC<NewsCardProps> = ({ article, isEducational }) => {
  const formatTime = (timestamp: string) => {
    return new Date(timestamp).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getSportColor = (sport: string) => {
    const colors: { [key: string]: string } = {
      football: 'bg-success',
      basketball: 'bg-warning',
      baseball: 'bg-info',
      soccer: 'bg-primary',
      tennis: 'bg-danger',
      hockey: 'bg-secondary'
    };
    return colors[sport] || 'bg-dark';
  };

  return (
    <div className="card news-summary mb-3">
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-start mb-2">
          <div className="d-flex align-items-center gap-2">
            <span className={`badge ${getSportColor(article.sport)} sport-badge`}>
              {article.sport}
            </span>
            {article.isEducational && (
              <BookOpen size={16} className="text-info" title="Educational content" />
            )}
          </div>
          <div className="d-flex align-items-center text-muted small">
            <Clock size={14} className="me-1" />
            {formatTime(article.timestamp)}
          </div>
        </div>
        
        <h5 className="card-title">{article.title}</h5>
        <p className="card-text">{article.summary}</p>
        
        <div className="d-flex justify-content-between align-items-center">
          <small className="text-muted">Source: {article.source}</small>
          <button className="btn btn-outline-primary btn-sm">
            <ExternalLink size={14} className="me-1" />
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;