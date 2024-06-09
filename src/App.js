import { useState, useEffect } from 'react';
import './App.css';
import TemporaryModal from './TemporaryModal';
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
  useEffect(() => {
    CLOUDS({
      el: '#vanta'
    });
  }, []);

  const [showTemporaryModal, setShowTemporaryModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null); // To store the selected image

  const [headerName, setHeaderName] = useState('Christian Beau Lazear');
  const [isModal1Open, setIsModal1Open] = useState(false);
  const [isModal2Open, setIsModal2Open] = useState(false);
  const [isModal3Open, setIsModal3Open] = useState(false);
  const [isModal4Open, setIsModal4Open] = useState(false);

  const handleMouseEnter = (name) => {
    setHeaderName(name);
  };

  const handleClick = (modalSetter, image) => {
    setSelectedImage(image); // Store the selected image
    setShowTemporaryModal(true); // Show the temporary modal
  };

  const handleMouseLeave = () => {
    setHeaderName('Christian Beau Lazear');
  };

  const closeModal = (modalSetter) => {
    modalSetter(false);
  };

  return (
    <div className="App">
      <div className='bg' id='vanta'>
        <h1 className='header'>{headerName}</h1>
        <div className='image-container'>
          <img
            src={img1}
            alt="img1"
            className="diamond-img"
            id="top"
            onMouseEnter={() => handleMouseEnter('aboutMe')}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick(setIsModal1Open)}
          />
          <img
            src={img2}
            alt="img2"
            className="diamond-img"
            id="right"
            onMouseEnter={() => handleMouseEnter('animalCare')}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick(setIsModal2Open)}
          />
          <img
            src={img3}
            alt="img3"
            className="diamond-img"
            id="bottom"
            onMouseEnter={() => handleMouseEnter('webDev')}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick(setIsModal3Open)}
          />
          <img
            src={img4}
            alt="img4"
            className="diamond-img"
            id="left"
            onMouseEnter={() => handleMouseEnter('resume')}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick(setIsModal4Open)}
          />
        </div>
      </div>
      {isModal1Open && (
        <Modal1 closeModal={() => closeModal(setIsModal1Open)} />
      )}
      {isModal2Open && (
        <Modal2 closeModal={() => closeModal(setIsModal2Open)} />
      )}
      {isModal3Open && (
        <Modal3 closeModal={() => closeModal(setIsModal3Open)} />
      )}
      {isModal4Open && (
        <Modal4 closeModal={() => closeModal(setIsModal4Open)} />
      )}
      {showTemporaryModal && (
        <TemporaryModal
          image={selectedImage}
          closeModal={() => setShowTemporaryModal(false)}
        />
      )}
    </div>
  );
}

export default App;
