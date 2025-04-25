"use client";
import { gsap } from "gsap";
import { useLayoutEffect, useRef } from "react";

const NameSection = () => {

  const containerRef = useRef<HTMLDivElement>(null);

  
  useLayoutEffect(() => {
    if (containerRef.current) {
      const lines = gsap.utils.toArray("#header-text .child");
      gsap.set(lines, { autoAlpha: 1 });
      gsap.from(lines, {
        duration: 1.2,
        opacity: 0,
        yPercent: 100,
        ease: "power4.out",
        delay: 0.5,
        stagger: 0.5,
      });
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="bg-off-white text-black py-16 md:py-20 px-6 lg:px-16"
    >
      <div className="mb-6 text-[2.5rem] md:text-[4rem] lg:text-[8rem] tracking-[-2px] lg:tracking-[-5px] leading-none font-semibold">
        <h1 id="header-text" className="overflow-hidden pb-[10px]">
          <div className="child">
            <span>Frank Udoags</span>
          </div>
        </h1>
        <h1 id="header-text" className="overflow-hidden md:pb-[10px]">
          <div className="child">
            <span>Software Engineer</span>
          </div>
        </h1>
      </div>
      <div className="font-semibold flex items-center justify-between text-[1.5rem] md:text-[2rem]">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://docs.google.com/document/d/1zV2RDlZF85oTo-PIbuQZQfr0uOpN51yc"
          className="hidden md:flex items-center gap-2 cursor-pointer ml-auto"
        >
          Resume
          <ArrowUpRight />
        </a>
      </div>
    </div>
  );
};

export default NameSection;


const ArrowUpRight = () => (
  <svg
    
    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
  </svg>

)