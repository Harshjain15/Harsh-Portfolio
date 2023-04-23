import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Resume from "../assets/Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";


const Header = ({ setMenuOpen, menuOpen }) => {
  return (
    <>
      <nav>
        <NavContent setMenuOpen={setMenuOpen} />
      </nav>

      <button className="navBtn" onClick={() => setMenuOpen(!menuOpen)}>
        <AiOutlineMenu />
      </button>
    </>
  );
};

export const HeaderPhone = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={`navPhone ${menuOpen ? "navPhoneComes" : ""}`}>
      <NavContent setMenuOpen={setMenuOpen} />
    </div>
  );
};

const NavContent = ({ setMenuOpen }) => (
  <>
    <h2>Harsh.</h2>
    <div>
      <a onClick={() => setMenuOpen(false)} href="#home">
        Home
      </a>
      <a onClick={() => setMenuOpen(false)} href="#work">
        Project
      </a>
      <a onClick={() => setMenuOpen(false)} href="#timeline">
        Work
      </a>
      <a onClick={() => setMenuOpen(false)} href="#Skills">
        Skills
      </a>
      <a onClick={() => setMenuOpen(false)} href="#Certificate">
        Certificate
      </a>
      <a onClick={() => setMenuOpen(false)} href="#Hobbies">
        Hobbies
      </a>
      <a onClick={() => setMenuOpen(false)} href="#contact">
        Contact
      </a>
    </div>
    <a href="mailto:harsh.1jain2205@gmail.com">
      <button>Email</button>
    </a>
    <a href={Resume} download>
      <button><AiOutlineDownload /> Resume</button>
    </a>
  </>
);

export default Header;
