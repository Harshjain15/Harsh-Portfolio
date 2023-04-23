import React from "react";
import Footer_image from "../assets/footer_image.jpg";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineArrowUp,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src={Footer_image}
          alt="Founder"
        />

        <h2>Harsh Jain</h2>
        <p>To be the Best, You Must be able to handle the Worst.</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          <a href="https://www.linkedin.com/in/harsh-jain-8947b6212/" target={"blank"}>
            <AiFillLinkedin />
          </a>
          <a href="https://instagram.com/_.jainharsh_" target={"blank"}>
            <AiFillInstagram />
          </a>
          <a href="https://github.com/Harshjain15" target={"blank"}>
            <AiFillGithub />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;
