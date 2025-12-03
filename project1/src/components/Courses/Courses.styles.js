import styled from "styled-components";

export const SectionWrapper = styled.section`
  padding: 60px 20px;
  background-color: white;
  text-align: center;
`;

export const SectionHeader = styled.div`
  margin-bottom: 50px;
  
  h2 {
    font-size: 2.5rem;
    font-weight: 700;
    color: #000;
    margin-bottom: 15px;
  }
  
  p {
    font-size: 1.1rem;
    color: #666;
    max-width: 700px;
    margin: 0 auto;
    line-height: 1.5;
  }
`;

export const CourseGrid = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
`;

export const CourseCard = styled.div`
  background: white;
  border: 1px solid black;
  border-radius: 15px;
  width: 350px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-align: left; /* Aligns content inside card to left */
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.1);
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 220px;
  background-color: #f9f9f9;
  display: flex;
  align-items: center;
  justify-content: center;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* Keeps illustrations looking good */
  }
`;

export const CardContent = styled.div`
  padding: 20px;
`;

export const Rating = styled.div`
  color: #ffc107; /* Star Yellow */
  font-weight: bold;
  margin-bottom: 10px;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 5px;
  
  span {
    color: #333; /* The number rating color */
  }
`;

export const CourseTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 700;
  color: #000;
  margin-bottom: 10px;
`;

export const CourseInfo = styled.div`
  font-size: 0.9rem;
  color: #555;
  margin-bottom: 5px;
  
  strong {
    font-weight: 600;
  }
`;

export const PriceSection = styled.div`
  margin: 15px 0 20px;
  display: flex;
  align-items: center;
  gap: 10px;
  
  .current-price {
    font-size: 1.5rem;
    font-weight: 700;
    color: #333;
  }
  
  .gst {
    color: #ff2a4a; /* Red GST text */
    font-size: 0.8rem;
    font-weight: 600;
  }

  .original-price {
    text-decoration: line-through;
    color: #aaa;
    font-size: 1rem;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
`;

export const ActionButton = styled.button`
  flex: 1;
  padding: 12px;
  border-radius: 5px;
  font-weight: 600;
  cursor: pointer;
  border: none;
  transition: opacity 0.2s;

  /* Variant Styles */
  background-color: ${(props) => (props.primary ? "#ff2a4a" : "#f0f0f0")};
  color: ${(props) => (props.primary ? "white" : "#333")};

  &:hover {
    opacity: 0.9;
  }
`;