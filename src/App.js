import { useState, useEffect } from 'react';
import './App.css';
import CLOUDS from 'vanta/dist/vanta.clouds.min';
import img1 from './images/img1.jpeg'; // Replace with your image paths
import img2 from './images/img2.jpg';
import img3 from './images/img3.jpg';
import img4 from './images/img4.jpg';

function App() {
  useEffect(() => {
    CLOUDS({
      el: '#vanta'
    })
  }, [])

  const [headerName, setHeaderName] = useState('Beau Lazear');

  const handleMouseEnter = (name) => {
    setHeaderName(name);
  }

  const handleClick = (name) => {
    if (headerName === name) {
      console.log('link click')
    } else {
      setHeaderName(name);
    }
  }

  const handleMouseLeave = () => {
    setHeaderName('Beau Lazear');
  }

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
            onMouseEnter={() => handleMouseEnter('About Me')}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick('About Me')}
          />
          <img
            src={img2}
            alt="img2"
            className="diamond-img"
            id="right"
            onMouseEnter={() => handleMouseEnter('Animal Care')}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick('Animal Care')}
          />
          <img
            src={img3}
            alt="img3"
            className="diamond-img"
            id="bottom"
            onMouseEnter={() => handleMouseEnter('Software Development')}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick('Software Development')}
          />
          <img
            src={img4}
            alt="img4"
            className="diamond-img"
            id="left"
            onMouseEnter={() => handleMouseEnter('Resume')}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick('Resume')}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
