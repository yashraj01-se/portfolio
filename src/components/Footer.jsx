import React from "react";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import git from "../assets/img/icons8-github.svg"
import leet from "../assets/img/icon.png"


const Footer = () => {
  return (
    <footer className="relative  py-10 lg:py-20 text-white">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="flex flex-wrap justify-between">

          {/* Logo & About Section */}
          <div className="w-full sm:w-2/3 lg:w-3/12 mb-8">
            <a href="/" className="mb-6 inline-block">
              <img src={logo} alt="logo" className="h-12" />
            </a>
            <p className="text-sm text-gray-400 leading-relaxed">
              Thank you for visiting my portfolio! If you would like to collaborate or have any inquiries, feel free to reach out. Let's create something amazing together!
            </p>
            <p className="flex items-center mt-4 text-sm font-medium text-white">
              <span className="mr-3 text-primary">
                
              </span>
              <span style={{color:"gray"}}>yashsharma000098@gmail.com</span>
            </p>
          </div>

         {/* Social Media Links */}
<div className="w-full sm:w-1/2 lg:w-3/12 mb-8 flex flex-col items-center lg:items-start text-center lg:text-left">
 
<div className="flex justify-center lg:justify-start space-x-16 my-2">

    <a href="https://www.linkedin.com/in/yashraj-sharma-61027a2aa/" className="social-icon mx-2"  ><img src={navIcon1} alt="LinkedIn" /></a>
    <a href="https://github.com/yashraj01-se" className="social-icon mx-2"><img src={git} alt="github" /></a>
    <a href="https://leetcode.com/u/yashrajsharma14/" className="social-icon mx-2"><img src={leet} alt="leetcode" /></a>
  </div>
  
  <p className="text-sm text-gray-500 mx-2 my-1 ">@2025 YASHRAJ SHARMA</p>
</div>


        </div>
      </div>

      {/* Background Shapes */}
      <div>
        <span className="absolute bottom-0 left-0">
          <svg width={217} height={229} viewBox="0 0 217 229" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M-64 140.5C-64 62.904 -1.096 1.90666e-05 76.5 1.22829e-05C154.096 5.49924e-06 217 62.904 217 140.5C217 218.096 154.096 281 76.5 281C-1.09598 281 -64 218.096 -64 140.5Z"
              fill="url(#paint0_linear_1179_5)" />
            <defs>
              <linearGradient id="paint0_linear_1179_5" x1="76.5" y1={281} x2="76.5" y2="1.22829e-05" gradientUnits="userSpaceOnUse">
                <stop stopColor="#3056D3" stopOpacity="0.08" />
                <stop offset={1} stopColor="#C4C4C4" stopOpacity={0} />
              </linearGradient>
            </defs>
          </svg>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
