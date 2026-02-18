"use client";

import { ReactLenis } from "lenis/react";
import ProfileSection from "@/components/home/ProfileSection";
import SkillSection from "@/components/home/SkillSection";
import CarouselSection from "@/components/home/CarouselSection";
import BlogSection from "@/components/home/BlogSection";

export default function Main() {
  return (
    <div className="relative flex min-h-screen w-full justify-center items-center overflow-x-hidden">
      <ReactLenis
        root={false}
        options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}
        className="relative z-10 w-full h-screen overflow-y-auto scrollbar-hide"
      >
        <ProfileSection />
        <CarouselSection />
        <SkillSection />
        <BlogSection />
      </ReactLenis>
    </div>
  );
}
