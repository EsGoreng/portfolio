"use client";

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogSubtitle,
  DialogClose,
  DialogDescription,
  DialogContainer,
} from "@/components/ui/linear-modal";
import { Plus, Calendar, MapPin, X } from "lucide-react";

export interface ExperienceItem {
  _id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  desc: string;
  responsibilities: string[];
  technologies: string[];
}

const DUMMY_EXPERIENCES: ExperienceItem[] = [
  {
    _id: "item-1",
    role: "Senior Frontend Developer",
    company: "Tech Unicorn Inc.",
    period: "Jan 2024 - Present",
    location: "Remote",
    desc: "Leading the frontend architecture migration from Pages Router to App Router and improving core web vitals.",
    responsibilities: [
      "Developing an atomic design-based system",
      "Mentoring 3 junior developers",
      "Optimizing React rendering performance by 40%",
    ],
    technologies: ["Next.js 14", "TypeScript", "Tailwind", "Zustand"],
  },
  {
    _id: "item-2",
    role: "Software Engineer",
    company: "Creative Agency",
    period: "Aug 2022 - Dec 2023",
    location: "Jakarta, Indonesia",
    desc: "Developing interactive websites for corporate clients focusing on animations and micro-interactions.",
    responsibilities: [
      "Slicing design from Figma to pixel-perfect React",
      "Integrating Headless CMS (Sanity) for 5+ projects",
      "Setting up CI/CD pipeline using GitHub Actions",
    ],
    technologies: ["React", "GSAP", "Framer Motion", "Sanity"],
  },
  {
    _id: "item-3",
    role: "Frontend Intern",
    company: "StartUp Maju",
    period: "Jan 2022 - Jul 2022",
    location: "Bandung, Indonesia",
    desc: "Learning modern web development best practices and contributing to admin dashboard features.",
    responsibilities: [
      "Bug fixing on reporting modules",
      "Refactoring class components to functional components",
      "Unit testing using Jest",
    ],
    technologies: ["Vue.js", "Jest", "SASS"],
  },
  {
    _id: "item-4",
    role: "Frontend Intern",
    company: "StartUp Maju",
    period: "Jan 2022 - Jul 2022",
    location: "Bandung, Indonesia",
    desc: "Learning modern web development best practices and contributing to admin dashboard features.",
    responsibilities: [
      "Bug fixing on reporting modules",
      "Refactoring class components to functional components",
      "Unit testing using Jest",
    ],
    technologies: ["Vue.js", "Jest", "SASS"],
  },
  {
    _id: "item-5",
    role: "Frontend Intern",
    company: "StartUp Maju",
    period: "Jan 2022 - Jul 2022",
    location: "Bandung, Indonesia",
    desc: "Learning modern web development best practices and contributing to admin dashboard features.",
    responsibilities: [
      "Bug fixing on reporting modules",
      "Refactoring class components to functional components",
      "Unit testing using Jest",
    ],
    technologies: ["Vue.js", "Jest", "SASS"],
  },
  {
    _id: "item-6",
    role: "Frontend Intern",
    company: "StartUp Maju",
    period: "Jan 2022 - Jul 2022",
    location: "Bandung, Indonesia",
    desc: "Learning modern web development best practices and contributing to admin dashboard features.",
    responsibilities: [
      "Bug fixing on reporting modules",
      "Refactoring class components to functional components",
      "Unit testing using Jest",
    ],
    technologies: ["Vue.js", "Jest", "SASS"],
  },
];

interface ExperienceListProps {
  data?: ExperienceItem[];
}

export const ExperienceList = ({
  data = DUMMY_EXPERIENCES,
}: ExperienceListProps) => {
  return (
    <div className="flex h-full w-full flex-col overflow-hidden relative backdrop-blur-sm bg-white/40 dark:bg-white/5 ">
      <h3 className="absolute z-25 left-6 top-6 flex items-center gap-2 text-2xl font-semibold tracking-tighter">
        Experience
      </h3>

      <div className="relative flex-1 min-h-0">
        <div
          className="absolute inset-x-0 top-0 z-20 h-20 backdrop-blur-xs"
          style={{
            maskImage:
              "linear-gradient(to bottom, black 0%, black 25%, rgba(0,0,0,0.5) 60%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black 0%, black 25%, rgba(0,0,0,0.5) 60%, transparent 100%)",
          }}
        />

        <div
          className="h-[70vh] overflow-y-auto px-6 scrollbar-hide"
          data-lenis-prevent
        >
          <div className="flex flex-col gap-3 pt-18 pb-8">
            {data.map((job) => (
              <Dialog
                key={job._id}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <DialogTrigger>
                  <div className="group relative flex flex-col p-4 rounded-lg hover:bg-accent/50 transition-colors cursor-pointer w-full text-left">
                    <div className="flex w-full items-start justify-between gap-2">
                      <div className="flex flex-col gap-1">
                        <DialogTitle className="text-sm font-bold text-foreground">
                          {job.role}
                        </DialogTitle>
                        <DialogSubtitle className="text-xs text-muted-foreground">
                          {job.company}
                        </DialogSubtitle>
                      </div>
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                        <Plus className="h-3.5 w-3.5" />
                      </div>
                    </div>

                    <div className="mt-2 flex items-center gap-3 text-[10px] text-muted-foreground/80 font-medium">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {job.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {job.location}
                      </span>
                    </div>
                  </div>
                </DialogTrigger>

                <DialogContainer className="grid place-items-center h-full">
                  <DialogContent className="pointer-events-auto relative flex h-auto w-full max-w-125 flex-col overflow-hidden border border-border bg-background rounded-xl shadow-2xl">
                    <div className="relative h-32 w-full bg-linear-to-br from-primary/20 to-secondary/20 p-6">
                      <DialogClose className="absolute right-4 top-4 rounded-full bg-background/50 p-1 text-foreground hover:bg-background">
                        <X className="h-4 w-4" />
                      </DialogClose>
                    </div>

                    <div className="flex flex-col p-6 gap-4">
                      <div className="space-y-1">
                        <DialogTitle className="text-2xl font-bold text-foreground">
                          {job.role}
                        </DialogTitle>
                        <DialogSubtitle className="text-base font-medium text-muted-foreground">
                          {job.company} • {job.location}
                        </DialogSubtitle>
                        <div className="text-sm text-muted-foreground/70">
                          {job.period}
                        </div>
                      </div>

                      <DialogDescription className="text-sm leading-relaxed text-muted-foreground/90">
                        {job.desc}
                      </DialogDescription>

                      {job.responsibilities && (
                        <div className="space-y-2">
                          <h4 className="text-xs font-semibold uppercase tracking-wider">
                            Responsibilities
                          </h4>
                          <ul className="list-disc pl-5 space-y-1">
                            {job.responsibilities.map((res, i) => (
                              <li
                                key={i}
                                className="text-sm text-muted-foreground"
                              >
                                {res}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      <div className="flex flex-wrap gap-2 pt-2">
                        {job.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-[10px] font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </DialogContent>
                </DialogContainer>
              </Dialog>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
