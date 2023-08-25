"use client";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";

const NameSection = () => {
  const tl = gsap.timeline();

  const scrollToAbout = () => {
    const about = document.getElementById("about");
    about?.scrollIntoView({ behavior: "smooth" });
  };

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const lines = gsap.utils.toArray("#header-text .child");
      gsap.set(lines, { autoAlpha: 1 });
      gsap.from(lines, {
        duration: 1.2,
        opacity: 0,
        yPercent: 100,
        ease: "power4.out",
        delay: 0.25,
        stagger: 0.15,
      });
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="bg-off-white text-black py-10 md:py-20  px-6 lg:px-16"
    >
      <div className="mb-6 text-[2.5rem] md:text-[4rem] lg:text-[8rem] tracking-[-2px] lg:tracking-[-5px] leading-none font-semibold">
        <h1 id="header-text" className="overflow-hidden md:pb-[10px]">
          <div className="child">
            <span>Frank Udoags</span>
          </div>
        </h1>
        <h1 id="header-text" className="overflow-hidden md:pb-[10px]">
          <div className="child">
            <span>Frontend Engineer</span>
          </div>
        </h1>
      </div>
      <div className="font-semibold flex items-center justify-between text-[1.5rem] md:text-[2rem]">
        <div
          onClick={scrollToAbout}
          className="hidden md:block cursor-pointer ml-auto"
        >
          Scroll down
        </div>
      </div>
    </div>
  );
};

export default NameSection;
