import React from 'react';
import './HomePage.css';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const navigate = useNavigate();
    const goToLogin = () => {
        navigate('/login');
      };

  return (
    <div className="homepage">
      <div className="content-container">
        <div className="header-section">
          <div className="welcome-text">
            <h1>Welcome to Reflect!</h1>
            <p>your emotionally aware digital diary</p>
          </div>
          <div className="splash-image">
            <img src="/images/splash_image.png" alt="Color Splash" />
          </div>
        </div>
        <div className="main-section">
          <div className="bot-image">
            <img src="/images/woman_with_chatbot.png" alt="Digital Assistant" />
          </div>
          <div className="description-section">
            <p>
              Discover a space designed to understand you. This isn't just a
              diary - it's a companion that listens, learns, and helps you
              reflect.
            </p>
            <button className="start-button" onClick={goToLogin} >Start Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
