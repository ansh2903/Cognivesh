import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <>
      <nav>
        <h3>COGNIVESH</h3>
        <input type="text" placeholder="What are you looking for today ?"/>
        <img src="./src\assets\hamburger.png" alt="hamIcon"/>
      </nav>
    </>
  );
};

export default Navbar;
