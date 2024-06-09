import React from 'react';
import styled from 'styled-components';
import CroppedBeau from './images/CroppedBeau.jpeg';

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
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  max-width: 600px;
  width: 90%;
  max-height: 90%;
  overflow-y: auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    padding: 15px;
    max-width: 95%;
  }
`;

const ImageWrapper = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 10px;
`;

const StyledIntroduction = styled.div`
  margin-top: 20px;

  &:first-child {
    margin-top: 0;
  }
`;

const SubHeading = styled.h3`
  margin-bottom: 10px;
  color: #333;
  font-size: 1.5em;

  @media (max-width: 768px) {
    font-size: 1.2em;
  }
`;

const Paragraph = styled.p`
  margin-bottom: 20px;
  line-height: 1.6;
  color: #555;
`;

const CloseButton = styled.button`
  background-color: #007BFF;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1em;
  margin-top: 20px;
  align-self: center;

  &:hover {
    background-color: #0056b3;
  }

  @media (max-width: 768px) {
    padding: 8px 16px;
    font-size: 0.9em;
  }
`;

function Modal1({ closeModal }) {
  return (
    <ModalWrapper>
      <ModalContent>
        <ImageWrapper>
          <Image src={CroppedBeau} alt="Beau with a dog named Ru" />
        </ImageWrapper>
        <StyledIntroduction>
          <SubHeading>About Me</SubHeading>
          <Paragraph>
            Hi, I'm Beau! I am based in Brooklyn NYC. I've had an eventful professional life involving multiple direct animal care positions, administrative & hospitality roles (within plant-based / cruelty-free establishments), and more. I've grown within these roles, and completed several educational programs / projects throughout my experience. I am currently maintaining my own business - providing exceptional animal care to clients across Brooklyn NYC. I am self-taught in basic computer programming, and I am a graduate from the Flatiron School's software development program. I also have my AWS Cloud Practitioner certification. I am proficient in HTML, Javascript, React, CSS, Ruby & Rails, and more as I continue to learn.
          </Paragraph>
        </StyledIntroduction>
        <StyledIntroduction>
          <SubHeading>What can I do for you?</SubHeading>
          <Paragraph>
            I am available Monday-Friday, between 10 am and 5 pm, for animal care appointments. My service area is Carroll Gardens, Cobble Hill, Gowanus, and Brooklyn Heights. Weekend dog walks, evening/early morning walks, overnight pet sitting, and more available upon special request! I help connect clients with other independent contractors for services I cannot complete (due to location, schedule, pet's needs, etc...). I am available for freelance computer programming work. I can help with your personal websites, application ideas, etc... Competent with Javascript, React, HTML, CSS, Ruby, and more.
          </Paragraph>
        </StyledIntroduction>
        <CloseButton onClick={closeModal}>Go Back</CloseButton>
      </ModalContent>
    </ModalWrapper>
  );
}

export default Modal1;
