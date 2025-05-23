/* eslint-disable @next/next/no-img-element */
"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type ParallaxImageProps = {
  src: string;
  alt?: string;
  className?: string;
  priority?: boolean;
};

const ParallaxImage = (props: ParallaxImageProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const tl = gsap.timeline();

  useEffect(() => {
    tl.to(ref.current, {
      scrollTrigger: {
        scrub: 1,
        trigger: containerRef.current,
        start: "top 450px",
      },
      scale: 1,
    });
    // if the container width is less than 768px, don't animate
    if (window.innerWidth > 768) {
      tl.to(ref.current, {
        scrollTrigger: {
          scrub: true,
          trigger: containerRef.current,
          start: "300px 300px",
        },
        y: 300,
      });
    }
  });

  return (
    <div
      ref={containerRef}
      className="image_container h-50vh lg:h-[90vh] overflow-hidden lg:overflow-clip relative"
    >
      <div ref={ref} className="">
        <img
          {...props}
          src={props.src}
          className={`object-cover w-full h-full ${props.className}`}
          alt={props.alt ?? ""}
        />
        <div
          style={{ backgroundSize: "150px 150px" }}
          className="bg-[url(/images/noise.png)] bg-repeat absolute h-full w-full top-0 opacity-50 border"
        ></div>
      </div>
    </div>
  );
};

export default ParallaxImage;
