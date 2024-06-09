import { useState, useEffect } from 'react';
import './App.css';
import CLOUDS from 'vanta/dist/vanta.clouds.min';
import img1 from './images/img1.jpeg';
import img2 from './images/img2.jpg';
import img3 from './images/img3.jpg';
import img4 from './images/img4.jpg';
import Modal1 from './Modal1';
import Modal2 from './Modal2';
import Modal3 from './Modal3';
import Modal4 from './Modal4';

function App() {
  const [headerName, setHeaderName] = useState('Christian Beau Lazear');
  const [isModal1Open, setIsModal1Open] = useState(false);
  const [isModal2Open, setIsModal2Open] = useState(false);
  const [isModal3Open, setIsModal3Open] = useState(false);
  const [isModal4Open, setIsModal4Open] = useState(false);
  const [displayHome, setDisplayHome] = useState(true);
  const [hovered, setHovered] = useState({ img1: false, img2: false, img3: false, img4: false });
  const [clickState, setClickState] = useState({ img1: false, img2: false, img3: false, img4: false });

  useEffect(() => {
    if (displayHome) {
      CLOUDS({
        el: '#vanta',
      });
    }
  }, [displayHome]);

  const handleMouseEnter = (name, img) => {
    setHeaderName(name);
    setHovered((prev) => ({ ...prev, [img]: true }));
  };

  const handleMouseLeave = (img) => {
    setHeaderName('Christian Beau Lazear');
    setHovered((prev) => ({ ...prev, [img]: false }));
  };

  const handleImageClick = (img, name, openModal) => {
    if (hovered[img] && clickState[img]) {
      openModal();
    } else {
      handleMouseEnter(name, img);
      setClickState((prev) => ({ ...prev, [img]: true }));

      // Reset the click state after a delay to allow for double clicks
      setTimeout(() => {
        setClickState((prev) => ({ ...prev, [img]: false }));
      }, 1000); // Adjust the delay as needed
    }
  };

  function openModal1() {
    if (hovered.img1) {
      setDisplayHome(false);
      setIsModal1Open(true);
    } else {
      handleMouseEnter('aboutMe', 'img1');
      setClickState((prev) => ({ ...prev, img1: true }));
      setTimeout(() => setClickState((prev) => ({ ...prev, img1: false })), 1000);
    }
  }

  function openModal2() {
    if (hovered.img2) {
      setDisplayHome(false);
      setIsModal2Open(true);
    } else {
      handleMouseEnter('animalCare', 'img2');
      setClickState((prev) => ({ ...prev, img2: true }));
      setTimeout(() => setClickState((prev) => ({ ...prev, img2: false })), 1000);
    }
  }

  function openModal3() {
    if (hovered.img3) {
      setDisplayHome(false);
      setIsModal3Open(true);
    } else {
      handleMouseEnter('webDev', 'img3');
      setClickState((prev) => ({ ...prev, img3: true }));
      setTimeout(() => setClickState((prev) => ({ ...prev, img3: false })), 1000);
    }
  }

  function openModal4() {
    if (hovered.img4) {
      setDisplayHome(false);
      setIsModal4Open(true);
    } else {
      handleMouseEnter('resume', 'img4');
      setClickState((prev) => ({ ...prev, img4: true }));
      setTimeout(() => setClickState((prev) => ({ ...prev, img4: false })), 1000);
    }
  }

  const closeModal = () => {
    setIsModal1Open(false);
    setIsModal2Open(false);
    setIsModal3Open(false);
    setIsModal4Open(false);
    setDisplayHome(true);
    handleMouseLeave()
    setHovered({ img1: false, img2: false, img3: false, img4: false });
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
              onClick={() => openModal1()}
            />
            <img
              src={img2}
              alt="img2"
              className="diamond-img"
              id="right"
              onMouseEnter={() => handleMouseEnter('animalCare', 'img2')}
              onMouseLeave={() => handleMouseLeave('img2')}
              onClick={() => openModal2()}
            />
            <img
              src={img3}
              alt="img3"
              className="diamond-img"
              id="bottom"
              onMouseEnter={() => handleMouseEnter('webDev', 'img3')}
              onMouseLeave={() => handleMouseLeave('img3')}
              onClick={() => openModal3()}
            />
            <img
              src={img4}
              alt="img4"
              className="diamond-img"
              id="left"
              onMouseEnter={() => handleMouseEnter('resume', 'img4')}
              onMouseLeave={() => handleMouseLeave('img4')}
              onClick={() => openModal4()}
            />
          </div>
        </div>
      )}
      {isModal1Open && <Modal1 closeModal={closeModal} />}
      {isModal2Open && <Modal2 closeModal={closeModal} />}
      {isModal3Open && <Modal3 closeModal={closeModal} />}
      {isModal4Open && <Modal4 closeModal={closeModal} />}
    </div>
  );
}

export default App;
