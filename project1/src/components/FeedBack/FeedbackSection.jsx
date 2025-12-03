import React, { useRef } from "react";
import {
  FeedbackWrapper,
  SectionHeader,
  SliderContainer,
  CardTrack,
  FeedbackCard,
  StarContainer,
  ReviewText,
  ProfileWrapper,
  Avatar,
  ProfileInfo,
  NavButton
} from "./Feedback.styles";

// Data from your screenshots
const reviews = [
  {
    id: 1,
    name: "Guru Thejitha",
    role: "Bank of America",
    text: "The session was very helpful during my initial level tests to crack them. Application of knowledge was apt while solving things. Thanks much for all your support irrespective of time. Thanks for your guidance",
    // Use a placeholder or your actual image asset
    image: "https://randomuser.me/api/portraits/women/44.jpg" 
  },
  {
    id: 2,
    name: "Teresa Angeline Mary A",
    role: "Kaar Technologies",
    text: "I had really good experience and knowledge. Hemchandar sir made the concepts really very clear for us",
    image: "https://randomuser.me/api/portraits/women/68.jpg"
  },
  {
    id: 3,
    name: "Thanga Balaji T",
    role: "Standard Chartered Bank",
    text: "He is very polite and clear with all the concepts. He explains all the concepts in way that we can solve any problem. His methods helped me in clearing many off campus interviews.",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  }
];

const FeedbackSection = () => {
  const scrollRef = useRef(null);

  // Simple Scroll Logic
  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      const scrollAmount = 500; // Scroll one card width
      current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };

  return (
    <FeedbackWrapper>
      <SectionHeader>Our Students Feedback</SectionHeader>
      
      <SliderContainer>
        {/* Left Button */}
        <NavButton onClick={() => scroll("left")}>&#10094;</NavButton>

        {/* Scrollable Track */}
        <CardTrack ref={scrollRef}>
          {reviews.map((review) => (
            <FeedbackCard key={review.id}>
              <StarContainer>★★★★★</StarContainer>
              <ReviewText>{review.text}</ReviewText>
              
              <ProfileWrapper>
                <Avatar src={review.image} alt={review.name} />
                <ProfileInfo>
                  <strong>{review.name}</strong>
                  <span>{review.role}</span>
                </ProfileInfo>
              </ProfileWrapper>
            </FeedbackCard>
          ))}
        </CardTrack>

        {/* Right Button */}
        <NavButton onClick={() => scroll("right")}>&#10095;</NavButton>
      </SliderContainer>

    </FeedbackWrapper>
  );
};

export default FeedbackSection;