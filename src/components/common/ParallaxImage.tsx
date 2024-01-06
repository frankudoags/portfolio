import * as React from "react";
import type { ImageProps } from "next/image";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type ParallaxImageProps = {} & ImageProps;

const ParallaxImage = (props: ParallaxImageProps) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const tl = gsap.timeline();

  React.useEffect(() => {
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
      <div ref={ref} className="lg:scale-[1.25]">
        <Image
          {...props}
          alt={props.alt}
          width={1680}
          height={800}
          // className="object-[0px,-50px]"
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
