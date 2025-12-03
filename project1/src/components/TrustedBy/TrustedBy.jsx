import React from "react";
import { 
  SectionWrapper, 
  GridContainer, 
  Card, 
  IconWrapper, 
  Content 
} from "./TrustedBy.styles";

// You can swap these emojis for <img src={...} /> later!
const cardData = [
  {
    count: "100+",
    label: "COLLEGES",
    color: "#00cba9", // Teal
    icon: "🏛️", 
    type: "u-shape" // Icon on Top
  },
  {
    count: "150",
    label: "PROFESSIONAL",
    subLabel: "TRAINERS",
    color: "#00a8e8", // Blue
    icon: "👨‍🏫",
    type: "n-shape" // Icon on Bottom
  },
  {
    count: "1000+",
    label: "STUDY MATERIALS",
    subLabel: "AGH LMS",
    color: "#fca311", // Orange
    icon: "📖",
    type: "u-shape"
  },
  {
    count: "1,00,000",
    label: "STUDENTS",
    subLabel: "B2B: Placement Training",
    color: "#ff2a4a", // Red
    icon: "🎓",
    type: "n-shape"
  }
];

const TrustedBy = () => {
  return (
    <SectionWrapper>
      <h2>Trusted By</h2>
      <GridContainer>
        {cardData.map((card, index) => (
          <Card key={index} color={card.color} type={card.type}>
            
            {/* The Floating Icon */}
            <IconWrapper color={card.color} type={card.type}>
              {card.icon}
            </IconWrapper>

            {/* The Text */}
            <Content>
              <h3>{card.count}</h3>
              <p>{card.label}</p>
              {card.subLabel && <span>{card.subLabel}</span>}
            </Content>

          </Card>
        ))}
      </GridContainer>
    </SectionWrapper>
  );
};

export default TrustedBy;