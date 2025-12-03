import styled from "styled-components";

export const SectionWrapper = styled.section`
  padding: 80px 20px;
  background-color: white;
  text-align: center;
`;

export const SectionHeader = styled.div`
  margin-bottom: 60px;
  
  h2 {
    font-size: 2.5rem;
    font-weight: 700;
    color: #000;
    margin-bottom: 15px;
  }
  
  p {
    font-size: 1.1rem;
    color: #555;
    font-weight: 500;
  }
`;

export const PromiseGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto;
`;

export const PromiseCard = styled.div`
  background: white;
  text-align: left;
  padding-top: 20px;
  /* The Magic Colored Line */
  border-top: 3px solid ${(props) => props.color};
  
  /* Optional: Add hover effect */
  transition: transform 0.2s;
  &:hover {
    transform: translateY(-5px);
  }
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 15px;
`;

export const IconBox = styled.div`
  font-size: 24px;
  color: ${(props) => props.color};
  
  /* If you switch to SVGs later, this ensures they align */
  display: flex;
  align-items: center;
`;

export const CardTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: #555; /* Soft black */
  margin: 0;
`;

export const CardText = styled.p`
  font-size: 0.95rem;
  line-height: 1.6;
  color: #666;
  margin: 0;
`;