// components/wrappers/ScrollWrapper.tsx
"use client";

import { ReactLenis } from "lenis/react";

export default function ScrollWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex min-h-screen w-full justify-center items-center overflow-x-hidden">
      <ReactLenis
        root={false}
        options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}
        className="relative z-10 w-full h-screen overflow-y-auto scrollbar-hide"
      >
        {children}
      </ReactLenis>
    </div>
  );
}
