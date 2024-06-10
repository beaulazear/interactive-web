import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import WorkoutGif from "./images/WorkoutGif.gif";
import PetSitGif3 from "./images/PetSitGif3.gif";
// import DogWalkGif from "./images/DogWalkGif.gif";

const welcomeMessageStyles = {
    fontFamily: 'Helvetica, sans-serif',
    backgroundColor: '#fff2eb',
    margin: '0 auto',
    paddingBottom: '20px',
    paddingRight: '20px',
    paddingLeft: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
};

const StyledIntroduction = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 6px;

  @media (max-width: 800px) {
    max-width: 600px;
  }
`;

const Heading = styled.h2`
  font-size: 2em;
  margin-bottom: 10px;
  margin-top: 15px;
  color: #333;

  @media (max-width: 800px) {
    font-size: 2em;
    margin-bottom: 10px;
    color: #333;
  }
`;

const Paragraph = styled.p`
  font-size: 1.2em;
  color: #777;
  line-height: 1.6;
  text-align: left;

  @media (max-width: 800px) {
    font-size: 1em;
    color: #777;
    line-height: 1.6;
  }
`;

const headingStyles = {
    fontSize: '30px',
    marginBottom: '20px',
    color: '#333',
};

const ServiceCard = styled.div`
  background-color: #ffc09f;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;

  @media (min-width: 800px) {
    width: 800px;
    margin: 0 auto; /* Center the component horizontally */
    margin-bottom: 20px;
  }
`;

const CloseButton = styled.button`
  background-color: #007BFF;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1em;
  align-self: center;
  margin-bottom: 15px;
  margin-top: 5px;

  &:hover {
    background-color: #0056b3;
  }

  @media (max-width: 768px) {
    padding: 8px 16px;
    font-size: 0.9em;
  }
