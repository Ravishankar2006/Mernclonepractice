import React from "react";
import {
  ContactWrapper,
  ContactContainer,
  TextContent,
  ContactButton,
  ImageWrapper
} from "./Contact.styles";


const ContactSection = () => {
  return (
    <ContactWrapper>
      <ContactContainer>
        
        {/* Left Side: Text */}
        <TextContent>
          <h2>GET IN TOUCH</h2>
          <p>
            Have questions or feedback? We're here to help. 
            Send us a message and we'll respond soon.
          </p>
          <ContactButton>Contact Us</ContactButton>
        </TextContent>

        {/* Right Side: Image */}
        <ImageWrapper>
          <img 
            src="https://aptitudeguru.in/static/media/get-in-touch.8c521c235d4bd711343c.jpg" 
            alt="Customer Support" 
          />
        </ImageWrapper>

      </ContactContainer>
    </ContactWrapper>
  );
};

export default ContactSection;