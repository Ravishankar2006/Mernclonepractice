import styled from "styled-components";

export const FeedbackWrapper = styled.section`
  padding: 80px 20px;
  background-color: white; /* Clean white background */
  text-align: center;
  position: relative;
`;

export const SectionHeader = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: #000;
  margin-bottom: 60px;
`;

/* Container for the cards and arrows */
export const SliderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  max-width: 1400px;
  margin: 0 auto;
`;

/* The scrollable area hiding the scrollbar */
export const FeedbackCard = styled.div`
  background: white;
  border: 1px solid #f0f0f0;
  border-radius: 12px;
  padding: 40px;
  
  /* Desktop: Fixed width */
  min-width: 500px; 
  
  text-align: left;
  box-shadow: 0 4px 20px rgba(0,0,0,0.05);
  transition: transform 0.2s ease;
  
  /* --- NEW: SNAP ALIGNMENT --- */
  /* This forces the card to stop exactly in the center */
  scroll-snap-align: center; 

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0,0,0,0.1);
  }

  @media (max-width: 768px) {
    /* Mobile: Relative width */
    min-width: 85vw; /* Occupies 85% of the screen */
    padding: 25px;
    
    /* Remove hover effect on mobile (it can get stuck) */
    &:hover {
      transform: none;
    }
  }
`;

export const StarContainer = styled.div`
  color: #ffc107; /* Golden Yellow */
  font-size: 1.5rem;
  margin-bottom: 20px;
  letter-spacing: 2px;
`;

export const ReviewText = styled.p`
  color: #555;
  font-size: 1rem;
  line-height: 1.7;
  margin-bottom: 30px;
  min-height: 80px; /* Keeps cards same height even if text varies */
`;

/* Profile Section */
export const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  border-top: 1px solid #eee; /* Optional divider */
  padding-top: 20px;
`;

export const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #00a8e8; /* Blue ring like screenshot */
  padding: 2px; /* Space between image and ring */
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  
  strong {
    font-size: 1.1rem;
    color: #333;
    font-weight: 700;
  }
  
  span {
    font-size: 0.9rem;
    color: #888;
    margin-top: 2px;
  }
`;

/* The Blue Navigation Arrow Button */
export const NavButton = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #00a8e8; /* Bright Blue */
  color: white;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.2rem;
  transition: background 0.3s;
  flex-shrink: 0; /* Prevents button from shrinking */

  &:hover {
    background-color: #007bb5;
  }
  
  /* Hide arrows on mobile since they can just swipe */
  @media (max-width: 768px) {
    display: none;
  }
`;