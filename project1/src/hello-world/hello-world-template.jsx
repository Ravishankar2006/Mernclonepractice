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
      
      <div className="redcircle">
        <div className="element">
          <div className="element_item">
            <h2 className="title">
              Learners today, Leaders tommorow
            </h2>
            <p className="sub-title">
              "with continuous learning and dedication, you can transform yourself from a learner today into a leader tomorrow, shaping the future with your knowledge and skills."
            </p>
          </div>
        </div>
      </div>
    </HelloWorldStyle>
  );
};

export default HelloWorldTemplate;