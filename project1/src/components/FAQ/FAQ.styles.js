import styled from "styled-components";

export const SectionWrapper = styled.section`
  padding: 80px 20px;
  background-color: #f8f9fa; /* Light grey background */
  background-image: url('https://www.transparenttextures.com/patterns/connected.png'); /* Subtle network pattern */
  text-align: center;
`;

export const Header = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: #000;
  margin-bottom: 60px;

  span {
    color: #ff2a4a; /* Red highlight */
  }
`;

export const FAQGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr; /* Two equal columns */
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto;
  text-align: left;

  @media (max-width: 900px) {
    grid-template-columns: 1fr; /* Stack on mobile */
    gap: 20px;
  }
`;

export const FAQColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const FAQItem = styled.div`
  border-bottom: 1px solid #ddd;
  padding-bottom: 15px;
`;

export const QuestionRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center; /* Aligns text and button vertically */
  cursor: pointer;
  gap: 15px;

  h3 {
    font-size: 1rem;
    font-weight: 500;
    color: #333;
    margin: 0;
    line-height: 1.5;
  }
`;

export const ToggleButton = styled.button`
  background-color: #ff2a4a;
  color: white;
  border: none;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  cursor: pointer;
  flex-shrink: 0; /* Prevents button from squishing */
  transition: transform 0.3s ease;

  /* Rotate the arrow when open */
  transform: ${(props) => (props.isOpen ? "rotate(180deg)" : "rotate(0deg)")};
`;

export const AnswerText = styled.div`
  max-height: ${(props) => (props.isOpen ? "200px" : "0")};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out, margin-top 0.3s ease;
  
  p {
    margin-top: 15px;
    font-size: 0.95rem;
    color: #666;
    line-height: 1.6;
    padding-right: 40px; /* Keep text away from the button area */
  }
`;