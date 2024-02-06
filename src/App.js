import React from 'react';
import './App.css';
import myImage from './img/1.jpg';
import '@fortawesome/fontawesome-free/css/all.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <div className="first-quadrant">
            <img src={myImage} alt="Alt" width="200" height="200" />
            <div className="personal-info">
              <a>Bartosz Sochacki</a>
              <p className="subtitle">APS Consultant</p>
              
            </div>
            <div className="social-icons">
                <a href="https://github.com/BartoszSochacki1" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGithub} size="2x" />
                </a>
                {" "}
                <a href="https://www.linkedin.com/in/bartosz-sochacki-915a05228/" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
              </div>
            {/* Dodaj odnośniki do bloga i profilu po prawej stronie */}
            <div className="blog-profile-links">
              <a href="" target="_blank" rel="noopener noreferrer">Blog</a>
              {" "}
              <a href="" target="_blank" rel="noopener noreferrer">Profile</a>
            </div>
          </div>
          <div className="vertical-line"></div>
          <div className="text-on-right">
            <p>Profile</p>
          </div>
          <div className="text-on-right2">
            <p>I have been working passionately in IT for 2 years now. The work I did was mainly related to Consulting. 
              I have experience in working with SQL Server Management Studio and Comarch ERP XL.
              My technical skills are enhanced by a robust understanding of design principles, design patterns,
               and a commitment to developing accessible and responsive websites. 
              I have a proven track record of delivering successful projects, both independently and as part of a team. 

              Currently I would like to develop in JS, CSS and HTML. <br/>

              I constantly seek opportunities for learning, staying abreast of the latest industry trends and technological advancements. 
              My ability to quickly grasp new concepts and adapt makes me a valuable addition to any team. 
              In essence, I am a motivated and meticulous web developer with a keen interest in constructing top-notch, user-friendly websites. 
              I am excited about the prospect of contributing my skills and expertise to your upcoming project.
            </p>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;

