"use client";
import { ParallaxImage } from '@/components';
import { AboutHome, NameSection, Work } from '@/components/pages/Home'
import { useEffect } from 'react';
import { split } from '@/components/common/Split';


export default function Home() {
  useEffect(() => {
    split();
  }, []);
  return (
    <main className="">
      <NameSection />
      <ParallaxImage priority src="/images/man.webp" alt="" />
      <AboutHome />
      {/* <Work /> */}
    </main>
  );
}
