import React, { useState } from "react";
import { NavContainer, LoginBtn } from "./Navbar.styles";
// Update these import paths to where you moved your images
import iconImg from "../../assets/icon.png"; 
import shopImg from "../../assets/shop.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <NavContainer isOpen={isOpen}>
      <div className="logo">
        <img src={iconImg} alt="Logo" />
      </div>

      <div className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
        <span></span><span></span><span></span>
      </div>

      <ul className="nav-menu">
        <li><a href="#">Home</a></li>
        <li><a href="#">Courses</a></li>
        <li><a href="#">Workshops</a></li>
        <li><a href="#">Crash Courses</a></li>
      </ul>

      <div className="shop">
        <img src={shopImg} alt="Cart" />
        <LoginBtn>Log in</LoginBtn>
      </div>
    </NavContainer>
  );
};

export default Navbar;