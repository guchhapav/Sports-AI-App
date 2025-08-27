import React from 'react';
import { useApp } from '../context/AppContext';
import NewsCard from '../components/NewsCard';
import { TrendingUp, BookOpen, Star } from 'lucide-react';

const Dashboard: React.FC = () => {
  const { getPersonalizedNews, preferences } = useApp();
  const news = getPersonalizedNews();

  const followingNews = news.filter(article => 
    preferences.followingSports.includes(article.sport)
  );
  
  const curiousNews = news.filter(article => 
    preferences.curiousSports.includes(article.sport)
  );

  if (news.length === 0) {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 text-center">
            <div className="card">
              <div className="card-body py-5">
                <TrendingUp size={48} className="text-muted mb-3" />
                <h3>Welcome to SportsHub!</h3>
                <p className="text-muted mb-4">
                  Start by selecting your favorite sports in the preferences to get personalized news.
                </p>
                <a href="/preferences" className="btn btn-primary">
                  Set Your Preferences
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 mb-4">
          <h1 className="display-5 fw-bold">Your Sports Dashboard</h1>
          <p className="lead text-muted">
            Stay updated with personalized news from your favorite sports
          </p>
        </div>
      </div>

      <div className="row">
        {followingNews.length > 0 && (
          <div className="col-lg-6 mb-4">
            <div className="d-flex align-items-center mb-3">
              <Star className="text-warning me-2" size={24} />
              <h2 className="h4 mb-0">Following Sports</h2>
            </div>
            <div className="row">
              {followingNews.map(article => (
                <div key={article.id} className="col-12">
                  <NewsCard article={article} />
                </div>
              ))}
            </div>
          </div>
        )}

        {curiousNews.length > 0 && (
          <div className="col-lg-6 mb-4">
            <div className="d-flex align-items-center mb-3">
              <BookOpen className="text-info me-2" size={24} />
              <h2 className="h4 mb-0">Learning About</h2>
            </div>
            <div className="row">
              {curiousNews.map(article => (
                <div key={article.id} className="col-12">
                  <NewsCard article={article} isEducational={article.isEducational} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;