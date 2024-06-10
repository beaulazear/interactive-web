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
  background-color: #f5f5f5; /* Light gray for a professional touch */
  padding: 30px;
  border-radius: 20px; /* Soft edges for elegance */
  max-width: 90%;
  max-height: 90%;
  overflow-y: auto; /* Allow vertical scrolling */
`;

const CloseButton = styled.button`
  background-color: #007BFF;
  color: white;
  padding: 15px 30px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 1.2em;
  align-self: center;
  margin-bottom: 20px;
  width: 100%;

  &:hover {
    background-color: #0056b3;
  }

  @media (max-width: 768px) {
    padding: 12px 24px;
    font-size: 1em;
  }
`;

const SectionTitle = styled.h1`
  font-size: 24px;
  margin-top: 20px;
  margin-bottom: 15px;
  color: #333;
`;

const JobTitle = styled.h2`
  font-size: 20px;
  margin-top: 15px;
  margin-bottom: 10px;
  color: #444;
`;

const JobDescription = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: #666;
`;

const StyledLink = styled.a`
  color: #007BFF;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const CombinedModal = ({ closeModal }) => {
  return (
    <ModalContainer>
      <ModalContent>
        <h1 style={{ fontSize: '25px', marginBottom: '20px', color: '#333' }}>Christian "Beau" Lazear</h1>
        <CloseButton onClick={closeModal}>Take Me Home</CloseButton>
        <br />
        <StyledLink target="_blank" href={ResumePDF}>Download PDF Version</StyledLink>
        <br /><br />
        <h2 style={{ fontSize: '24px', color: '#333' }}>Animal Care & Software Development Professional</h2>
        <SectionTitle>Experience</SectionTitle>
        <JobTitle>Freelance Animal Care, Self-Employed (2019-Present)</JobTitle>
        <JobDescription>
          - Developed and maintained an informational website using HTML, CSS, and JavaScript<br />
          - Developed and maintained custom application for freelance animal care, including scheduling, invoicing, pet data management, and finance tracking.<br />
          - Expanded client base through effective networking and social media marketing<br />
          - Managed scheduling, invoicing, and client communications<br />
        </JobDescription>
        <JobTitle>Veterinary Assistant, ASPCA-ARC (Apr. 2019-Nov. 2019)</JobTitle>
        <JobDescription>
          - Provided daily animal husbandry and medical support<br />
          - Assisted veterinarians during procedures and managed medical paperwork<br />
          - Promoted to lead vet assistant for proactive leadership during high employee turnover<br />
        </JobDescription>
        <JobTitle>Zookeeper, Wildlife Conservation Society - Prospect Park Zoo (Sept. 2017-Feb. 2019)</JobTitle>
        <JobDescription>
          - Completed internships and advanced to full-time zookeeper role<br />
          - Executed animal husbandry, enrichment activities, and data recording<br />
          - Collaborated with team members to optimize workflow and efficiency<br />
        </JobDescription>
        <br />
        <SectionTitle>Skills</SectionTitle>
        <JobDescription>
          - Proficient in HTML, CSS, JavaScript, React, and Ruby on Rails<br />
          - Strong communication and interpersonal skills<br />
          - Detail-oriented with excellent organizational abilities<br />
          - Adaptable and quick learner<br />
          - Passionate about environmental and social causes<br />
        </JobDescription>
        <br />
        <SectionTitle>Education</SectionTitle>
        <JobDescription>
          - Flatiron School Software Development Program, 2023 Graduate<br />
          - Real Estate License, New York Real Estate Institute<br />
          - Continuing Education Credits, Prospect Park Zoo (Wildlife Conservation Society)<br />
        </JobDescription>
      </ModalContent>
    </ModalContainer>
  )
}

export default CombinedModal;
