import styled from "styled-components";

export const ContactWrapper = styled.section`
  background-color: #ff2a4a; /* Brand Red */
  padding: 80px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden; /* Hides decorative circles if they go off-screen */
  position: relative;
`;

export const ContactContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  width: 100%;
  gap: 50px;

  @media (max-width: 900px) {
    flex-direction: column;
    text-align: center;
    gap: 40px;
  }
`;

export const TextContent = styled.div`
  flex: 1;
  color: white;
  
  h2 {
    font-size: 3.5rem;
    font-weight: 800;
    margin-bottom: 20px;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  p {
    font-size: 1.2rem;
    line-height: 1.6;
    margin-bottom: 30px;
    max-width: 500px;
    
    @media (max-width: 900px) {
      margin: 0 auto 30px; /* Center text on mobile */
    }
  }
`;

export const ContactButton = styled.button`
  background-color: white;
  color: #333;
  font-size: 1.1rem;
  font-weight: 700;
  padding: 15px 35px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  box-shadow: 0 5px 15px rgba(0,0,0,0.2);
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.3);
  }
`;

/* The Right Side Illustration Area */
export const ImageWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  position: relative;

  /* The White Circle behind the image */
  &::before {
    content: '';
    position: absolute;
    width: 450px;
    height: 450px;
    background-color: rgba(255, 255, 255, 0.1); /* Semi-transparent circle */
    border-radius: 50%;
    z-index: 0;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  
  img {
    border-radius: 600px;
    position: relative; /* Sits on top of the circle */
    z-index: 1;
    width: 100%;
    max-width: 450px;
    height: auto;
    object-fit: contain;
  }

  @media (max-width: 900px) {
    &::before {
      width: 300px;
      height: 300px;
    }
    img {
      max-width: 300px;
    }
  }
`;