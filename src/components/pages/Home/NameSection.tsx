"use client";
import { gsap } from "gsap";
import { useEffect } from "react";

const NameSection = () => {
  const tl = gsap.timeline();


  const scrollToAbout = () => { 
    const about = document.getElementById("about");
    about?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-off-white text-black py-10 md:py-20  px-6 lg:px-16">
      <div className="mb-6 text-[2.5rem] md:text-[4rem] lg:text-[8rem] tracking-[-2px] lg:tracking-[-5px] leading-none font-semibold">
        <h1 id="header-text">Frank Udoags</h1>
        <h1>Software Engineer</h1>
      </div>
      <div className="font-semibold flex items-center justify-between text-[1.5rem] md:text-[2rem]">
        <h3>(Lagos, Nigeria)</h3>
        <div
          onClick={scrollToAbout}
          className="hidden md:block cursor-pointer">
          Scroll down
        </div>
      </div>
    </div>
  );
};

export default NameSection;
