import React from "react";
import { HelloWorldStyle } from "./hello-world-style";

const HelloWorldTemplate = ({ 
  carouselSlideRef, 
  typingTextRef, 
  slideTextRef, 
  iconImg, 
  shopImg,
  bannerImg1, 
  bannerImg2, 
  bannerImg3 
}) => {
  return (
    <HelloWorldStyle>
      <nav className="navbar">
        <div className="logo">
            <img src={iconImg} alt="Logo" />
        </div>

        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Courses</a></li>
            <li><a href="#">Workshops</a></li>
            <li><a href="#">Crash Courses</a></li>
        </ul>

        <div className="shop">
            <img src={shopImg} alr="Shopping Cart" />
            <button className="login-btn">Log in</button>
        </div>  
      </nav>

      <div className="carousel-container">
        <div className="carousel-slide" ref={carouselSlideRef}>
            <img src={bannerImg1} alt="" />
            <img src={bannerImg2} alt="" />
            <img src={bannerImg3} alt="" />
        </div>
      </div>

      <div>
          <div className="title-container">
            <h1 ref={typingTextRef}></h1><span className="cursor">&nbsp;</span>
          </div>
          <h2>At AGH, we shape future and build skills that</h2>
          <div className="slide-wrapper">
            <h2 ref={slideTextRef} className="dynamictext"></h2>
          </div>
          <p className="hero-description">Where Success Meets Opportunity! Are you ready to embark on a transformative journey towards success? At Aptitude Guru Hem, we are committed to providing you with the essential skills and knowledge to excel in your professional endeavors. Our expert training in aptitude and coding equips you to conquer every challenge, from company interview assessments to prestigious coding platforms like LeetCode, GeeksForGeeks, HackerRank , and more.</p>
      </div>

      <div className="about">
        <div className="about-element">
          <h1 className="title">A Symbol of Excellence in Placement Training</h1>
          <p className="para">Aptitude Guru Hem was borm from the aspiration to create a learning enviroment that inspires greatness. Our founder, driven by personal experiences and a desire to make a, difference, established the comapny with a mission to empower students with the right. skills and mindset for sucess</p>
        </div>
      </div>

      <div className="about2">
        {/* 1. Changed class to vision-box and removed "|" */}
        <div className="vision-box">
          <h3 className="title">Our Vision</h3>
          <p className="para">Our vision is to empower individuals from diverse backgrounds to become accomplished professionals. At Aptitude Guru Hem, we believe that knowledge has the power to transcend boundaries.</p>
        </div>

        {/* 2. Added the divider div */}
        <div className="vertical-divider"></div>

        {/* 3. Changed class to mission-box and removed "|" */}
        <div className="mission-box">
          <h3 className="title">Our Mission</h3>
          <p className="para">Our mission is to revolutionize education by providing comprehensive training in aptitude, coding, and web/mobile development. We foster a culture of inclusivity and personal growth.</p>
        </div>
      </div>

      <div className="red-pill-section">
        <div className="red-pill-container">
            <h2 className="pill-title">Learners today, Leaders tomorrow</h2>
            <p className="pill-subtitle">
              "With continuous learning and dedication, you can transform yourself from a learner today into a leader tomorrow, shaping the future with your knowledge and skills."
            </p>
        </div>
      </div>
    </HelloWorldStyle>
  );
};

export default HelloWorldTemplate;