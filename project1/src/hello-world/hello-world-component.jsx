import React, { useEffect, useRef } from "react";
import "./hello-world.css";
import { useCarousel, useTypingAnimation, useSlideText } from "./hello-world-logic";
import HelloWorldTemplate from "./hello-world-template";
import iconImg from "./icon.png";
import shopImg from "./shop.png";
import bannerImg1 from "./banner-image.png";
import bannerImg2 from "./banner-image2.png";
import bannerImg3 from "./banner-image3.png";

const HelloWorldComponent = () => {
  const carouselSlideRef = useRef(null);
  const typingTextRef = useRef(null);
  const slideTextRef = useRef(null);

  const { startCarousel } = useCarousel(carouselSlideRef);
  const { startTyping } = useTypingAnimation(typingTextRef);
  const { startSlideText } = useSlideText(slideTextRef);

  useEffect(() => {
    const carouselInterval = startCarousel();
    const typingTimeout = startTyping();
    const slideInterval = startSlideText();

    return () => {
      if (carouselInterval) clearInterval(carouselInterval);
      if (slideInterval) clearInterval(slideInterval);
      if (typingTimeout) clearTimeout(typingTimeout);
    };
  }, [startCarousel, startTyping, startSlideText]);

  return (
    <HelloWorldTemplate
      carouselSlideRef={carouselSlideRef}
      typingTextRef={typingTextRef}
      slideTextRef={slideTextRef}
      iconImg={iconImg}
      bannerImg1={bannerImg1}
      bannerImg2={bannerImg2}
      bannerImg3={bannerImg3}
      shopImg={shopImg}
    />
  );
};

export default HelloWorldComponent;