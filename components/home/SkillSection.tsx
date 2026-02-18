"use client";
import { JSX, useRef, useEffect, useState } from "react";
import { useScroll } from "motion/react";
import { projects } from "@/lib/constants";
import Card from "./SkillCard";

export default function SkillSection(): JSX.Element {
  const container = useRef(null);

  const [scrollContainer, setScrollContainer] = useState<
    React.RefObject<HTMLElement | null>
  >({ current: null });

  useEffect(() => {
    const el = container.current as HTMLElement | null;
    if (!el) return;

    let parent = el.parentElement;
    while (parent && parent !== document.body) {
      const overflowY = window.getComputedStyle(parent).overflowY;
      if (overflowY === "auto" || overflowY === "scroll") {
        setScrollContainer({ current: parent });
        return;
      }
      parent = parent.parentElement;
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: container,
    ...(scrollContainer.current
      ? { container: scrollContainer as React.RefObject<HTMLElement> }
      : {}),
    offset: ["start start", "end end"],
  });

  return (
    <section ref={container}>
      {projects.map((project, i) => {
        const targetScale = 1 - (projects.length - i) * 0.05;

        return (
          <Card
            key={project.title}
            i={i}
            url={project.link}
            src={project.src}
            title={project.title}
            color={project.color}
            description={project.description}
            progress={scrollYProgress}
            range={[i * (1 / projects.length), 1]}
            targetScale={targetScale}
            scrollContainer={scrollContainer}
          />
        );
      })}
    </section>
  );
}
