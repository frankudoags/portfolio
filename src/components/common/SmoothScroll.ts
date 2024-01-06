"use client";

import * as React from "react";
import Lenis from "@studio-freight/lenis";
import {split} from "../animations/text"

const SmoothScroll = ({ children }: { children: React.ReactNode }) => {
  React.useEffect(() => {
    const lenis = new Lenis({ duration: 1.0 });
    split();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return children;
};

export default SmoothScroll;
