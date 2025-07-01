import React from "react";
import {
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";
import { MdEmail, MdPhone } from "react-icons/md";

const Footer = () => {
  return (
    <div
      className="w-full bg-transparent text-gray-200 shadow-lg py-20 relative z-50"
      id="contacts"
    >
      <h1 className="text-[48px] md:text-[60px] font-semibold text-center w-full text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-12">
        Contact
      </h1>

      <div className="w-full flex flex-col items-center justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl w-full justify-items-center">
          {/* Contact Item */}
          {[
            {
              href: "https://github.com/PranavSJ1402",
              icon: <RxGithubLogo size={22} />,
              label: "GitHub",
            },
            {
              href: "https://linkedin.com/in/pranav-joshi-611838224",
              icon: <RxLinkedinLogo size={22} />,
              label: "LinkedIn",
            },
            {
              href: "https://mail.google.com/mail/?view=cm&fs=1&to=pranavsj02@gmail.com",
              icon: <MdEmail size={22} />,
              label: "pranavsj02@gmail.com",
            },
            {
              href: "tel:+918625801402",
              icon: <MdPhone size={22} />,
              label: "+91 8625801402",
            },
          ].map(({ href, icon, label }, i) => (
            <a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-[16px] text-gray-300 hover:text-white transition duration-300 transform hover:scale-105 hover:shadow-md"
            >
              {icon}
              <span>{label}</span>
            </a>
          ))}
        </div>

        <div className="mt-12 text-[14px] text-center text-gray-500">
          &copy; {new Date().getFullYear()} Developed by Pranav Joshi
        </div>
      </div>
    </div>
  );
};

export default Footer;
