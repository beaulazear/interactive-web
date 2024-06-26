import { useState, useEffect } from 'react';
import './App.css';
import CLOUDS from 'vanta/dist/vanta.clouds.min';
import img1 from './images/img1.jpeg';
import img2 from './images/img2.jpg';
import img3 from './images/img3.jpg';
import img4 from './images/img4.jpg';
import mailImage from './images/mail.jpg'; // Import your mail image
import Github from './images/Github.jpg';
import Linkedin from './images/Linkedin.jpg';
import Modal1 from './Modal1';
import Modal2 from './Modal2';
import Modal3 from './Modal3';
import Modal4 from './Modal4';
import Contact from './Contact'; // Import the Contact component

function App() {
  const [headerName, setHeaderName] = useState('beauLazear');
  const [isModal1Open, setIsModal1Open] = useState(false);
  const [isModal2Open, setIsModal2Open] = useState(false);
  const [isModal3Open, setIsModal3Open] = useState(false);
  const [isModal4Open, setIsModal4Open] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [displayHome, setDisplayHome] = useState(true);
  const [hovered, setHovered] = useState({ img1: false, img2: false, img3: false, img4: false, github: false, linkedin: false, mail: false });
  const [clickState, setClickState] = useState({ img1: false, img2: false, img3: false, img4: false, github: false, linkedin: false, mail: false });
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const touchScreenCheck = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    setIsTouchDevice(touchScreenCheck);
  }, []);

  useEffect(() => {
    if (displayHome) {
      CLOUDS({
        el: '#vanta',
      });
    }
  }, [displayHome]);

  const openContact = () => {
    setDisplayHome(false);
    setIsContactOpen(true); // Open the contact modal
  };

  const handleMouseEnter = (name, img) => {
    setHeaderName(name);
    setHovered((prev) => ({ ...prev, [img]: true }));
  };

  const handleMouseLeave = (img) => {
    setHeaderName('beauLazear');
    setHovered((prev) => ({ ...prev, [img]: false }));
  };

  const handleImageClick = (img, name, openModal) => {
    if (isTouchDevice) {
      if (!clickState[img]) {
        handleMouseEnter(name, img);
        setClickState((prev) => ({ ...prev, [img]: true }));

        setTimeout(() => {
          setClickState((prev) => ({ ...prev, [img]: false }));
        }, 3000);
      } else {
        openModal();
        setClickState((prev) => ({ ...prev, [img]: false }));
      }
    } else {
      openModal();
    }
  };

  const openModal1 = () => {
    setDisplayHome(false);
    setIsModal1Open(true);
  };

  const openModal2 = () => {
    setDisplayHome(false);
    setIsModal2Open(true);
  };

  const openModal3 = () => {
    setDisplayHome(false);
    setIsModal3Open(true);
  };

  const openModal4 = () => {
    setDisplayHome(false);
    setIsModal4Open(true);
  };

  const openGithub = () => {
    window.open('https://github.com/beaulazear', '_blank');
  };

  const openLinkedin = () => {
    window.open('https://linkedin.com/in/beau-lazear/', '_blank');
  };
  const closeModal = () => {
    setIsModal1Open(false);
    setIsModal2Open(false);
    setIsModal3Open(false);
    setIsModal4Open(false);
    setIsContactOpen(false); // Corrected line
    setDisplayHome(true);
    setHovered({ img1: false, img2: false, img3: false, img4: false, github: false, linkedin: false });
  };

  return (
    <div className="App">
      {displayHome === true && (
        <div className="bg" id="vanta">
          <h1 className="header">{headerName}</h1>
          <div className="image-container">
            <img
              src={img1}
              alt="img1"
              className="diamond-img"
              id="top"
              onMouseEnter={() => handleMouseEnter('aboutMe', 'img1')}
              onMouseLeave={() => handleMouseLeave('img1')}
              onClick={() => handleImageClick('img1', 'aboutMe', openModal1)}
            />
            <img
              src={img4}
              alt="img4"
              className="diamond-img"
              id="left"
              onMouseEnter={() => handleMouseEnter('resume', 'img4')}
              onMouseLeave={() => handleMouseLeave('img4')}
              onClick={() => handleImageClick('img4', 'resume', openModal4)}
            />
            <img
              src={img2}
              alt="img2"
              className="diamond-img"
              id="right"
              onMouseEnter={() => handleMouseEnter('animalCare ', 'img2')}
              onMouseLeave={() => handleMouseLeave('img2')}
              onClick={() => handleImageClick('img2', 'animalCare', openModal2)}
            />
            <img
              src={img3}
              alt="img3"
              className="diamond-img"
              id="bottom"
              onMouseEnter={() => handleMouseEnter('webDev', 'img3')}
              onMouseLeave={() => handleMouseLeave('img3')}
              onClick={() => handleImageClick('img3', 'webDev', openModal3)}
            />
            <img
              src={Github}
              alt="github"
              className="diamond-img"
              onMouseEnter={() => handleMouseEnter('gitHub', 'github')}
              onMouseLeave={() => handleMouseLeave('github')}
              onClick={() => handleImageClick('github', 'gitHub', openGithub)}
            />
            <img
              src={Linkedin}
              alt="linkedin"
              className="diamond-img"
              onMouseEnter={() => handleMouseEnter('linkedIn', 'linkedin')}
              onMouseLeave={() => handleMouseLeave('linkedin')}
              onClick={() => handleImageClick('linkedin', 'linkedIn', openLinkedin)}
            />
            <img
              src={mailImage} // Add the source for your mail image
              alt="mail" // Add an appropriate alt text
              className={`diamond-img ${hovered.mail ? 'hovered' : ''}`} // Apply any necessary classes and add hover effect
              onMouseEnter={() => handleMouseEnter('emailMe', 'mail')} // Handle mouse enter event
              onMouseLeave={() => handleMouseLeave('mail')} // Handle mouse leave event
              onClick={() => handleImageClick('mail', 'mail', openContact)} // Handle click event
            />
          </div>
        </div>
      )}
      {isModal1Open && <Modal1 closeModal={closeModal} />}
      {isModal2Open && <Modal2 closeModal={closeModal} />}
      {isModal3Open && <Modal3 closeModal={closeModal} />}
      {isModal4Open && <Modal4 closeModal={closeModal} />}
      {isContactOpen && <Contact closeModal={closeModal} />}
    </div>
  );
}

export default App;
