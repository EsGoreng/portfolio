"use client";
import React, { useRef } from "react";
import { useTransform, motion, useScroll, MotionValue } from "motion/react";

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
  scrollContainer: React.RefObject<HTMLElement | null>;
}

const Card: React.FC<CardProps> = ({
  i,
  title,
  description,
  url,
  color,
  progress,
  range,
  targetScale,
  scrollContainer,
}) => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    ...(scrollContainer.current
      ? { container: scrollContainer as React.RefObject<HTMLElement> }
      : {}),
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.4, 1]);
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
        className="relative flex flex-col md:flex-row gap-6 w-full max-w-5xl rounded-3xl p-8 md:p-12 overflow-hidden shadow-xl min-h-125 origin-top"
      >
        <div className="flex flex-col justify-between w-full md:w-1/2 h-full z-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              {title}
            </h2>
            <p className="text-base md:text-lg text-slate-800 leading-relaxed font-medium">
              {description}
            </p>
          </div>

          <div className="mt-8">
            <a
              href="#"
              target="_blank"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-950 text-white font-semibold text-sm hover:bg-slate-800 transition-colors"
            >
              View Project
              <svg
                width="18"
                height="10"
                viewBox="0 0 22 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989592 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM0 6.75L21 6.75V5.25L0 5.25L0 6.75Z"
                  fill="white"
                />
              </svg>
            </a>
          </div>
        </div>

        <div className="relative w-full md:w-1/2 h-64 md:h-auto rounded-2xl overflow-hidden shadow-inner">
          <motion.div className="w-full h-full" style={{ scale: imageScale }}>
            <img src={url} alt={title} className="w-full h-full object-cover" />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