`;

const h2Styles = {
    color: '#333',
    fontSize: '24px',
    marginBottom: '10px',
    marginTop: '0px'
};

const h3Styles = {
    color: '#555',
    fontSize: '18px',
};

const pStyles = {
    color: '#777',
    fontSize: '18px',
    textAlign: 'left',
    margin: '5px',
    padding: '10px'
};

const gifContainerStyle = {
    width: '80%', /* Adjust this value to control the size of the GIF */
    maxWidth: '456px', /* The original width of the GIF */
    margin: '0 auto', /* Center the container horizontally */
    overflow: 'hidden', /* Hide any overflowing parts of the GIF */
    borderRadius: '8px', /* Add a slight border radius for a modern look */
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', /* Add a subtle shadow for depth */
};

const gifImageStyle = {
    width: '100%', /* Ensure the image fills the container */
    height: 'auto', /* Maintain the original aspect ratio */
    display: 'block', /* Remove any extra space below the image */
    borderRadius: '8px', /* Add the same border radius as the container */
};

const modernButtonStyle = {
    display: 'inline-block',
    width: '250px',
    padding: '12px 20px',
    margin: '10px',
    border: 'none',
    borderRadius: '6px',
    color: '#fff',
    fontSize: '16px',
    fontWeight: 'bold',
    textDecoration: 'none',
    backgroundColor: '#3498db', /* Use your preferred color or any other modern color */
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    transition: 'background-color 0.3s',
};

const Programming = ({closeModal}) => {

    const topElement = useRef(null);

    function scrollToTop() {
        topElement?.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToTop()
    }, [])

    return (
        <div style={welcomeMessageStyles} ref={topElement}>
            <StyledIntroduction>
                <Heading>Software Development</Heading>
                <CloseButton onClick={closeModal}>Take Me Home</CloseButton>
                <Paragraph>
                    Welcome to my programming portfolio! I'm a web developer proficient with JavaScript, Ruby on Rails, React, HTML, and CSS. With a background in the animal care industry, I've been combining my love for animals with my coding skills to create projects for my dog walking business. I'm still exploring the world of web development, and my portfolio showcases my journey as I learn and grow. Take a look at my projects to visualize my progress.
                </Paragraph>
            </StyledIntroduction>
            <h2 style={headingStyles}>Projects</h2>
            <ServiceCard>
                <h2 style={h2Styles}>Dog Walking Application</h2>
                <h3 style={h3Styles}>React, Ruby on Rails, HTML, CSS</h3>
                <p style={pStyles}>This full-stack application, built with Ruby on Rails and React, lets you manage and track your dog walking services. Utilizing AWS S3 for file storage, it's great for storing pet information, scheduling walks, and tracking finances.</p>
                {/* <br />
        <div style={gifContainerStyle}>
          <img src={DogWalkGif} alt="gif of this project" style={gifImageStyle} />
        </div>
        <br /> */}
                <a style={modernButtonStyle} target="_blank" href="https://youtu.be/vGsZPkvNa5Y">Video Walkthrough</a>
                <br />
                <a style={modernButtonStyle} target="_blank" href="https://dog-walking-app.onrender.com">Deployed Website Link</a>
                <br />
                <a style={modernButtonStyle} target="_blank" href="https://github.com/beaulazear/dog-walking-app.git">Github Repository Link</a>
            </ServiceCard>
            <ServiceCard>
                <h2 style={h2Styles}>Pokemon Guide</h2>
                <h3 style={h3Styles}>React, Javascript, HTML, CSS</h3>
                <p style={pStyles}>Single page application built using React that sorts and displays data from <a href="https://pokeapi.co/">pokeapi.co</a>. Used as a quick reference for all pokemon. Styled with styled components.</p>
                <a style={modernButtonStyle} target="_blank" href="https://beaulazear.github.io/pokemon/">Deployed Website Link</a>
                <br />
                <a style={modernButtonStyle} target="_blank" href="https://github.com/beaulazear/pokemon">Github Repository Link</a>
            </ServiceCard>
            <ServiceCard>
                <h2 style={h2Styles}>www.beaulazear.com</h2>
                <h3 style={h3Styles}>React, Javascript, HTML, CSS</h3>
                <p style={pStyles}>The website you are curerntly on! Single page application made with React and styled components. Email.js implemented for client inquiries. Made for marketing my business / providing information to new clients.</p>
                <a style={modernButtonStyle} target="_blank" href="https://beaulazear.com/">Deployed Website Link</a>
                <br />
                <a style={modernButtonStyle} target="_blank" href="https://github.com/beaulazear/beaus-website">Github Repository Link</a>
            </ServiceCard>
            <ServiceCard>
                <h2 style={h2Styles}>Aria Design Consultants</h2>
                <h3 style={h3Styles}>React, HTML, CSS, Bootstrap</h3>
                <p style={pStyles}>Single page application built for a client for marketing purposes using primarily React. Displays recent projects and some other company content. I use a few design libraries, Bootstrap, Ant, and Styled Components.</p>
                <a style={modernButtonStyle} target="_blank" href="https://beaulazear.github.io/michael-personal-site/">Deployed Website Link</a>
                <br />
                <a style={modernButtonStyle} target="_blank" href="https://github.com/beaulazear/michael-personal-site.git">Github Repository Link</a>
            </ServiceCard>
            <ServiceCard>
                <h2 style={h2Styles}>Personal Marketing Website</h2>
                <h3 style={h3Styles}>React, Javascript, HTML, CSS</h3>
                <p style={pStyles}>Single page application made with React for information/resume sharing & personal marketing. Utilized email.js for contact functionality.</p>
                <a style={modernButtonStyle} target="_blank" href="https://beaulazear.github.io/nadine/#/">Deployed Website Link</a>
                <br />
                <a style={modernButtonStyle} target="_blank" href="https://github.com/beaulazear/nadine">Github Repository Link</a>
            </ServiceCard>
            <ServiceCard>
                <h2 style={h2Styles}>Pet Sitting Application</h2>
                <h3 style={h3Styles}>React, Ruby on Rails, HTML, CSS</h3>
                <p style={pStyles}>Full stack application built with Ruby on Rails, and React. Users can create both a petsitter and client account. Clients can contact pet sitters and book pet sit requests. Application is not yet deployed.</p>
                <br />
                <div style={gifContainerStyle}>
                    <img src={PetSitGif3} alt="gif of this project" style={gifImageStyle} />
                </div>
                <br />
                <a style={modernButtonStyle} target="_blank" href="https://github.com/beaulazear/pet-sitting-app.git">Github Repository Link</a>
                <br />
                <a style={modernButtonStyle} target="_blank" href="https://www.youtube.com/watch?v=n1pzEzciu1E&feature=youtu.be">Video Demo</a>
            </ServiceCard>
            <ServiceCard>
                <h2 style={h2Styles}>Exercise/Workout Log</h2>
                <h3 style={h3Styles}>React, Ruby (ActiveRecord & Sinatra), HTML, CSS</h3>
                <p style={pStyles}>Single page application made with Ruby, React, Active Record, and Sinatra. Front end and database are in seperate repositories - clone both and run locally. Users can create their own exercises and add workout data to view trends over time.</p>
                <div style={gifContainerStyle}>
                    <img src={WorkoutGif} alt="gif of this project" style={gifImageStyle} />
                </div>
                <br />
                <a style={modernButtonStyle} target="_blank" href="https://github.com/beaulazear/react-sinatra-project">Github Repository Link</a>
                <br />
                <a style={modernButtonStyle} target="_blank" href="https://github.com/beaulazear/phase-3-sinatra-react-project">Database Repository Link</a>
            </ServiceCard>
        </div>
    );
};

export default Programming;
