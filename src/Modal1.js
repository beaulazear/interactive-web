import React from 'react';
import styled from 'styled-components';
import BeauAndRu from './images/BeauAndRu.JPG';

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

  &:first-child {
    margin-top: 0;
  }
`;

const SubHeading = styled.h3`
  margin-bottom: 20px; /* Extra space for a grand entrance */
  color: #333;
  font-size: 1.8em; /* Bigger font for more impact */

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
  margin-top: 30px;
  align-self: center;

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
          <Image src={BeauAndRu} alt="Beau with a dog named Ru" />
        </ImageWrapper>
        <StyledIntroduction>
          <SubHeading>🐾 Meet Beau 🐾</SubHeading>
          <Paragraph>
            Hi, I'm Beau, an animal lover based in Brooklyn, NYC. I'm passionate about providing excellent care for pets and equally enthusiastic about coding.          </Paragraph>
        </StyledIntroduction>
        <StyledIntroduction>
          <SubHeading>🌟 What I Do 🌟</SubHeading>
          <Paragraph>
            I offer top-notch animal care services throughout Brooklyn, Monday to Friday, 10 am to 5 pm. From dog walking to pet sitting, I've got your furry pals covered. Need help with web development? I've got coding skills too!
          </Paragraph>
        </StyledIntroduction>
        <CloseButton onClick={closeModal}>Take Me Home 🏡</CloseButton>
      </ModalContent>
    </ModalWrapper>
  );
}

export default Modal1;
