import React from "react";
import { FaYoutube, FaTwitter, FaEnvelope, FaWhatsapp, FaPhone } 
from "react-icons/fa";
import { ContactContainer, Logo,Title, InfoWrapper,InfoItem, SocialLinks, IconLink, SupportCard
  } from './ContactElements';


const ContactSection = () => {
  const handleLogoClick = () => {
    window.location.href = "/";
  };

  return (
    <ContactContainer id="contact">
     <Logo
  src={process.env.PUBLIC_URL + "/more2.png"}
  alt="School Logo"
  onClick={handleLogoClick}
/>
      <Title>Contact Us</Title>
      <InfoWrapper>
        <InfoItem><strong>School:</strong> More than Conquerors School of Theology</InfoItem>
        <InfoItem><strong>Affiliated Church:</strong> City of Dominion Assembly, a.k.a City of Glory</InfoItem>
        <InfoItem><strong>Address:</strong> 1, City of Glory Avenue Akaenu Umueri Otuocha in 
        Anambra East, Anambra State Nigeria.</InfoItem>
        <InfoItem><strong>Phone:</strong> +234 8032605250, +234 9017106065</InfoItem>
        <InfoItem><strong>Whatsapp:</strong> 08032605250, 08064240674, 08038639284</InfoItem>
        <InfoItem><strong>Email:</strong> mtcst@gmail.com</InfoItem>

        <SocialLinks>
          <IconLink 
            href="https://www.youtube.com/c/CityOfDominionAssembly" 
            target="_blank" 
            rel="noopener noreferrer" 
            hoverColor="#FF0000"
          >
            <FaYoutube />
          </IconLink>

          <IconLink 
            href="https://twitter.com/yourprofile" 
            target="_blank" 
            rel="noopener noreferrer" 
            hoverColor="#1DA1F2"
          >
            <FaTwitter />
          </IconLink>

          <IconLink 
            href="mailto:mtcst@gmail.com" 
            hoverColor="#FFD700"
          >
            <FaEnvelope />
          </IconLink>

          <IconLink 
            href="https://wa.me/2348032605250" 
            target="_blank" 
            rel="noopener noreferrer" 
            hoverColor="#25D366"
          >
            <FaWhatsapp />
          </IconLink>

          <IconLink 
            href="tel:+2348032605250" 
            hoverColor="#32CD32"
          >
            <FaPhone />
          </IconLink>
        </SocialLinks>
        <SupportCard>
  <h3>💰 Financial Support</h3>
  <p>
    Would you like to support the vision of our Theological School?  
    Your financial contribution helps us provide scholarships, build resources, 
    and train ministers for the work of the Gospel.
  </p>

  <div className="support-info">
    <p>📩 <strong>Email:</strong> mtcst9@gmail.com</p>
    <p>📞 <strong>Phone:</strong> +234 8032605250, +234 9017106065</p>
    <p>🏦 <strong>Bank Details:</strong> 2100601772, UBA Bank or 
    0033487046 Access Bank. Account Name: Nwambu Udenze
    Samuel</p>
  </div>

</SupportCard>
      </InfoWrapper>
    </ContactContainer>
  );
};

export default ContactSection;
