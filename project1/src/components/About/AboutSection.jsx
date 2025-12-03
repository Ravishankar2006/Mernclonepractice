import React from "react";
import { AboutWrapper } from "./About.styles";

const AboutSection = () => {
  return (
    <AboutWrapper>
      <div className="main-about">
        <h1 className="main-title">A Symbol of Excellence in Placement Training</h1>
        <p className="main-para">
          Aptitude Guru Hem was born from the aspiration to create a learning environment that inspires greatness. Our founder, driven by personal experiences and a desire to make a difference, established the company with a mission to empower students with the right skills and mindset for success.
        </p>
      </div>

      <div className="vm-container">
        <div className="vm-box vision">
          <h3 className="vm-title">Our Vision</h3>
          <p>Our vision is to empower individuals from diverse backgrounds to become accomplished professionals. At Aptitude Guru Hem, we believe that knowledge has the power to transcend boundaries.</p>
        </div>

        <div className="divider"></div>

        <div className="vm-box mission">
          <h3 className="vm-title">Our Mission</h3>
          <p>Our mission is to revolutionize education by providing comprehensive training in aptitude, coding, and web/mobile development. We foster a culture of inclusivity and personal growth.</p>
        </div>
      </div>
    </AboutWrapper>
  );
};

export default AboutSection;