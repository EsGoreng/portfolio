"use client";

import { useRef } from "react";
import { useScroll } from "framer-motion"; // Pastikan install framer-motion: npm install framer-motion
import { ReactLenis } from "lenis/react";
import MagicBento from "@/components/modules/bento-grid/bento-wrapper";
import { bentoItems } from "@/lib/constants";
import DomeGallery from "@/components/modules/dome-gallery/gallery";
import { StackingCard } from "@/components/modules/portfolio/stacking-card";

const projects = [
  {
    title: "E-Commerce Dashboard",
    description:
      "A comprehensive dashboard for managing online stores, featuring real-time analytics, inventory management, and order tracking. Built with Next.js and Tailwind CSS.",
    src: "dashboard.jpg",
    link: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    color: "#BBACAF",
  },
  {
    title: "Travel App UI Kit",
    description:
      "A modern and clean UI kit for travel applications. Includes screens for booking flights, hotels, and exploring destinations. Designed to provide a seamless user experience.",
    src: "travel.jpg",
    link: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2621&auto=format&fit=crop",
    color: "#977F6D",
  },
  {
    title: "AI Image Generator",
    description:
      "An innovative tool that uses artificial intelligence to generate stunning images from text descriptions. Perfect for designers and content creators looking for inspiration.",
    src: "ai-gen.jpg",
    link: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2532&auto=format&fit=crop",
    color: "#C2491D",
  },
  {
    title: "Personal Finance Tracker",
    description:
      "Keep track of your expenses and income with this easy-to-use finance tracker. Features include budget setting, expense categorization, and visual reports.",
    src: "finance.jpg",
    link: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2626&auto=format&fit=crop",
    color: "#B62429",
  },
  {
    title: "Health & Fitness App",
    description:
      "Achieve your fitness goals with personalized workout plans and nutrition tracking. Connect with a community of fitness enthusiasts and stay motivated.",
    src: "fitness.jpg",
    link: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2670&auto=format&fit=crop",
    color: "#88A28D",
  },
];

export default function Main() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <div className="relative flex min-h-screen w-full justify-center overflow-x-hidden">
      <ReactLenis
        root={false}
        options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}
        className="relative z-10 w-full h-screen overflow-y-auto scrollbar-hide"
      >
        <div className="w-full max-w-7xl mx-auto px-4 pt-24 pb-40">
          <div className="relative w-full mb-8 text-center">
            <h2 className="text-7xl font-bold mb-4">Profile</h2>
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

        <div ref={container} className="relative w-full  pb-20">
          <div className="w-full max-w-7xl mx-auto px-4 pt-20">
            <div className="relative w-full mb-20 text-center sticky top-10">
              <h2 className="text-7xl font-bold mb-4">Portfolio</h2>
              <p className="text-gray-400">Scroll down to explore projects</p>
            </div>

            <div className="w-full ">
              {projects.map((project, i) => {
                const targetScale = 1 - (projects.length - i) * 0.05;
                return (
                  <StackingCard
                    key={`p_${i}`}
                    i={i}
                    url={project.link}
                    src={project.src}
                    title={project.title}
                    color={project.color}
                    description={project.description}
                    progress={scrollYProgress}
                    range={[i * 0.25, 1]}
                    targetScale={targetScale}
                  />
                );
              })}
            </div>
          </div>
        </div>

        <div className="h-[50vh] w-full bg-black flex items-center justify-center text-white/20">
          <p>End of Portfolio</p>
        </div>
      </ReactLenis>
    </div>
  );
}
