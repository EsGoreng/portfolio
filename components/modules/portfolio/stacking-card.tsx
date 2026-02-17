"use client";

import { useTransform, motion, useScroll, MotionValue } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

interface CardProps {
  i: number;
  title: string;
  description: string;
  src: string;
  url: string;
  color: string;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}

export const StackingCard: React.FC<CardProps> = ({
  i,
  title,
  description,
  url,
  color,
  progress,
  range,
  targetScale,
}) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0"
    >
      <motion.div
        style={{
          backgroundColor: color,
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className="flex flex-col relative -top-[25%] h-[450px] w-[90%] md:w-[70%] rounded-xl p-4 md:p-10 origin-top shadow-2xl border border-white/10"
      >
        <h2 className="text-2xl text-center font-bold text-gray-900 mb-4">
          {title}
        </h2>
        <div className="flex flex-col md:flex-row h-full gap-4 md:gap-10">
          <div className="w-full md:w-[40%] relative md:top-[10%] order-2 md:order-1">
            <p className="text-sm text-gray-700 leading-relaxed">
              {description}
            </p>
            <span className="flex items-center gap-2 pt-4">
              <a
                href="#"
                target="_blank"
                className="underline cursor-pointer font-medium text-black hover:text-gray-600 transition-colors"
              >
                See more
              </a>
              <svg
                width="22"
                height="12"
                viewBox="0 0 22 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989592 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM0 6.75L21 6.75V5.25L0 5.25L0 6.75Z"
                  fill="black"
                />
              </svg>
            </span>
          </div>

          <div className="relative w-full md:w-[60%] h-[200px] md:h-full rounded-lg overflow-hidden order-1 md:order-2">
            <motion.div className="w-full h-full" style={{ scale: imageScale }}>
              <Image
                fill
                src={url}
                alt="project image"
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
