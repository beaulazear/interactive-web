import React from 'react';
import styled from 'styled-components';
import BeauAndRu from './images/BeauAndRu.JPG';
import CroppedBeau from './images/CroppedBeau.jpeg';
import BeauReykaMangoRu from './images/BeauReykaMangoRu.jpeg';
import BeauWithHornbill from './images/BeauAndHornbill.jpeg';

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); 
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: #f5f5f5; /* Light gray for a cozy feel */
  padding: 30px;
  border-radius: 20px; /* Bigger border radius for extra softness */
  max-width: 600px;
  width: 90%;
  max-height: 90%;
  overflow-y: auto;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3); /* Extra depth for a touch of magic */

  @media (max-width: 768px) {
    padding: 20px; /* A bit more breathing room for smaller screens */
    max-width: 95%;
  }
`;

const ImageWrapper = styled.div`
  text-align: center;
  margin-bottom: 30px;
`;

const Image = styled.img`
  max-width: 100%; /* Let the image shine in its full glory */
  height: auto;
  border-radius: 20px; /* Match the container's border radius */
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2); /* Subtle shadow to lift it up */

  @media (max-width: 768px) {
    max-width: 90%; /* Smaller screens deserve some love too */
  }
`;

const StyledIntroduction = styled.div`
  margin-top: 30px;
  text-align: center; /* Center align text */
`;

const SubHeading = styled.h3`
  margin-bottom: 20px; /* Extra space for a grand entrance */
  color: #333;
  font-size: 2em; /* Bigger font for more impact */
  text-align: center; /* Center align text */

  @media (max-width: 768px) {
    font-size: 1.5em;
  }
`;

const Paragraph = styled.p`
  margin-bottom: 30px; /* Let each paragraph breathe */
  line-height: 1.6;
  color: #555;
`;

const CloseButton = styled.button`
  background-color: #ff6b6b; /* Bright red for attention */
  color: white;
  padding: 15px 30px;
  border: none;
  border-radius: 10px; /* Rounded corners for a friendly touch */
  cursor: pointer;
  font-size: 1.2em; /* Bigger button for easier clicking */
  align-self: center;
  width: 100%;

  &:hover {
    background-color: #ff4d4d; /* Darker red on hover for a pop effect */
  }

  @media (max-width: 768px) {
    padding: 12px 24px; /* Smaller screens need smaller buttons */
    font-size: 1em;
  }
`;

function Modal1({ closeModal }) {
  return (
    <ModalWrapper>
      <ModalContent>
        <ImageWrapper>
          <Image src={BeauWithHornbill} alt="Beau with a hornbill" />
        </ImageWrapper>
        <StyledIntroduction>
          <SubHeading>🌟 What I Do 🌟</SubHeading>
          <Paragraph>
            Hi, I'm Beau, an animal lover based in Brooklyn, NYC. I'm passionate about providing excellent care for pets and equally enthusiastic about coding. I have worked as a zookeeper, in animal rescues, vet clinics and more. I was initially self taught in basic programming, then I completed a coding bootcamp at the Flatiron school and obtained an AWS certification.
          </Paragraph>
        </StyledIntroduction>
        <ImageWrapper>
          <Image src={CroppedBeau} alt="headshot of Beau" />
        </ImageWrapper>
        <StyledIntroduction>
          <SubHeading>🖥️ Software Development 🖥️</SubHeading>
          <Paragraph>
            Hello! 👋 I'm a self-taught developer who completed a bootcamp and holds an AWS certification. Proficient in JavaScript, React, Ruby on Rails, HTML, CSS, and more. Always open to new projects and continuously expanding my skills. Let's collaborate on something great!          </Paragraph>
        </StyledIntroduction>
        <ImageWrapper>
          <Image src={BeauAndRu} alt="Beau with a dog named Ru" />
          {/* <Image src={BeauReykaMangoRu} alt="Beau with a mango cocktail" /> */}
        </ImageWrapper>
        <StyledIntroduction>
          <SubHeading>🐈 Animal Care 🐕</SubHeading>
          <Paragraph>
            Delivering top-notch animal care services in Cobble Hill, Gowanus, Carroll Gardens, and surrounding areas for weekday walks. As an insured professional with a background as a zookeeper and experience from ASPCA and vet clinics, I offer pet sitting services across the city. Your furry pals are in caring and experienced hands, whether it's a walk or pet sitting!          </Paragraph>
        </StyledIntroduction>
        <ImageWrapper>
          <Image src={BeauReykaMangoRu} alt="Beau with a mango cocktail" />
        </ImageWrapper>
        <CloseButton onClick={closeModal}>Take Me Home 🏡</CloseButton>
      </ModalContent>
    </ModalWrapper>
  );
}

export default Modal1;
