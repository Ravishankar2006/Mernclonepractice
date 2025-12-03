import React from "react";
import {
  FooterWrapper,
  FooterContainer,
  LogoColumn,
  FooterColumn,
  ColumnTitle,
  FooterLink,
  SocialColumn,
  SocialTitle,
  SocialIcons,
  IconLink
} from "./Footer.styles";

// Import your logo asset
import logoImg from "../../assets/icon.png"; 

// Data Structure for Links
const footerData = {
  company: {
    title: "Company",
    links: ["Home", "About Us", "Our Services", "My Courses", "Affiliate"]
  },
  colleges: {
    title: "Colleges",
    links: [
      "Placement Prep", "Higher Studies Prep", "Government Jobs", 
      "Aptitude Prep", "Technical Prep", "Aptitude+Technical Prep", 
      "Service Based Company Prep", "Product Based Company Prep", 
      "GRE", "GATE", "GMAT", "CAT/XAT/MAT"
    ]
  },
  schools: {
    title: "Schools",
    links: [
      "IIT JEE", "NEET", "Maths Olympiad", "Science Olympiad", 
      "Cyber Olympiad", "Package of All Olympiad", "Aptitude", 
      "Mathematics", "NTSE", "Coding-C", "C++", "Python"
    ]
  },
  courses: {
    title: "Courses",
    links: [
      "Placement Prep", "Higher Studies Prep", "Government Jobs Prep",
      "IIT JEE/NEET", "Olympiad Prep", "Coding Prep", "Tuitions 1st-12th"
    ]
  },
  exams: {
    title: "Exams",
    links: [
      "UPSC", "CAT/XAT/MAT", "GRE/GMAT", "GATE", "IIT JEE/NEET", 
      "SAP", "SSC/Bank Exams RRB", "TNPSC"
    ]
  },
  skills: {
    title: "Skill Development",
    links: [
      "Web Development-FullStack", "Web Development-Frontend", 
      "Web Development-Backend", "Mobile Development", 
      "Machine Learning", "Data Science", "Soft Skills", "Leadership Skills"
    ]
  }
};

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        
        {/* 1. Logo Column */}
        <LogoColumn>
          <img src={logoImg} alt="Aptitude Guru Hemchandar" />
        </LogoColumn>

        {/* 2. Dynamic Link Columns */}
        {Object.values(footerData).map((column, index) => (
          <FooterColumn key={index}>
            <ColumnTitle>{column.title}</ColumnTitle>
            {column.links.map((link, i) => (
              <FooterLink key={i} href="#">{link}</FooterLink>
            ))}
          </FooterColumn>
        ))}

        {/* 3. Social Media Column */}
        <SocialColumn>
          <SocialTitle>Follow Us</SocialTitle>
          <SocialIcons>
            <IconLink href="#"><img src="https://img.icons8.com/fluency/48/instagram-new.png" alt="Instagram"/></IconLink>
            <IconLink href="#"><img src="https://img.icons8.com/fluency/48/facebook-new.png" alt="Facebook"/></IconLink>
            <IconLink href="#"><img src="https://img.icons8.com/color/48/linkedin.png" alt="LinkedIn"/></IconLink>
            <IconLink href="#"><img src="https://img.icons8.com/color/48/youtube-play.png" alt="YouTube"/></IconLink>
            <IconLink href="#"><img src="https://img.icons8.com/ios-filled/50/twitterx--v1.png" alt="X"/></IconLink>
          </SocialIcons>
        </SocialColumn>

      </FooterContainer>
    </FooterWrapper>
  );
};

export default Footer;