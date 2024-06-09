import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import WorkoutGif from "./images/WorkoutGif.gif";
import PetSitGif3 from "./images/PetSitGif3.gif";

const WelcomeMessage = styled.div`
  background-color: #fff2eb;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  padding: 20px;
  margin: 20px auto;
  max-width: 800px;

  @media (max-width: 800px) {
    padding: 15px;
  }
`;

const Introduction = styled.div`
  text-align: center;
`;

const Heading = styled.h2`
  font-size: 2em;
  margin-bottom: 20px;
  color: #333;
`;

const CloseButton = styled.button`
  background-color: #007BFF;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1em;
  margin-bottom: 15px;
  margin-top: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #0056b3;
  }
`;

const ServiceCard = styled.div`
  background-color: #ffc09f;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  margin: 20px auto;
  max-width: 800px;

  &:hover {
    transform: translateY(-5px);
    transition: transform 0.3s ease;
  }
`;

const Button = styled.a`
  display: inline-block;
  width: 200px;
  padding: 12px 20px;
  margin: 10px;
  border: none;
  border-radius: 6px;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  text-decoration: none;
  background-color: #3498db;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s;

  &:hover {
    background-color: #2980b9;
  }
`;

const ImageContainer = styled.div`
  width: 80%;
  max-width: 456px;
  margin: 20px auto;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

const GifImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
  border-radius: 8px;
`;

const Programming = ({ closeModal }) => {

  const topElement = useRef(null);

  function scrollToTop() {
    topElement?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToTop()
  }, [])

  return (
    <WelcomeMessage ref={topElement}>
      <Introduction>
        <Heading>Software Development</Heading>
        <CloseButton onClick={closeModal}>Take Me Home</CloseButton>
        <p>
          Welcome to my programming portfolio! I'm a web developer proficient with JavaScript, Ruby on Rails, React, HTML, and CSS. With a background in the animal care industry, I've been combining my love for animals with my coding skills to create projects for my dog walking business. I'm still exploring the world of web development, and my portfolio showcases my journey as I learn and grow. Take a look at my projects to visualize my progress.
        </p>
      </Introduction>
      <h2>Projects</h2>
      <ServiceCard>
        <h2>Dog Walking Application</h2>
        <h3>React, Ruby on Rails, HTML, CSS</h3>
        <p>
          This full-stack application, built with Ruby on Rails and React, lets you manage and track your dog walking services. Utilizing AWS S3 for file storage, it's great for storing pet information, scheduling walks, and tracking finances.
        </p>
        <Button target="_blank" href="https://youtu.be/vGsZPkvNa5Y">Video Walkthrough</Button>
        <Button target="_blank" href="https://dog-walking-app.onrender.com">Deployed Website Link</Button>
        <Button target="_blank" href="https://github.com/beaulazear/dog-walking-app.git">Github Repository Link</Button>
      </ServiceCard>
      <ServiceCard>
        <h2>Pokemon Guide</h2>
        <h3>React, Javascript, HTML, CSS</h3>
        <p>Single page application built using React that sorts and displays data from <a href="https://pokeapi.co/">pokeapi.co</a>. Used as a quick reference for all pokemon. Styled with styled components.</p>
        <Button target="_blank" href="https://beaulazear.github.io/pokemon/">Deployed Website Link</Button>
        <br />
        <Button target="_blank" href="https://github.com/beaulazear/pokemon">Github Repository Link</Button>
      </ServiceCard>
      <ServiceCard>
        <h2>www.beaulazear.com</h2>
        <h3>React, Javascript, HTML, CSS</h3>
        <p>The website you are curerntly on! Single page application made with React and styled components. Email.js implemented for client inquiries. Made for marketing my business / providing information to new clients.</p>
        <Button target="_blank" href="https://beaulazear.com/">Deployed Website Link</Button>
        <br />
        <Button target="_blank" href="https://github.com/beaulazear/beaus-website">Github Repository Link</Button>
      </ServiceCard>
      <ServiceCard>
        <h2>Aria Design Consultants</h2>
        <h3>React, HTML, CSS, Bootstrap</h3>
        <p>Single page application built for a client for marketing purposes using primarily React. Displays recent projects and some other company content. I use a few design libraries, Bootstrap, Ant, and Styled Components.</p>
        <Button target="_blank" href="https://beaulazear.github.io/michael-personal-site/">Deployed Website Link</Button>
        <br />
        <Button target="_blank" href="https://github.com/beaulazear/michael-personal-site.git">Github Repository Link</Button>
      </ServiceCard>
      <ServiceCard>
        <h2>Personal Marketing Website</h2>
        <h3>React, Javascript, HTML, CSS</h3>
        <p>Single page application made with React for information/resume sharing & personal marketing. Utilized email.js for contact functionality.</p>
        <Button target="_blank" href="https://beaulazear.github.io/nadine/#/">Deployed Website Link</Button>
        <br />
        <Button target="_blank" href="https://github.com/beaulazear/nadine">Github Repository Link</Button>
      </ServiceCard>
      <ServiceCard>
        <h2>Pet Sitting Application</h2>
        <h3>React, Ruby on Rails, HTML, CSS</h3>
        <p>Full stack application built with Ruby on Rails, and React. Users can create both a petsitter and client account. Clients can contact pet sitters and book pet sit requests. Application is not yet deployed.</p>
        <br />
        <ImageContainer>
          <GifImage src={PetSitGif3} alt="gif of this project" />
        </ImageContainer>
        <br />
        <Button target="_blank" href="https://github.com/beaulazear/pet-sitting-app.git">Github Repository Link</Button>
        <br />
        <Button target="_blank" href="https://www.youtube.com/watch?v=n1pzEzciu1E&feature=youtu.be">Video Demo</Button>
      </ServiceCard>
      <ServiceCard>

      </ServiceCard>
      <ServiceCard>
        <h2>Exercise/Workout Log</h2>
        <h3>React, Ruby (ActiveRecord & Sinatra), HTML, CSS</h3>
        <p>
          Single page application made with Ruby, React, Active Record, and Sinatra. Front end and database are in separate repositories - clone both and run locally. Users can create their own exercises and add workout data to view trends over time.
        </p>
        <ImageContainer>
          <GifImage src={WorkoutGif} alt="gif of this project" />
        </ImageContainer>
        <Button target="_blank" href="https://github.com/beaulazear/react-sinatra-project">Github Repository Link</Button>
        <Button target="_blank" href="https://github.com/beaulazear/phase-3-sinatra-react-project">Database Repository Link</Button>
      </ServiceCard>
    </WelcomeMessage>
  );
};

export default Programming;
