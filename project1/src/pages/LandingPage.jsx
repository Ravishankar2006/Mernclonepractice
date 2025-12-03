import React from "react";
import styled, { createGlobalStyle } from "styled-components";

// Import all your new components
import Navbar from "../components/Navbar/Navbar";
import HeroSection from "../components/Hero/HeroSection";
import AboutSection from "../components/About/AboutSection";
import TrustedBy from "../components/TrustedBy/TrustedBy"; // (Ensure you created this from previous step)
import RedBanner from "../components/CTA/RedBanner";
import CoursesSection from "../components/Courses/CoursesSection";
import FeedbackSection from "../components/FeedBack/FeedbackSection";
import PromiseSection from "../components/Promise/PromiseSection";
import FAQSection from "../components/FAQ/FAQSection";
import ContactSection from "../components/Contact/ContactSection";
import Footer from "../components/Footer/Footer";

// Global CSS Reset
// src/pages/LandingPage.jsx

// Global Styles
const GlobalStyle = createGlobalStyle`
  * { 
    margin: 0; 
    padding: 0; 
    /* This ensures padding stays INSIDE the box */
    box-sizing: border-box; 
  }
  
  html, body {
    width: 100%;
    overflow-x: hidden; /* Prevents the white gutter */
  }
`;

const PageContainer = styled.div`
  width: 100vw; /* Forces it to be 100% of the Viewport Width */
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
`;

const LandingPage = () => {
  return (
    <>
      <GlobalStyle />
      <PageContainer>
        <Navbar />
        <HeroSection />
        <AboutSection />
        <RedBanner />
        <CoursesSection/>
        <TrustedBy />
        <FeedbackSection />
        <PromiseSection />
        <FAQSection />
        <ContactSection />
        <Footer />
        
        {/* Placeholder for Courses Section */}
        <div style={{ textAlign: 'center', padding: '50px' }}>
            <h2>Our Courses</h2>
            <p style={{color: '#666'}}>Explore a wide range of curated courses...</p>
        </div>

      </PageContainer>
    </>
  );
};

export default LandingPage;