import React from 'react';
import styled from 'styled-components';
import CroppedBeau from './images/CroppedBeau.jpeg';
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
  background-color: #fff;
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
  max-width: 80%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Add shadow effect */

  @media (max-width: 768px) {
    max-width: 100%;
  }
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
          <Image src={BeauAndRu} alt="Beau with a dog named Ru" />
        </ImageWrapper>
        <StyledIntroduction>
          <SubHeading>Meet Beau</SubHeading>
          <Paragraph>
            Hey there! I'm Beau, your friendly neighborhood animal enthusiast based in Brooklyn, NYC. I've got a knack for taking care of our furry friends and a passion for coding!
          </Paragraph>
        </StyledIntroduction>
        <StyledIntroduction>
          <SubHeading>What I Do</SubHeading>
          <Paragraph>
            I offer top-notch animal care services throughout Brooklyn, Monday to Friday, 10 am to 5 pm. From dog walking to pet sitting, I've got your furry pals covered. Need help with web development? I've got coding skills too!
          </Paragraph>
        </StyledIntroduction>
        <CloseButton onClick={closeModal}>Take Me Home</CloseButton>
      </ModalContent>
    </ModalWrapper>
  );
}

export default Modal1;
