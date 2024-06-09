import React from 'react';
import ResumePDF from "./images/ResumePDF.pdf";
import styled from 'styled-components';

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  overflow-y: auto; /* Allow vertical scrolling */
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  max-width: 90%;
  max-height: 90%;
  overflow-y: auto; /* Allow vertical scrolling */
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

  &:hover {
    background-color: #0056b3;
  }

  @media (max-width: 768px) {
    padding: 8px 16px;
    font-size: 0.9em;
  }
`;

const welcomeMessageStyles = {
    fontFamily: 'Helvetica, sans-serif',
    textAlign: 'left',
};

const sectionTitleStyles = {
    fontSize: '24px',
    marginTop: '20px',
    marginBottom: '10px',
    color: '#333',
};

const jobTitleStyles = {
    fontSize: '18px',
    marginTop: '10px',
    marginBottom: '5px',
    color: '#444',
};

const jobDescriptionStyles = {
    fontSize: '16px',
    lineHeight: '1.6',
    color: '#666',
};

const CombinedModal = ({ closeModal }) => {
    return (
        <ModalContainer>
            <ModalContent style={welcomeMessageStyles}>
                <h2 style={{ fontSize: '30px', marginBottom: '20px', color: '#333' }}>Resume</h2>
                <CloseButton onClick={closeModal}>Take Me Home</CloseButton>
                <br />
                <a target="blank" href={ResumePDF}><button className="button2">PDF Version</button></a>
                <br /><br />
                <h3 style={jobTitleStyles}>Beau Lazear<br />
                    beaulazear@gmail.com<br />
                    Instagram - <a href="https://www.instagram.com/beau.lazear/?hl=en" target="_blank">beau.lazear</a><br />
                    Based in Brooklyn, NY
                </h3>
                <br />
                <h1 style={sectionTitleStyles}>Animal Care Experience</h1>
                <h2 style={jobTitleStyles}>Freelance Animal Care, self-employed (2019-Present)</h2>
                <p style={jobDescriptionStyles}>
                    - Built and maintained an informational website for incoming clients<br />
                    - Built a network of animal care clients and subcontracted additional staff<br />
                    - Continually expanded client base via personal networking, customer referral, and social media marketing<br />
                    - Maintained & fulfilled a schedule for services to be provided<br />
                    - Provided updates and invoiced clients following service completion<br />
                    - General bookkeeping, accounting.. etc.<br />
                </p>
                <h2 style={jobTitleStyles}>Veterinary Assistant, ASPCA-ARC (Apr.2019-Nov.2019)</h2>
                <p style={jobDescriptionStyles}>
                    - Daily husbandry, medical attention, enrichment, and cleaning/maintenance for all dogs & cats located
                    in my section<br />
                    - Properly filled out medical paperwork to keep the veterinary team on the same page<br />
                    - Assisted veterinarians during medical procedures, and completed more basic medical procedures myself<br />
                    - Employed during a period of high employee turnover, took initiative & quickly became a lead vet assistant<br />
                    - Worked with the communications team for events based on donor outreach<br />
                    - Handled dog alongside CEO for a communications event on Good Morning America,{' '}
                    <a href="https://twitter.com/gma/status/1186651005129150464?s=27&t=ghSiPaRjXnr4PxD451NsoA" target="_blank">
                        click here for video
                    </a>
                    <br />
                </p>
                <h2 style={jobTitleStyles}>Zookeeping, Wildlife Conservation Society - Prospect Park Zoo (Sept.2017-Feb.2019)</h2>
                <p style={jobDescriptionStyles}>
                    - Completed one full-time internship, one part-time internship, and one enrichment-based "final project"<br />
                    - Obtained part-time position as barn associate and worked alongside zookeepers<br />
                    - Promoted to full-time zookeeper after years of proven competence<br />
                    - Completed required animal husbandry, daily enrichment, cleaning/maintenance procedures, & nutrition
                    preparation<br />
                    - Created new systems and communicated with other zookeepers to complete jobs as efficiently as possible<br />
                    - Recorded daily data for proper communication<br />
                </p>
                <br />
                <h1 style={sectionTitleStyles}>Additional Experience, 2014-2022</h1>
                <h2 style={jobTitleStyles}>Hospitality</h2>
                <p style={jobDescriptionStyles}>
                    - Worked in a variety of plant-based restaurants, ranging from local cafes to more upscale dining<br />
                    - Held positions including shift supervisor, lead server, and bartender<br />
                </p>
                <h2 style={jobTitleStyles}>Administrative</h2>
                <p style={jobDescriptionStyles}>
                    - Worked as an office administrator for a local Brooklyn dog day care/dog walking company called{' '}
                    <em>The Peaceful Pack</em>
                    <br />
                    - Worked as the event coordinator at <em>Chocolate Works</em> in Brooklyn NY<br />
                </p>
                <br />
                <h2 style={jobTitleStyles}>Skills</h2>
                <p style={jobDescriptionStyles}>
                    - Empathic: both with humans and animals<br />
                    - Quick learner: I easily adapt to new systems/procedures<br />
                    - Self-starter: I take initiative with enthusiasm<br />
                    - Environmentally & socially conscious: Always striving to do my part to make the world a better place<br />
                    - Foundational computer programming: HTML, CSS, JavaScript, React, & Ruby on Rails - currently taking courses to
                    expand this knowledge
                </p>
                <br />
                <h2 style={jobTitleStyles}>Education</h2>
                <p style={jobDescriptionStyles}>
                    - High school diploma from East Knox High School<br />
                    - Flatiron School Software Development Program 2023 Graduate<br />
                    - Real estate license from the New York Real Estate Institute<br />
                    - Continuing education credits from Prospect Park Zoo (Wildlife Conservation Society)<br />
                </p>
            </ModalContent>
        </ModalContainer>
    )
}
export default CombinedModal;