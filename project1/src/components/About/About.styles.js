import styled from "styled-components";

export const AboutWrapper = styled.div`
  padding: 60px 20px;
  background: white;

  /* Top Section (Symbol of Excellence) */
  .main-about {
    text-align: center;
    max-width: 1000px;
    margin: 0 auto 60px;
  }
  
  .main-title {
    font-size: 2.5rem;
    font-weight: 700; /* Made bolder */
    margin-bottom: 20px;
    color: #000; /* Fixed to black */
  }
  
  .main-para {
    color: #555;
    line-height: 1.8;
    font-size: 1.1rem;
    max-width: 800px;
    margin: 0 auto;
  }

  /* --- VISION & MISSION CONTAINER --- */
  .vm-container {
    display: flex;
    justify-content: space-evenly;
    align-items: flex-start;
    gap: 50px;
    max-width: 1200px;
    margin: 0 auto;
    text-align: left; /* Aligns text to the left */
  }

  .vm-box {
    flex: 1;
  }

  .vm-title {
    font-size: 1.8rem;
    font-weight: bold;
    padding-left: 15px;
    margin-bottom: 15px;
  }

  /* The fix: Target the Paragraph explicitly */
  .vm-box p {
    color: #444;       /* Dark grey so it's visible */
    font-size: 1rem;
    line-height: 1.6;
    margin: 0;
  }

  /* Specific Colors */
  .vision .vm-title {
    color: #fca311;
    border-left: 5px solid #fca311;
  }

  .mission .vm-title {
    color: #007bff;
    border-left: 5px solid #007bff;
  }

  .divider {
    width: 2px;
    background-color: #e0e0e0;
    align-self: stretch;
  }

  @media (max-width: 900px) {
    .vm-container {
      flex-direction: column;
    }
    .divider {
      display: none;
    }
  }
`;