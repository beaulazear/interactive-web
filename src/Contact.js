import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import emailjs from 'emailjs-com';
import CLOUDS from 'vanta/dist/vanta.clouds.min';

const StyledContactContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #007bff;
`;

const StyledFormContainer = styled.form`
  width: 90%;
  max-width: 500px;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
`;

const StyledLabel = styled.label`
  font-size: 20px;
  margin-bottom: 10px;
  color: #333;
`;

const StyledInput = styled.input`
  width: calc(100% - 20px);
  padding: 15px;
  margin-bottom: 20px;
  border: none;
  border-radius: 5px;
  background-color: #f9f9f9;
  color: #333;
  font-size: 16px;
`;

const StyledTextarea = styled.textarea`
  width: calc(100% - 20px);
  height: 120px;
  padding: 15px;
  margin-bottom: 20px;
  border: none;
  border-radius: 5px;
  background-color: #f9f9f9;
  color: #333;
  font-size: 16px;
`;

const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledButton = styled.button`
  flex: 1;
  margin: 0 10px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 18px;
  transition: background-color 0.3s ease;

  &:first-child {
    background-color: #f50057;
    color: #fff;
  }

  &:last-child {
    background-color: #3f51b5;
    color: #fff;
  }

  &:hover {
    background-color: #303f9f;
  }
`;

const SubHeading = styled.h2`
  font-size: 40px;
  margin-bottom: 20px;
  color: #f50057;
`;

const Paragraph = styled.p`
  font-size: 1.2em;
  color: #777;
  line-height: 1.6;
  margin-bottom: 20px;
`;

export default function Contact({ closeModal }) {
    const form = useRef();
    const [error, setError] = useState('');
    const [vantaEffect, setVantaEffect] = useState(null);

    // Initialize the Vanta.js background effect
    React.useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(CLOUDS({
                el: '#clouds-background',
                color: '#ffffff',
                backgroundColor: '#007bff',
                skyColor: '#007bff',
                cloudColor: '#fff',
                speed: 1.5,
                scale: 1.5,
            }));
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy();
        };
    }, [vantaEffect]);

    const sendEmail = (e) => {
        e.preventDefault();

        const { from_name, from_email, message } = form.current;

        if (!from_name.value || !from_email.value || !message.value) {
            setError('Please fill out all fields.');
            return;
        }

        emailjs
            .sendForm('service_kqz5x4o', 'template_3ba6d27', form.current, '11CxjbisIoTlyftVb')
            .then(
                (result) => {
                    console.log(result.text);
                    alert('Form submitted successfully!');
                    form.current.reset(); // Reset the form
                    setError('');
                    closeModal();
                },
                (error) => {
                    console.log(error.text);
                    alert('Failed to submit the form. Please try again.');
                }
            );
    };

    return (
        <StyledContactContainer id="clouds-background">
            <StyledFormContainer ref={form} onSubmit={sendEmail}>
                <SubHeading>Contact Me 💞</SubHeading>
                <Paragraph>Send an email describing your inquiry and I will be in touch shortly.</Paragraph>
                <StyledLabel>Name</StyledLabel>
                <StyledInput placeholder="Your preferred name" type="text" name="from_name" />
                <StyledLabel>Email</StyledLabel>
                <StyledInput placeholder="Your email address" type="email" name="from_email" />
                <StyledLabel>Message</StyledLabel>
                <StyledTextarea placeholder="Tell me about yourself / desired services!" name="message" />
                <StyledButtonContainer>
                    <StyledButton onClick={closeModal}>Return Home</StyledButton>
                    <StyledButton type="submit">Send</StyledButton>
                </StyledButtonContainer>
                {error && <Paragraph style={{ color: 'red' }}>{error}</Paragraph>}
            </StyledFormContainer>
        </StyledContactContainer>
    );
}
