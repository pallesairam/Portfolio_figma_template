import React from "react";
import InstagramIcon from "../assets/icons/instagram.svg";
import LinkedinIcon from "../assets/icons/linkedin.svg";
import DribbbleIcon from "../assets/icons/dribbble.svg";
import BehanceIcon from "../assets/icons/behance.svg";
import EmailIcon from "../assets/icons/email.svg";
import PhoneIcon from "../assets/icons/phone.svg";

const Footer = () => {
  return (
    <footer className="bg-zinc-900 border-t border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="font-['K2D'] text-3xl font-bold bg-gradient-to-r from-[#FA6E00] to-[#E60026] bg-clip-text text-transparent mb-8">
            LOGO
          </div>
          <ul className="flex flex-wrap justify-center gap-6 md:gap-12 mb-8">
            <li>
              <a
                href="#home"
                className="text-gray-400 hover:text-orange-500 transition text-sm"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="text-gray-400 hover:text-orange-500 transition text-sm"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-gray-400 hover:text-orange-500 transition text-sm"
              >
                About me
              </a>
            </li>
            <li>
              <a
                href="#portfolio"
                className="text-gray-400 hover:text-orange-500 transition text-sm"
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-gray-400 hover:text-orange-500 transition text-sm"
              >
                Contact me
              </a>
            </li>
          </ul>
          <div className="flex flex-row items-end gap-5 py-4">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition"
            >
              <img src={InstagramIcon} alt="Instagram" className="w-8 h-8" />
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition"
            >
              <img src={LinkedinIcon} alt="LinkedIn" className="w-8 h-8" />
            </a>

            <a
              href="https://dribbble.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition"
            >
              <img src={DribbbleIcon} alt="Dribbble" className="w-8 h-8" />
            </a>

            <a
              href="https://www.behance.net/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition"
            >
              <img src={BehanceIcon} alt="Behance" className="w-8 h-8" />
            </a>
          </div>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-gray-400 text-sm mb-6">
            <a
              href="mailto:Mahmood.fazile7005@gmail.com"
              className="flex items-center gap-2 hover:text-orange-500 transition"
            >
              <img src={EmailIcon} alt="Email" className="w-4 h-4" />
              <span>Mahmood.fazile7005@gmail.com</span>
            </a>
            <a
              href="tel:+93729107005"
              className="flex items-center gap-2 hover:text-orange-500 transition"
            >
              <img src={PhoneIcon} alt="Phone" className="w-4 h-4" />
              <span>+93 729 107 005</span>
            </a>
          </div>
          <div className="w-full border-t-2 border-gray-800 mb-6"></div>
          <div className="text-center">
            <p className="text-gray-400 text-sm">
              Designed by <span className="text-gray-300">@mahmood.fazile</span>{" "}
              UI/UX designer
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
