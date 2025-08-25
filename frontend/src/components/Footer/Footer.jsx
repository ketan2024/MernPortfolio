import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <Typography variant="h5">About Me</Typography>
        <Typography>
          Hey, I am Ketan Barahate, a Full-Stack Developer 
          and Social Media Content Creator focusing on Maharashtra politics.
        </Typography>

        <Link to="/contact" className="footerContactBtn">
          <Typography>Contact Us</Typography>
        </Link>
      </div>
      <div>
        <Typography variant="h6">Social Media</Typography>
        <a href="https://github.com/ketan2024" target="black">
          <BsGithub />
        </a>
        <a href="https://www.instagram.com/_ketan.04/?__pwa=1/" target="black">
          <BsInstagram />
        </a>
        <a href="www.linkedin.com/in/ketan-barahate-70830b201" target="black">
          <BsLinkedin />
        </a>
      </div>
    </div>
  );
};
export default Footer;
