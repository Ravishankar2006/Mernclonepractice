import styled from "styled-components";

export const FooterWrapper = styled.footer`
  background-color: white;
  padding: 60px 20px;
  border-top: 1px solid #f0f0f0;
  font-family: 'Poppins', sans-serif;
`;

export const FooterContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  
  /* FIX: Reduced min-width from 160px to 120px so all 8 columns fit on one line */
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  
  /* Optional: Reduce gap slightly if it's still tight */
  gap: 20px; 
  
  justify-content: start;

  @media (max-width: 1024px) {
    /* On smaller laptops/tablets, allow it to wrap gracefully into 4 columns */
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr; /* Stack vertically on mobile */
    text-align: center;
  }
`;

export const LogoColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  
  img {
    height: 50px;
    margin-bottom: 20px;
  }

  @media (max-width: 480px) {
    align-items: center;
  }
`;

export const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const ColumnTitle = styled.h3`
  color: #ff2a4a; /* Brand Red */
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 10px;
`;

export const FooterLink = styled.a`
  color: #333;
  text-decoration: none;
  font-size: 0.9rem;
  line-height: 1.4;
  transition: color 0.2s ease;

  &:hover {
    color: #ff2a4a;
    transform: translateX(3px); /* Subtle nudge on hover */
    display: inline-block;
  }
`;

/* Social Column Styling */
export const SocialColumn = styled(FooterColumn)`
  /* Just inheriting for now, but can add specific social spacing */
`;

export const SocialTitle = styled(ColumnTitle)`
  color: #000; /* Black for "Follow Us" */
  font-size: 1.4rem; /* Slightly larger */
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  
  @media (max-width: 480px) {
    justify-content: center;
  }
`;

export const IconLink = styled.a`
  transition: transform 0.2s;
  
  img {
    width: 32px;
    height: 32px;
  }
  
  &:hover {
    transform: scale(1.1);
  }
`;