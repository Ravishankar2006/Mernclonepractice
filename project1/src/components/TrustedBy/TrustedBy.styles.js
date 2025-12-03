import styled from "styled-components";

export const SectionWrapper = styled.div`
  text-align: center;
  padding: 80px 20px;
  background-color: white;
  
  h2 {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 80px; /* Space for top floating icons */
    color: black;
  }
`;

export const GridContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto;
`;

export const Card = styled.div`
  position: relative;
  width: 260px;
  height: 220px;
  background: white;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 30px rgba(0,0,0,0.08);
  
  /* The Magic Border Logic */
  border: 10px solid ${(props) => props.color};
  
  /* If type is 'u-shape' (Icon Top), remove Top Border */
  ${(props) => props.type === 'u-shape' && `
    border-top: none;
    border-radius: 0 0 20px 20px;
  `}

  /* If type is 'n-shape' (Icon Bottom), remove Bottom Border */
  ${(props) => props.type === 'n-shape' && `
    border-bottom: none;
    border-radius: 20px 20px 0 0;
  `}
`;

export const IconWrapper = styled.div`
  position: absolute;
  width: 80px;
  height: 80px;
  background: white;
  border-radius: 50%;
  border: 8px solid ${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 35px;
  
  /* Positioning */
  left: 50%;
  transform: translateX(-50%);

  /* If U-Shape, Icon goes UP */
  ${(props) => props.type === 'u-shape' && `top: -45px;`}
  
  /* If N-Shape, Icon goes DOWN */
  ${(props) => props.type === 'n-shape' && `bottom: -45px;`}
`;

export const Content = styled.div`
  text-align: center;
  
  h3 {
    font-size: 2.5rem;
    font-weight: 800;
    color: #555;
    margin: 0;
  }
  
  p {
    font-size: 0.9rem;
    font-weight: 700;
    color: #888;
    margin: 5px 0 0;
    text-transform: uppercase;
  }
  
  span {
    display: block;
    font-size: 0.8rem;
    color: #ff2a4a;
    margin-top: 5px;
    font-weight: 600;
  }
`;