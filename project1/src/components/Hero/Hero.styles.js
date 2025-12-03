import styled from "styled-components";

export const HeroWrapper = styled.div`
  text-align: center;
  padding-bottom: 50px;
  background-color: white;
  
  .carousel-container {
    width: 100%;
    overflow: hidden;
    position: relative;
  }
  
  .carousel-slide {
    display: flex;
    width: 100%;
    transition: transform 0.5s ease-in-out;
  }
  
  .carousel-slide img {
    min-width: 100%;
    height: auto;
    object-fit: cover;
  }

  .title-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
  }
  
  h1 { color: red; font-size: 3rem; margin: 0; }
  
  .cursor {
    display: inline-block;
    background-color: red;
    width: 4px;
    height: 3rem;
    margin-left: 5px;
    animation: blink 1s infinite;
  }

  .sub-heading {
    font-size: 24px;
    color: #333;
    margin-top: 10px;
  }

  /* Slide Text */
  .slide-wrapper {
    height: 50px;
    overflow: hidden;
    display: flex; justify-content: center; align-items: center;
  }
  .dynamic-text {
    color: red; font-size: 24px; font-weight: 700;
    opacity: 0; transform: translateY(20px);
    transition: all 0.5s ease-out;
  }
  .dynamic-text.visible { opacity: 1; transform: translateY(0); }

  .description {
    max-width: 800px;
    margin: 20px auto;
    line-height: 1.6;
    color: #555;
    padding: 0 15px;
  }

  .buttons { display: flex; justify-content: center; gap: 20px; margin-top: 30px; }
  .btn { padding: 10px 25px; border-radius: 5px; border: 1px solid #ccc; cursor: pointer; font-weight: 600; }
  .btn-primary { background: #333; color: white; border: none; }
  .btn-secondary { background: red; color: white; }
  
  @keyframes blink { 50% { opacity: 0; } }
`;