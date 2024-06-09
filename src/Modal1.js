import React from 'react';
import styled from 'styled-components';
import CroppedBeau from './images/CroppedBeau.jpeg';

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  max-width: 90%;
  max-height: 90%;
  overflow-y: auto;
`;

const ImageWrapper = styled.div`
  text-align: center;
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
`;

const StyledIntroduction = styled.div`
  margin-top: 20px;
`;

const SubHeading = styled.h3`
  margin-bottom: 10px;
`;

const Paragraph = styled.p`
  margin-bottom: 20px;
`;

const StyledLink = styled.a`
  color: blue;
  text-decoration: underline;
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
                        I am available Monday-Friday, between 10 am and 5 pm, for animal care appointments. My service area is Carroll Gardens, Cobble Hill, Gowanus, and Brooklyn Heights. Weekend dog walks, evening/early morning walks, overnight pet sitting, and more available upon special request! I help connect clients with other independent contractors for services I cannot complete (due to location, schedule, pet's needs, etc...). Visit the <StyledLink href="/animal_care">Animal Care</StyledLink> page for more information.
                        <br /><br />
                        I am available for freelance computer programming work. I can help with your personal websites, application ideas, etc... Competent with Javascript, React, HTML, CSS, Ruby, and more. Visit the <StyledLink href="/programming">Programming</StyledLink> page to see previous projects.
                    </Paragraph>
                </StyledIntroduction>
                <button onClick={closeModal(1)}>Go Back</button>
            </ModalContent>
        </ModalWrapper>
    );
}

export default Modal1;
