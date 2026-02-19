"use client";
import { JSX, useRef, useEffect, useState } from "react";
import { useScroll } from "motion/react";
import { skills } from "@/lib/skill-items";
import Card from "./SkillCard";

export default function skillection(): JSX.Element {
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
      {skills.map((skill, i) => {
        const targetScale = 1 - (skills.length - i) * 0.05;

        return (
          <Card
            key={skill.title}
            i={i}
            url={skill.link}
            src={skill.src}
            title={skill.title}
            color={skill.color}
            description={skill.description}
            progress={scrollYProgress}
            range={[i * (1 / skills.length), 1]}
            targetScale={targetScale}
            scrollContainer={scrollContainer}
          />
        );
      })}
    </section>
  );
}
