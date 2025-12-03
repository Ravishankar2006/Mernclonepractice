import React from "react";
import {
  SectionWrapper,
  SectionHeader,
  CourseGrid,
  CourseCard,
  ImageContainer,
  CardContent,
  Rating,
  CourseTitle,
  CourseInfo,
  PriceSection,
  ButtonGroup,
  ActionButton
} from "./Courses.styles";

// You can import your real images here like:
// import course1 from "../../assets/course1.png";

const coursesData = [
  {
    id: 1,
    title: "Aptitude Complete Preparation",
    rating: 5,
    recommended: "Final year students",
    duration: "1 Year",
    price: "₹ 12,000",
    originalPrice: "₹ 24,999",
    image: "https://res.cloudinary.com/dotsjvnys/image/upload/v1715770719/AGH-Nov/HeroSection/aptitude_ch2mz0.jpg" // Placeholder
  },
  {
    id: 2,
    title: "Technical Complete Preparation",
    rating: 4.9,
    recommended: "Final year students",
    duration: "1 year",
    price: "₹ 12,000",
    originalPrice: "₹ 24,999",
    image: "https://res.cloudinary.com/dotsjvnys/image/upload/v1715770721/AGH-Nov/HeroSection/programming_e05rx7.png" // Placeholder
  },
  {
    id: 3,
    title: "MERN Fullstack",
    rating: 4.4,
    recommended: "Final year students",
    duration: "1 year",
    price: "₹ 29,999",
    originalPrice: "₹ 39,999",
    image: "https://res.cloudinary.com/dotsjvnys/image/upload/v1715770718/AGH-Nov/HeroSection/web-development_bfpidr.png" // Placeholder
  }
];

const CoursesSection = () => {
  return (
    <SectionWrapper>
      <SectionHeader>
        <h2>Our Courses</h2>
        <p>Explore a wide range of curated courses for every learner. Structured to enhance knowledge, skills, and career growth.</p>
      </SectionHeader>

      <CourseGrid>
        {coursesData.map((course) => (
          <CourseCard key={course.id}>
            <ImageContainer>
              <img src={course.image} alt={course.title} />
            </ImageContainer>

            <CardContent>
              <Rating>
                ★★★★★ <span>{course.rating}</span>
              </Rating>
              
              <CourseTitle>{course.title}</CourseTitle>
              
              <CourseInfo>Recommended: <strong>{course.recommended}</strong></CourseInfo>
              <CourseInfo>Duration: <strong>{course.duration}</strong></CourseInfo>
              
              <PriceSection>
                <span className="current-price">{course.price}</span>
                <span className="gst">+ GST</span>
                <span className="original-price">{course.originalPrice}</span>
              </PriceSection>

              <ButtonGroup>
                <ActionButton primary>Buy Now</ActionButton>
                <ActionButton>Know More</ActionButton>
              </ButtonGroup>
            </CardContent>
          </CourseCard>
        ))}
      </CourseGrid>
    </SectionWrapper>
  );
};

export default CoursesSection;