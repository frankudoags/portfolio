"use client";

import { ParallaxImage } from '@/components';
import { AboutHome, NameSection, Work } from '@/components/pages/Home'
import { useEffect } from 'react';
import { split } from "@/components/animations/text";


export default function Home() {
  useEffect(() => {
    split();
  }, []);
  return (
    <main className="">
      <NameSection />
      <ParallaxImage priority src="/images/frank-hero-1.JPG" alt="" />
      <AboutHome />
      <Work />
    </main>
  );
}
