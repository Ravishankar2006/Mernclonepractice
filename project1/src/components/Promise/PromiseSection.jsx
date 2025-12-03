import React from "react";
import {
  SectionWrapper,
  SectionHeader,
  PromiseGrid,
  PromiseCard,
  CardHeader,
  IconBox,
  CardTitle,
  CardText
} from "./Promise.styles";

const promiseData = [
  {
    id: 1,
    title: "Top Code Quality",
    text: "Our commitment goes beyond mere code - it encompasses providing solutions. You receive W3C fully compliant markup, without any compromise on quality.",
    color: "#20c997", // Teal
    icon: "💻" 
  },
  {
    id: 2,
    title: "Responsive",
    text: "We understand the value of a positive attitude, timely responsiveness, and adaptability. We're dedicated to attentively listening and leveraging our utmost capabilities to serve you.",
    color: "#ffc107", // Yellow/Gold
    icon: "📱"
  },
  {
    id: 3,
    title: "Rockstar Team",
    text: "Our expertise is our unique selling proposition. You'll have access to an all-star team of experienced professionals fully dedicated to serving you, armed with coding skills that are truly exceptional.",
    color: "#00a8e8", // Blue
    icon: "👥"
  },
  {
    id: 4,
    title: "Fast Turn-arounds",
    text: "The importance of speed is on par with quality for us. We are swift, nimble, and capable of providing high-quality code within a timeframe that suits your preferences.",
    color: "#7952b3", // Purple
    icon: "⚡"
  },
  {
    id: 5,
    title: "Life-time support",
    text: "Our commitment to code quality is exemplified by our enduring support. If any bugs happen to emerge in the future, feel free to reach out to us for assistance.",
    color: "#ff2a4a", // Red
    icon: "🔧"
  },
  {
    id: 6,
    title: "Secured Agreement",
    text: "The creative work you receive is entirely your own, and we unequivocally respect that. We assure you of our commitment and readiness to formalize this with a Non-Disclosure Agreement (NDA).",
    color: "#28a745", // Green
    icon: "🛡️"
  }
];

const PromiseSection = () => {
  return (
    <SectionWrapper>
      <SectionHeader>
        <h2>Our Promise</h2>
        <p>As part of our high quality service, we'd like to offer something extra too.</p>
      </SectionHeader>

      <PromiseGrid>
        {promiseData.map((item) => (
          <PromiseCard key={item.id} color={item.color}>
            <CardHeader>
              <IconBox color={item.color}>{item.icon}</IconBox>
              <CardTitle>{item.title}</CardTitle>
            </CardHeader>
            <CardText>{item.text}</CardText>
          </PromiseCard>
        ))}
      </PromiseGrid>
    </SectionWrapper>
  );
};

export default PromiseSection;