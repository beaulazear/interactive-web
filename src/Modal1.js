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
  background-color: rgba(0, 0, 0, 0.7); 
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: #fff;
  padding: 40px;
  border-radius: 15px;
  max-width: 800px;
  width: 90%;
  max-height: 90%;
  overflow-y: auto;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.5);
  animation: fadeIn 0.3s ease-in-out;

  @media (max-width: 768px) {
    padding: 20px;
    max-width: 95%;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: scale(0.9);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

const ImageWrapper = styled.div`
  text-align: center;
  margin-bottom: 40px;
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    max-width: 90%;
  }
`;

const StyledIntroduction = styled.div`
  margin-top: 40px;
  text-align: center;
`;

const SubHeading = styled.h3`
  margin-bottom: 20px;
  color: #222;
  font-size: 2.5em;
  text-align: center;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 2em;
  }
`;

const Paragraph = styled.p`
  margin-bottom: 30px;
  line-height: 1.8;
  color: #555;
  font-size: 1.1em;
`;

const CloseButton = styled.button`
  background-color: #007BFF;
  color: white;
  padding: 15px 30px;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  font-size: 1.2em;
  align-self: center;
  width: 100%;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }

  @media (max-width: 768px) {
    padding: 12px 24px;
    font-size: 1em;
  }
`;

function Modal1({ closeModal }) {
  return (
    <ModalWrapper>
      <ModalContent>
        <ImageWrapper>
          <SubHeading>Beau Lazear</SubHeading>
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
            Hello! 👋 I'm a self-taught developer who completed a bootcamp and holds an AWS certification. Proficient in JavaScript, React, Ruby on Rails, HTML, CSS, and more. Always open to new projects and continuously expanding my skills. Let's collaborate on something great!
          </Paragraph>
        </StyledIntroduction>
        <ImageWrapper>
          <Image src={BeauAndRu} alt="Beau with a dog named Ru" />
        </ImageWrapper>
        <StyledIntroduction>
          <SubHeading>🐈 Animal Care 🐕</SubHeading>
          <Paragraph>
            Delivering top-notch animal care services in Cobble Hill, Gowanus, Carroll Gardens, and surrounding areas for weekday walks. As an insured professional with a background as a zookeeper and experience from ASPCA and vet clinics, I offer pet sitting services across the city. Your furry pals are in caring and experienced hands, whether it's a walk or pet sitting!
          </Paragraph>
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
