import React from 'react';
import { Info, Github, Globe, Mail } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card">
            <div className="card-header bg-primary text-white">
              <div className="d-flex align-items-center">
                <Info className="me-2" size={24} />
                <h4 className="mb-0">About SportsHub</h4>
              </div>
            </div>
            
            <div className="card-body">
              <div className="row">
                <div className="col-md-12 mb-4">
                  <h2 className="h4">Welcome to SportsHub</h2>
                  <p className="lead">
                    Your personalized sports news and learning platform
                  </p>
                </div>
              </div>
              
              <div className="row">
                <div className="col-md-6 mb-4">
                  <h3 className="h5">Features</h3>
                  <ul className="list-unstyled">
                    <li className="mb-2">
                      <strong>Personalized Dashboard:</strong> Get news tailored to your interests
                    </li>
                    <li className="mb-2">
                      <strong>Educational Content:</strong> Learn about new sports with contextual summaries
                    </li>
                    <li className="mb-2">
                      <strong>Smart Chat:</strong> Ask questions about sports and get instant answers
                    </li>
                    <li className="mb-2">
                      <strong>Dark Mode:</strong> Comfortable viewing in any lighting
                    </li>
                    <li className="mb-2">
                      <strong>Responsive Design:</strong> Works perfectly on all devices
                    </li>
                  </ul>
                </div>
                
                <div className="col-md-6 mb-4">
                  <h3 className="h5">How It Works</h3>
                  <ol className="list-unstyled">
                    <li className="mb-2">
                      <strong>1. Set Preferences:</strong> Choose sports you follow and those you're curious about
                    </li>
                    <li className="mb-2">
                      <strong>2. Get Personalized News:</strong> View tailored content on your dashboard
                    </li>
                    <li className="mb-2">
                      <strong>3. Learn & Explore:</strong> Educational content for new sports
                    </li>
                    <li className="mb-2">
                      <strong>4. Ask Questions:</strong> Use the chat feature for instant answers
                    </li>
                  </ol>
                </div>
              </div>
              
              <div className="row">
                <div className="col-12 mb-4">
                  <h3 className="h5">Technology Stack</h3>
                  <div className="row">
                    <div className="col-md-6">
                      <ul className="list-unstyled">
                        <li><strong>Frontend:</strong> React 18 with TypeScript</li>
                        <li><strong>Styling:</strong> Bootstrap 5</li>
                        <li><strong>Icons:</strong> Lucide React</li>
                        <li><strong>Routing:</strong> React Router</li>
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <ul className="list-unstyled">
                        <li><strong>State Management:</strong> React Context</li>
                        <li><strong>Build Tool:</strong> Vite</li>
                        <li><strong>Package Manager:</strong> npm</li>
                        <li><strong>Data:</strong> Mock data with API placeholders</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="row">
                <div className="col-12">
                  <h3 className="h5">API Integration</h3>
                  <div className="alert alert-info">
                    <strong>Ready for Real Data:</strong> The app is designed with API placeholders for easy integration with real sports news services, user authentication, and data persistence.
                  </div>
                </div>
              </div>
            </div>
            
            <div className="card-footer">
              <div className="row text-center">
                <div className="col-md-4 mb-2">
                  <div className="d-flex align-items-center justify-content-center">
                    <Github className="me-2" size={18} />
                    <span>Open Source</span>
                  </div>
                </div>
                <div className="col-md-4 mb-2">
                  <div className="d-flex align-items-center justify-content-center">
                    <Globe className="me-2" size={18} />
                    <span>Web Application</span>
                  </div>
                </div>
                <div className="col-md-4 mb-2">
                  <div className="d-flex align-items-center justify-content-center">
                    <Mail className="me-2" size={18} />
                    <span>Support Available</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;