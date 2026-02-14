"use client";

import MagicBento from "./components/magic-bento";
import { ReactLenis } from "lenis/react";
import { bentoItems } from "./data/items";

export default function Main() {
  return (
    <div className="relative flex h-screen w-full justify-center overflow-hidden">
      <ReactLenis
        root={false}
        options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}
        className="relative z-10 w-full h-screen overflow-y-auto scrollbar-hide"
      >
        <div className="w-full max-w-7xl mx-auto px-4 pt-24 pb-40">
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
      </ReactLenis>
    </div>
  );
}
