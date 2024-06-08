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

  // State to manage header name
  const [headerName, setHeaderName] = useState('Christian Beau Lazear');

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
    setHeaderName('Christian Beau Lazear');
  }

  return (
    <div className="App">
      <div className='bg' id='vanta'>
        <h1 className='header'>{headerName}</h1>
        <div className='image-container'>
          {/* Images */}
          <img
            src={img1}
            alt="img1"
            className="diamond-img"
            id="top"
            onMouseEnter={() => handleMouseEnter('Image 1')}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick('Image 1')}
          />
          <img
            src={img2}
            alt="img2"
            className="diamond-img"
            id="right"
            onMouseEnter={() => handleMouseEnter('Image 2')}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick('Image 2')}
          />
          <img
            src={img3}
            alt="img3"
            className="diamond-img"
            id="bottom"
            onMouseEnter={() => handleMouseEnter('Image 3')}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick('Image 3')}
          />
          <img
            src={img4}
            alt="img4"
            className="diamond-img"
            id="left"
            onMouseEnter={() => handleMouseEnter('Image 4')}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick('Image 4')}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
