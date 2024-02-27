import React from "react";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.footerContent}>
        <div className={classes.footerText}>
          &copy; 2023 Project By{" "}
          <a
            href="https://nishant-portfolio-eight.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            NishantSahu1
          </a>
        </div>
        <div className={classes.footerLinks}>
          <a href="/profile" className={classes.footerLink}>
            Profile
          </a>

          <a href="/about" className={classes.footerLink}>
            About
          </a>
          <a href="/contact" className={classes.footerLink}>
            Contact Us
          </a>
        </div>
        <ul className={classes.footerIconsList}>
          <li>
            <a
              href="https://www.linkedin.com/in/nishant-sahu-398206228/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://img.icons8.com/ios-filled/50/000000/linkedin.png"
                alt="LinkedIn"
              />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Nishant2229"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://img.icons8.com/ios-filled/50/000000/github.png"
                alt="GitHub"
              />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
