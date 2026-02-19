"use client";

import MagicBento from "@/components/modules/bento-grid/bento-wrapper";
import { profileItems } from "@/lib/profile-items";

export default function ProfileSection() {
  return (
    <>
      <div className=" flex  justify-center items-center min-h-screen w-full">
        <h1 className="text-7xl tracking-tighter">Profile</h1>
      </div>
      <div className="w-full max-w-7xl mx-auto px-4 pt-8 pb-4">
        <MagicBento
          items={profileItems}
          textAutoHide={false}
          enableSpotlight={false}
          enableMagnetism={false}
          enableStars={false}
          glowColor="var(--bento-glow)"
          particleColor="var(--bento-glow)"
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 grid-flow-dense auto-rows-[minmax(180px,auto)]"
        />
      </div>
    </>
  );
}
