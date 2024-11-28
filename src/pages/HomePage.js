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
            <button className="start-button" onClick={goToLogin}>
              Start Now
            </button>
          </div>
        </div>
        <div className="insights-section">
          <div className="text-section">
            <p>
              Our intelligent system goes beyond simple journaling by analyzing
              your entries to uncover the emotions behind your words, highlight
              significant events, and provide personalized insights.
            </p>
          </div>
          <div className="text-section-2">
            <p>
              With an emphasis on your well-being, we aim to help you understand
              your feelings, patterns, and relationships, offering a deeper
              connection to your inner world.
            </p>
          </div>
          <div className="content-section">
            <div className="image-with-icons">
              <img
                src="/images/man_with_bot.png"
                alt="Robot analyzing emotions"
              />
            </div>
            <div className="description-section">
              <img
                src="/images/emotions.png"
                alt="Emotions row"
                className="emotions-image"
              />
              <p>
                Start your journey of self-discovery and emotional growth today.
                Let your thoughts flow, and we'll help you make sense of them.
              </p>
              <p>
                <span className="blue-text">Write.</span>{" "}
                <span className="grey-text">Reflect.</span>{" "}
                <span className="blue-text">Grow.</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="team-header">
        <h2>MEET THE TEAM!</h2>
      </div>
      <div className="team-section">
        <div className="team-member">
          <img
            src="/images/hawraa.png"
            alt="Hawraa Khalil"
            className="team-image"
          />
          <div className="team-info">
            <h2>Hawraa Khalil</h2>
            <p>Frontend and AI developer</p>
            <p>Computer Science and Engineering Senior at the American University of Beirut</p>
            <p>Fun fact about me:</p>
            <p>
              Connect with me on <a href="https://www.linkedin.com/in/hawraa-khalil-13658a24b/" className="linkedin-link" target="_blank" rel="noopener noreferrer">LinkedIn!</a>
            </p>
          </div>
        </div>
        <div className="team-member">
          <img
            src="/images/stef.png"
            alt="Stefanie Samaha"
            className="team-image"
          />
          <div className="team-info">
            <h2>Stefanie Samaha</h2>
            <p>AI developer and Researcher</p>
            <p>
              Computer Science and Engineering Senior at the American University
              of Beirut
            </p>
            <p>Fun fact about me:</p>
            <p>
              Connect with me on <a href="https://www.linkedin.com/in/stefanie-samaha-157598202/" className="linkedin-link" target="_blank" rel="noopener noreferrer">LinkedIn!</a>
            </p>
          </div>
        </div>
        <div className="team-member">
          <img
            src="/images/ruba.png"
            alt="Ruba El Houssami"
            className="team-image"
          />
          <div className="team-info">
            <h2>Ruba El Houssami</h2>
            <p>Backend and AI developer</p>
            <p>
              Computer Science and Engineering Senior at the American University
              of Beirut
            </p>
            <p>Fun fact about me:</p>
            <p>
              Connect with me on <a href="https://www.linkedin.com/in/ruba-houssami/" className="linkedin-link" target="_blank" rel="noopener noreferrer">LinkedIn!</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
