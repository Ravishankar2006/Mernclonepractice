import React, { useState } from "react";
import {
  SectionWrapper,
  Header,
  FAQGrid,
  FAQColumn,
  FAQItem,
  QuestionRow,
  ToggleButton,
  AnswerText
} from "./FAQ.styles";

// Data from your screenshot
const leftQuestions = [
  {
    id: 1,
    question: "What makes AGH different from other placement training institutes?",
    answer: "We focus on holistic development, combining technical skills with aptitude training and personal mentorship to ensure you are job-ready."
  },
  {
    id: 2,
    question: "Can AGH students secure placements in top companies?",
    answer: "Yes! Our alumni work at top MNCs like Amazon, Zoho, TCS, and Wipro thanks to our targeted placement training programs."
  },
  {
    id: 3,
    question: "Is AGH's curriculum up-to-date with industry demands?",
    answer: "Absolutely. We update our syllabus every 6 months to include the latest technologies and interview patterns requested by recruiters."
  },
  {
    id: 4,
    question: "How does AGH ensure success in higher studies exams like GRE and GMAT?",
    answer: "Our specialized aptitude modules cover the exact reasoning and quantitative sections found in competitive higher education exams."
  },
  {
    id: 5,
    question: "What sets AGH's Government Jobs Training apart for competitive exams like Banking Exams and SSC?",
    answer: "We provide shortcut techniques and speed math training that are crucial for cracking time-bound government exams."
  }
];

const rightQuestions = [
  {
    id: 6,
    question: "How does AGH nurture students beyond academics?",
    answer: "We conduct workshops on soft skills, leadership, and emotional intelligence to build well-rounded professionals."
  },
  {
    id: 7,
    question: "Why is AGH more than just a training center?",
    answer: "We are a community. Students get lifetime access to our alumni network and mentorship even after their course completion."
  },
  {
    id: 8,
    question: "What is AGH's commitment to empowering students beyond boundaries?",
    answer: "AGH's commitment extends beyond geographical and social boundaries. We believe in customization, innovation, and excellence to empower students worldwide to achieve what they once thought impossible."
  },
  {
    id: 9,
    question: "How can students join the AGH community and be part of this transformative journey?",
    answer: "You can enroll in our courses via our website or join our free workshops to get a taste of the AGH learning experience."
  },
  {
    id: 10,
    question: "How does AGH prepare students for industry-specific interviews?",
    answer: "We conduct mock interviews with industry experts who provide real-time feedback to improve your confidence and answers."
  }
];

// Helper Component for a Single Question
const AccordionItem = ({ item, isOpen, onClick }) => {
  return (
    <FAQItem>
      <QuestionRow onClick={onClick}>
        <h3>{item.question}</h3>
        {/* Uses a simple SVG arrow or character */}
        <ToggleButton isOpen={isOpen}>
          &#9660; {/* Down Arrow Character */}
        </ToggleButton>
      </QuestionRow>
      <AnswerText isOpen={isOpen}>
        <p>{item.answer}</p>
      </AnswerText>
    </FAQItem>
  );
};

const FAQSection = () => {
  // Track which ID is open. If null, all closed.
  const [openId, setOpenId] = useState(8); // Default open (ID 8) matches your screenshot

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <SectionWrapper>
      <Header>
        Frequently <span>Asked Questions</span>
      </Header>

      <FAQGrid>
        {/* Left Column */}
        <FAQColumn>
          {leftQuestions.map((q) => (
            <AccordionItem 
              key={q.id} 
              item={q} 
              isOpen={openId === q.id} 
              onClick={() => toggleFAQ(q.id)} 
            />
          ))}
        </FAQColumn>

        {/* Right Column */}
        <FAQColumn>
          {rightQuestions.map((q) => (
            <AccordionItem 
              key={q.id} 
              item={q} 
              isOpen={openId === q.id} 
              onClick={() => toggleFAQ(q.id)} 
            />
          ))}
        </FAQColumn>
      </FAQGrid>
    </SectionWrapper>
  );
};

export default FAQSection;