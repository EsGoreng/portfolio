"use client";

import MagicBento from "@/components/modules/bento-grid/bento-wrapper";
import { ReactLenis } from "lenis/react";
import { bentoItems } from "@/lib/constants";
import DomeGallery from "@/components/modules/dome-gallery/gallery";

export default function Main() {
  return (
    <div className="relative flex h-screen w-full justify-center overflow-hidden">
      <ReactLenis
        root={false}
        options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}
        className="relative z-10 w-full h-screen overflow-y-auto scrollbar-hide"
      >
        <div className="w-full max-w-7xl mx-auto px-4 pt-24 pb-40">
          <div className="relative w-full mb-8 text-center">
            <h2 className="text-6xl font-bold mb-4">Profile</h2>
          </div>
          <MagicBento
            items={bentoItems}
            textAutoHide={false}
            enableSpotlight={true}
            enableMagnetism={false}
            enableStars={false}
            glowColor="var(--bento-glow)"
            particleColor="var(--bento-glow)"
            className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 grid-flow-dense auto-rows-[minmax(180px,auto)]"
          />
        </div>

        <div className="w-full max-w-7xl mx-auto px-4 pb-40">
          <div className="relative w-full mb-8 text-center">
            <h2 className="text-6xl font-bold mb-4">Gallery</h2>
          </div>
          <div className="relative w-full h-150 md:h-200 rounded-2xl overflow-hidden border border-white/10 bg-background/30 backdrop-blur-md">
            <DomeGallery
              fit={0.8}
              minRadius={500}
              maxVerticalRotationDeg={5}
              segments={34}
              dragDampening={2}
              grayscale={false}
            />
          </div>
        </div>
      </ReactLenis>
    </div>
  );
}
