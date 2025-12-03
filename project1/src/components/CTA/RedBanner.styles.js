import styled from "styled-components";

export const BannerWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 60px 20px;
  background-color: white;

  .red-pill {
    background-color: #ff2a4a;
    color: white;
    width: 100%;
    max-width: 1100px;
    padding: 50px 30px;
    border-radius: 100px;
    text-align: center;
    box-shadow: 0 10px 25px rgba(255, 42, 74, 0.3);
  }

  h2 { color: white; font-size: 2.2rem; margin-bottom: 15px; }
  p { font-size: 1.1rem; max-width: 800px; margin: 0 auto; font-style: italic; }

  @media (max-width: 768px) {
    .red-pill { border-radius: 30px; }
  }
`;
