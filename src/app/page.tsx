"use client";
import { ParallaxImage } from '@/components';
import { AboutHome, NameSection, Work } from '@/components/pages/Home'


export default function Home() {
  return (
    <main className="">
      <NameSection />
      <ParallaxImage priority src="/images/man.webp" alt="" />
      <AboutHome />
      <Work />
    </main>
  );
}
