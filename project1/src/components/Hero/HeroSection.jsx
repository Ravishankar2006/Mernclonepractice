import React, { useRef } from "react";
import { HeroWrapper } from "./Hero.styles";
import { useCarousel, useTypingAnimation, useSlideText } from "../../hooks/UseHeroAnimations";

// Assets
import banner1 from "../../assets/banner-image.png";
import banner2 from "../../assets/banner-image2.png";
import banner3 from "../../assets/banner-image3.png";

// Styles (Inline for simplicity, or move to Hero.styles.js)


const HeroSection = () => {
  const carouselRef = useRef(null);
  const typingRef = useRef(null);
  const slideRef = useRef(null);

  // Activate Hooks
  useCarousel(carouselRef);
  useTypingAnimation(typingRef);
  useSlideText(slideRef);

  return (
    <HeroWrapper>
      <div className="carousel-container">
        <div className="carousel-slide" ref={carouselRef}>
          <img src={banner1} alt="Banner 1" />
          <img src={banner2} alt="Banner 2" />
          <img src={banner3} alt="Banner 3" />
        </div>
      </div>

      <div className="title-container">
        <h1 ref={typingRef}></h1>
        <span className="cursor">&nbsp;</span>
      </div>

      <h2 className="sub-heading">At AGH, we shape future and build skills that</h2>
      
      <div className="slide-wrapper">
        <h2 ref={slideRef} className="dynamic-text"></h2>
      </div>

      <p className="description">
        Where Success Meets Opportunity! Are you ready to embark on a transformative journey towards success? At Aptitude Guru Hem, we are committed to providing you with the essential skills and knowledge to excel in your professional endeavors. Our expert training in aptitude and coding equips you to conquer every challenge, from company interview assessments to prestigious coding platforms like LeetCode, GeeksForGeeks, HackerRank , and more.
      </p>

      <div className="buttons">
        <button className="btn btn-primary">Start Your Learning</button>
        <button className="btn btn-secondary">Join a Live Demo</button>
      </div>
    </HeroWrapper>
  );
};

export default HeroSection;