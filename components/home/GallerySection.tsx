"use client";

import DomeGallery from "@/components/modules/dome-gallery/gallery";

export default function GallerySection() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 pb-40">
      <div className="relative w-full mb-8 text-center">
        <h2 className="text-7xl font-bold mb-4">Gallery</h2>
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
  );
}
