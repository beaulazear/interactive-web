import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
// import WorkoutGif from "./images/WorkoutGif.gif";
// import PetSitGif3 from "./images/PetSitGif3.gif";

const WelcomeContainer = styled.div`
    background-color: #f9f9f9;
    padding: 40px;
    border-radius: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
`;

const SectionContainer = styled.div`
    background-color: #ffffff;
    border-radius: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin-top: 40px;
`;

const CardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`;

const ServiceCard = styled.div`
    width: 360px;
    background-color: #f0f0f0; /* Change to a slightly darker background color */
    padding: 30px;
    border-radius: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin-bottom: 30px;
    text-align: left;
`;


const CardTitle = styled.h3`
    font-size: 24px;
    text-align: center;
    color: #333333;
    margin-bottom: 20px;
`;

const CardDescription = styled.p`
    font-size: 18px;
    color: #666666;
    margin-bottom: 20px;
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
`;

const ActionButton = styled.a`
    display: inline-block;
    padding: 12px 24px;
    margin: 0 10px;
    margin-top: 15px;
    border-radius: 30px;
    background-color: #007bff;
    color: #ffffff;
    font-size: 16px;
    font-weight: bold;
    text-decoration: none;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: #0056b3;
    }
`;

const IntroContainer = styled.div`
    background-color: #f9f9f9;
    text-align: left;
    margin-top: 20px;
`;

const IntroContent = styled.p`
    font-size: 18px;
    color: #666666;
    line-height: 1.6;
`;


const Programming = ({ closeModal }) => {
    const topElement = useRef(null);

    function scrollToTop() {
        topElement?.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToTop()
    }, [])

    return (
        <div>
            <WelcomeContainer ref={topElement}>
                <h1>My Programming Portfolio</h1>
                <ActionButton onClick={closeModal}>Take Me Home 🏡</ActionButton>
                <IntroContainer>
                    <IntroContent>
                        I am proficient in JavaScript, React, HTML, CSS, Ruby on Rails, SQL, and more. I am self-taught to start, and then I got a certificate from a coding bootcamp from Flatiron School for software development. Additionally, I hold one AWS certification.
                    </IntroContent>
                </IntroContainer>
            </WelcomeContainer>
            <SectionContainer>
                <CardContainer>
                    <ServiceCard>
                        <CardTitle>Dog Walking Application</CardTitle>
                        <CardDescription>A full-stack application for managing and tracking dog walking services.</CardDescription>
                        <ButtonContainer>
                            <ActionButton target="_blank" href="https://youtu.be/vGsZPkvNa5Y">video</ActionButton>
                            <ActionButton target="_blank" href="https://dog-walking-app.onrender.com">deployed</ActionButton>
                            <ActionButton target="_blank" href="https://github.com/beaulazear/dog-walking-app.git">repo</ActionButton>
                        </ButtonContainer>
                    </ServiceCard>
                    <ServiceCard>
                        <CardTitle>Pokemon Guide</CardTitle>
                        <CardDescription>A single page application built using React that sorts and displays data from pokeapi.co.</CardDescription>
                        <ButtonContainer>
                            <ActionButton target="_blank" href="https://beaulazear.github.io/pokemon/">deployed</ActionButton>
                            <ActionButton target="_blank" href="https://github.com/beaulazear/pokemon">repo</ActionButton>
                        </ButtonContainer>
                    </ServiceCard>
                    <ServiceCard>
                        <CardTitle>www.beaulazear.com</CardTitle>
                        <CardDescription>A single page application made with React for marketing my business and providing information to new clients.</CardDescription>
                        <ButtonContainer>
                            <ActionButton target="_blank" href="https://beaulazear.com/">deployed</ActionButton>
                            <ActionButton target="_blank" href="https://github.com/beaulazear/beaus-website">repo</ActionButton>
                        </ButtonContainer>
                    </ServiceCard>
                    <ServiceCard>
                        <CardTitle>Aria Design Consultants</CardTitle>
                        <CardDescription>A single page application built for a client for marketing purposes using primarily React.</CardDescription>
                        <ButtonContainer>
                            <ActionButton target="_blank" href="https://beaulazear.github.io/michael-personal-site/">deployed</ActionButton>
                            <ActionButton target="_blank" href="https://github.com/beaulazear/michael-personal-site.git">repo</ActionButton>
                        </ButtonContainer>
                    </ServiceCard>
                    <ServiceCard>
                        <CardTitle>Personal Marketing Website</CardTitle>
                        <CardDescription>A single page application made with React for information/resume sharing & personal marketing.</CardDescription>
                        <ButtonContainer>
                            <ActionButton target="_blank" href="https://beaulazear.github.io/nadine/#/">deployed</ActionButton>
                            <ActionButton target="_blank" href="https://github.com/beaulazear/nadine">repo</ActionButton>
                        </ButtonContainer>
                    </ServiceCard>
                    <ServiceCard>
                        <CardTitle>Pet Sitting Application</CardTitle>
                        <CardDescription>A full stack application built with Ruby on Rails and React for managing pet sitting services.</CardDescription>
                        {/* <div>
                            <img src={PetSitGif3} alt="gif of this project" style={{ width: '100%', borderRadius: '10px', marginTop: '20px', marginBottom: '20px' }} />
                        </div> */}
                        <ButtonContainer>
                            <ActionButton target="_blank" href="https://github.com/beaulazear/pet-sitting-app.git">repo</ActionButton>
                            <ActionButton target="_blank" href="https://www.youtube.com/watch?v=n1pzEzciu1E&feature=youtu.be">video</ActionButton>
                        </ButtonContainer>
                    </ServiceCard>
                    <ServiceCard>
                        <CardTitle>Exercise/Workout Log</CardTitle>
                        <CardDescription>A single page application made with Ruby, React, Active Record, and Sinatra for tracking workout data.</CardDescription>
                        {/* <div>
                            <img src={WorkoutGif} alt="gif of this project" style={{ width: '100%', borderRadius: '10px', marginTop: '20px', marginBottom: '20px' }} />
                        </div> */}
                        <ButtonContainer>
                            <ActionButton target="_blank" href="https://github.com/beaulazear/react-sinatra-project">frontRepo</ActionButton>
                            <ActionButton target="_blank" href="https://github.com/beaulazear/phase-3-sinatra-react-project">backRepo</ActionButton>
                        </ButtonContainer>
                    </ServiceCard>
                </CardContainer>
            </SectionContainer>
        </div>
    );
};

export default Programming;
