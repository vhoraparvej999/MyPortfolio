import React from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="text-white border-t border-gray-600 pt-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Parvej. All rights reserved.
          </p>

          <div className="text-white flex space-x-4 my-4  md:my-0">
            <a
              href="https://x.com/i/flow/login?redirect_after_login=%2Fvhoraparvej99"
              target="_blank"
              className="text-gray-400 hover:text-white"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.linkedin.com/in/parvej-vahora-a2929624b"
              target="_blank"
              className="text-gray-400 hover:text-white"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/vahoraparvej2993?utm_source=qr&igsh=OWE0YXY5YXVkcnAz"
              target="_blank"
              className="text-gray-400 hover:text-white"
            >
              <FaInstagram />
            </a>
            <a
              href="https://github.com/vhoraparvej999"
              target="_blank"
              className="text-gray-400 hover:text-white"
            >
              <FaGithub />
            </a>
          </div>

          <div className="flex space-x-4">
            <a
              href=""
              target="_blank"
              className="text-gray-400 hover:text-white"
            >
              Privacy
            </a>
            <a
              href=""
              target="_blank"
              className="text-gray-400 hover:text-white"
            >
              Terms Of Services
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
