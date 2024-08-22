import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import Ruth from "./images/Ruth.jpeg"
import BeauAndRalph from "./images/BeauAndRalph.JPG"
import JavaLookinCute from "./images/JavaLookinCute.jpeg"
import RiverWithBrick from "./images/RiverWithBrick.jpeg"
import MooseOnVerandah from "./images/MooseOnVerandah.jpeg"

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  padding-bottom: 25px;
  margin: auto;

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  @media (min-width: 801px) {
    flex-wrap: wrap;
    justify-content: center;
    max-width: 1300px;
    gap: 20px; /* Added gap for better spacing */
  }
`;

const StyledServiceCard = styled.div`
  background-color: #fffbf3;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin: 10px;
  width: calc(50% - 40px);
  height: 560px; /* Set a fixed height for all cards */
  display: flex; /* Ensure contents are aligned vertically */
  flex-direction: column; /* Align contents vertically */
  justify-content: space-between; /* Align contents vertically */
  overflow: hidden; /* Hide any overflowing content */

  @media (max-width: 800px) {
    width: calc(100% - 40px);
  }

  h2 {
    font-size: 1.5em;
    color: #333;
    margin-bottom: 10px;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  h3 {
    font-size: 1.2em;
    color: #555;
    margin-bottom: 10px;
  }

  p {
    font-size: 1em;
    color: #777;
    line-height: 1.6;
  }

  &:hover {
    transform: scale(1.05);
  }
`;

const StyledServiceCardTesti = styled.div`
  background-color: #fffbf3;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin: 10px;
  width: calc(50% - 40px);
  height: auto; /* Change fixed height to auto */
  display: flex; /* Ensure contents are aligned vertically */
  flex-direction: column; /* Align contents vertically */
  overflow: hidden; /* Hide any overflowing content */

  @media (max-width: 800px) {
    width: calc(100% - 40px);
  }

  h2 {
    font-size: 1.5em;
    color: #333;
    margin-bottom: 10px;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  h3 {
    font-size: 1.2em;
    color: #555;
    margin-bottom: 10px;
  }

  p {
    font-size: 1em;
    color: #777;
    line-height: 1.6;
  }

  &:hover {
    transform: scale(1.05);
  }
`;

const CloseButton = styled.button`
  background-color: #ff5722; /* Changed to a more vibrant color */
  color: white;
  padding: 12px 24px; /* Increased padding for better feel */
  border: none;
  border-radius: 25px; /* More rounded corners */
  cursor: pointer;
  font-size: 1em;
  align-self: center;
  margin-bottom: 15px;
  margin-top: 5px;
  transition: background-color 0.3s ease; /* Added transition for hover effect */

  &:hover {
    background-color: #e64a19; /* Adjusted hover color to match new base color */
  }

  @media (max-width: 768px) {
    padding: 10px 20px; /* Adjusted padding for smaller screens */
    font-size: 0.9em;
  }
`;

const welcomeMessageStyles = {
    backgroundColor: '#fff2eb',
    fontFamily: 'Helvetica, sans-serif',
    margin: '0 auto',
    paddingBottom: '25px', /* Increased padding for more space */
    paddingRight: '25px',
    paddingLeft: '25px',
    borderRadius: '15px', /* Increased border radius */
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', /* Slightly increased shadow */
    textAlign: 'center',
};

const headingStyles = {
    fontSize: '32px', /* Slightly increased font size */
    marginBottom: '20px',
    color: '#333',
    letterSpacing: '1px', /* Added letter spacing */
};

const image = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '15px' /* Changed to match wrapper */
};

const h2Styles = {
    color: '#333',
    fontSize: '24px',
    marginBottom: '10px',
    marginTop: '0px',
    textTransform: 'uppercase', /* Added uppercase transformation */
    letterSpacing: '1px', /* Added letter spacing */
};

const h3Styles = {
    color: '#555',
    fontSize: '18px',
    textAlign: 'left',
    marginBottom: '10px', /* Added bottom margin for spacing */
};

const pStyles = {
    color: '#777',
    fontSize: '18px',
    textAlign: 'left',
    padding: '10px',
    lineHeight: '1.6', /* Ensured consistent line height */
};

const StyledIntroduction = styled.div`
  max-width: 750px;
  margin: 0 auto;
  padding: 6px;

  @media (max-width: 800px) {
    max-width: 600px;
  }
`;

const Heading = styled.h2`
  font-size: 2em;
  margin-bottom: 10px;
  margin-top: 15px;
  color: #333;

  @media (max-width: 800px) {
    font-size: 2em;
    margin-bottom: 10px;
    color: #333;
  }
`;

const Paragraph = styled.p`
  font-size: 1.2em;
  color: #777;
  line-height: 1.6;
  text-align: left;

  @media (max-width: 800px) {
    font-size: 1em;
    color: #777;
    line-height: 1.6;
  }
`;

const ImageContainer = styled.div`
    width: 240px;
    height: 240px; /* Set the height to match the width */
    margin: 0 auto; /* Center the container horizontally */
    margin-bottom: 18px;
    overflow: hidden; /* Hide any overflow */
    border-radius: 15px; /* Add border radius for rounded corners */
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2); /* Add shadow for depth */
`;

const Image = styled.img`
    width: 100%; /* Ensure the image fills the container */
    height: 100%; /* Ensure the image fills the container */
    object-fit: cover; /* Maintain aspect ratio and cover the container */
    border-radius: 15px; /* Match the container's border radius */
`;



const AnimalCareInfo = ({ closeModal }) => {

    const topElement = useRef(null);

    function scrollToTop() {
        topElement?.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToTop()
    }, [])

    return (
        <div style={welcomeMessageStyles} ref={topElement}>
            <StyledIntroduction>
                <Heading>Animal Care</Heading>
                <CloseButton onClick={closeModal}>Take Me Home 🏡</CloseButton>
                <Paragraph>
                    Hello! I am an animal caretaker with over eight years of professional caretaking experience. Experience includes zookeeping (Prospect Park Zoo, Wildlife Conservation Society), veterinary assisting, rescue rehabilitation (ASPCA), general pet care & enrichment. You can find my offered services, pricing, & client testimonials below.
                </Paragraph>
            </StyledIntroduction>
            <h2 style={headingStyles}>Services and Pricing</h2>
            <StyledContainer>
                <StyledServiceCardTesti>
                    <h2 style={h2Styles}>Dog walks</h2>
                    <h3 style={h3Styles}>
                        $22 - 30 minute walk<br />
                        $27 - 45 minute walk<br />
                        $33 - 60 minute walk<br />
                        $42 - 90 minute walk<br />
                        $50 - 120 minute walk<br />
                    </h3>
                    <p style={pStyles}>
                        - Add $10 if additional Dog (same household)<br />
                        - Add $5 for solo walk (behavioral, senior citizen)<br />
                        - Add $5 if earlier than 10am / later than 5pm<br />
                        <br />
                        * Walk may be shortened if weather is hazardous<br />
                        <br />
                        Photo updates and description of service provided sent via text or email.
                    </p>
                </StyledServiceCardTesti>
                <StyledServiceCardTesti>
                    <h2 style={h2Styles}>Pet sitting</h2>
                    <h3 style={h3Styles}>$95 - Overnight pet sitting, includes:</h3>
                    <p style={pStyles}>
                        - Morning walk + breakfast (7-10am)<br />
                        - Evening walk + dinner (4-6pm)<br />
                        - Bedtime walk (8-11pm)<br />
                        <br />
                        - Extra $15 if 4th mid day walk is required<br />
                        - Add $25 if additional dog in household<br />
                        - Add $15 if cat care is required (litter, feeding, water, etc)<br />
                        <br />
                        <br />
                        Photo updates and description of service provided sent via text or email.
                    </p>
                </StyledServiceCardTesti>
                <StyledServiceCardTesti>
                    <h2 style={h2Styles}>Cat visits</h2>
                    <h3 style={h3Styles}>
                        $25 - one visit (approximately 30 minutes)<br />
                        $40 - two visits in one day (AM + PM)
                    </h3>
                    <p style={pStyles}>
                        I will clean the litterboxes, sweep the surrounding area, feed and refill water bowls, clean old food
                        dishes, and bring in any mail. (Special requests can be made, ex. water the plants...)<br />
                        <br />
                        I will play with your cat for the rest of the visit, if they want that is!
                        <br />
                        <br />
                        Photo updates and description of service provided sent via text or email.
                    </p>
                </StyledServiceCardTesti>
                <StyledServiceCardTesti>
                    <h2 style={h2Styles}>Exotic animal care</h2>
                    <h3 style={h3Styles}>$30 - one visit (approximately 30 minutes)</h3>
                    <p style={pStyles}>
                        I can feed your snake, parrot, iguana... pretty much anything! I used to work as a zookeeper, so I have
                        plenty of experience. I will clean enclosures, change water dishes, make sure heat lamps are running, and
                        complete any other special requests. I'm aware of how delicate some of these creatures are, and will ensure
                        the safety of your animal during your whole vacation!
                        <br />
                        <br />
                        Photo updates and description of service provided sent via text or email.
                    </p>
                </StyledServiceCardTesti>
                <StyledServiceCardTesti>
                    <h2 style={h2Styles}>Euthanasia support</h2>
                    <h3 style={h3Styles}>Free of charge :)</h3>
                    <p style={pStyles}>
                        With my animal rescue / veterinary experience, I have been there for a lot of euthanasia. I know this can be
                        a very tough moment for an animal lover! I would like to offer my company free of charge... To be with you
                        during the euthanasia visit, so you do not have to go through it alone. I am also more than happy to spend
                        some time with you afterwards. It is always helpful to have someone to talk to.
                        <br />
                        <br />
                        "To live in hearts we leave behind is not to die" -Thomas Campbell
                    </p>
                </StyledServiceCardTesti>
            </StyledContainer>
            <h2 style={headingStyles}>Client Testimonials</h2>
            <StyledContainer>
                <StyledServiceCardTesti>
                    <ImageContainer>
                        <Image style={image} src={BeauAndRalph} alt="a dog named Ralph with Beau" />
                    </ImageContainer>
                    <h2 style={h2Styles}>Julie and Ralph</h2>
                    <p style={pStyles}>Beau is the absolute best! Like many pet owners, my pup, Ralph, means the
                        world to me
                        and it takes a lot for me
                        to trust someone. Beau always keeps me updated on the walks and any new friends that Ralph makes. His
                        daily
                        recap texts include pictures which I joke is like I hired a professional photographer as an added bonus.
                        I think
                        the favorite part of Ralph's day is when Beau arrives, he knows he'll get fresh air, lots of love and a
                        few
                        treats.
                    </p>
                </StyledServiceCardTesti>
                <StyledServiceCardTesti>
                    <ImageContainer>
                        <Image style={image} src={Ruth} alt="a dog named Ruth" />
                    </ImageContainer>
                    <h2 style={h2Styles}>Anna + Anna and Ruthie</h2>
                    <p style={pStyles}>From the moment our Ruthie met Beau, she was in love. We say his name and her
                        tail
                        wags
                        with delight. And if we
                        had tails, we would wag them too! Beau is communicative and professional, clear and detailed with his
                        walking
                        reports and pet sits. We trust him profoundly with our excitable and sometimes too stubborn mini
                        goldendoodle.
                        He loves her as if she was his own, with great care and compassion. When he walks her, our busy lives
                        are made
                        easier. We come home to a happily walked and calm dog after each and every visit. We couldn’t recommend
                        Beau
                        with higher praise and feel lucky that Ruthie gets to spend time with him.
                    </p>
                </StyledServiceCardTesti>
                <StyledServiceCardTesti>
                    <ImageContainer>
                        <Image src={RiverWithBrick} alt="A dog named river" style={image} />
                    </ImageContainer>
                    <h2 style={h2Styles}>Vanessa and River</h2>
                    <p style={pStyles}>Admittedly, it's not easy for me to leave my pup, River, with anyone… except for
                        Beau. I
                        met Beau at a nearby dog park and knew instantly that he was a genuine and compassionate animal lover.
                        He proves
                        that time and time again, going above and beyond to keep River happy and safe. Beau is thoughtful,
                        dependable,
                        responsible, and incredibly kind. He communicates thoroughly and sends detailed summaries (with adorable
                        photographs!) after every walk. We are incredibly grateful that we found Beau and could not possibly
                        recommend
                        him more!</p>
                </StyledServiceCardTesti>
                <StyledServiceCardTesti>
                    <ImageContainer>
                        <Image src={JavaLookinCute} alt="a dog named Java" style={image} />
                    </ImageContainer>
                    <h2 style={h2Styles}>Jaimee and Java</h2>
                    <p style={pStyles}>I can't recommend Beau enough. Above all, he values each pet's safety and
                        comfort.
                        He is
                        passionate about connecting with and understanding the needs of animals, which I have seen in his
                        connection
                        with Java, our 15 year old goldendoodle. Beau is reliable, communicative, and extremely thoughtful, and
                        Java is
                        consistently excited to see him. Beau took time to get to know Java and we are so grateful to put her in
                        his
                        care.</p>
                </StyledServiceCardTesti>
                <StyledServiceCardTesti>
                    <ImageContainer>
                        <Image src={MooseOnVerandah} alt="a dog named moose" style={image} />
                    </ImageContainer>
                    <h2 style={h2Styles}>Carolyn + Patrick and Moose</h2>
                    <p style={pStyles}>I highly recommend Beau as a dog walker and dog sitter. Beau has been regularly
                        walking
                        our dog Moose and has consistently provided excellent care, and our dog absolutely loves him! Beau is
                        extremely
                        reliable, and always goes above and beyond to make sure Moose is happy and has a good walk. Beau’s
                        extremely
                        accommodating of our schedules, and has saved us on multiple occasions when we last minute needed dog
                        care. I’m
                        really thankful for his flexibility and kindness. Beau has dog sat for Moose on several occasions and
                        has always provided exceptional care during his stays. He
                        sends regular updates about walks / dog sits and provides awesome pictures with each update. I trust
                        Beau completely and am so grateful to have him as Moose's dog walker and dog sitter.</p>
                </StyledServiceCardTesti>
            </StyledContainer>
        </div>
    );
};

export default AnimalCareInfo;

