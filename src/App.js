import { useEffect } from 'react';
import './App.css';
import CLOUDS from 'vanta/dist/vanta.clouds.min';
import img1 from './images/img1.jpeg'; // Replace with your image paths
import img2 from './images/img2.jpeg';
import img3 from './images/img3.jpg';
import img4 from './images/img4.jpg';

function App() {
  useEffect(() => {
    CLOUDS({
      el: '#vanta'
    })
  }, [])

  return (
    <div className="App">
      <div className='bg' id='vanta'>
        <div className='image-container'>
          <h1 className='header'>Christian Beau Lazear</h1>
          <img src={img1} alt="img1" className="diamond-img" id="top" />
          <img src={img2} alt="img2" className="diamond-img" id="right" />
          <img src={img3} alt="img3" className="diamond-img" id="bottom" />
          <img src={img4} alt="img4" className="diamond-img" id="left" />
        </div>
      </div>
    </div>
  );
}

export default App;
