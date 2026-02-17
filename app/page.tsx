"use client";

import { ReactLenis } from "lenis/react";
import ProfileSection from "@/components/home/ProfileSection";
import GallerySection from "@/components/home/GallerySection";
import PortfolioSection from "@/components/home/PortfolioSection";

export default function Main() {
  return (
    <div className="relative flex min-h-screen w-full justify-center overflow-x-hidden">
      <ReactLenis
        root={false}
        options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}
        className="relative z-10 w-full h-screen overflow-y-auto scrollbar-hide"
      >
        <ProfileSection />
        <GallerySection />
        <PortfolioSection />

        <div className="h-[50vh] w-full bg-black flex items-center justify-center text-white/20">
          <p>End of Portfolio</p>
        </div>
      </ReactLenis>
    </div>
  );
}
