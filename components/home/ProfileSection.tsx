"use client";

import MagicBento from "@/components/modules/bento-grid/bento-wrapper";
import { bentoItems } from "@/lib/constants";

export default function ProfileSection() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 pt-24 pb-40">
      <div className="relative w-full mb-8 text-center">
        <h2 className="text-7xl font-bold mb-4">Profile</h2>
      </div>
      <MagicBento
        items={bentoItems}
        textAutoHide={false}
        enableSpotlight={false}
        enableMagnetism={false}
        enableStars={false}
        glowColor="var(--bento-glow)"
        particleColor="var(--bento-glow)"
        className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 grid-flow-dense auto-rows-[minmax(180px,auto)]"
      />
    </div>
  );
}
