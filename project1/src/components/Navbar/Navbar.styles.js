import styled from "styled-components";

export const NavContainer = styled.nav`
  position: sticky;
  top: 0;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  z-index: 1000;
  box-shadow: 0 2px 5px rgba(0,0,0,0.05);

  .logo img { height: 60px; cursor: pointer; }
  .shop { display: flex; align-items: center; gap: 15px; }
  .shop img { height: 60px; cursor: pointer; }

  /* Mobile Logic */
  .menu-toggle { display: none; cursor: pointer; flex-direction: column; gap: 5px; }
  .menu-toggle span { width: 25px; height: 3px; background: #333; }
  
  .nav-menu { display: flex; list-style: none; gap: 20px; }
  .nav-menu a { text-decoration: none; color: black; font-weight: 500; }
  .nav-menu a:hover { color: red; }

  @media (max-width: 768px) {
    .menu-toggle { display: flex; }
    .shop { display: none; } /* Hides shop on mobile per your code */
    
    .nav-menu {
      position: absolute;
      top: 100%; left: 0; right: 0;
      background: white;
      flex-direction: column;
      align-items: center;
      padding: 20px;
      display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
      box-shadow: 0 5px 10px rgba(0,0,0,0.1);
    }
  }
`;

export const LoginBtn = styled.button`
  background-color: #f0f0f0;
  border: none;
  padding: 8px 20px;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  &:hover { background-color: #e0e0e0; }
`;
