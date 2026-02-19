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

export interface EducationItem {
  _id: string;
  institution: string;
  degree: string;
  period: string;
  location: string;
  desc: string;
  achievements: string[]; // Menggantikan responsibilities
}

const DUMMY_EDUCATION: EducationItem[] = [
  {
    _id: "edu-1",
    institution: "Universitas Telkom",
    degree: "S1 Sistem Informasi",
    period: "2024 - 2028",
    location: "Bandung, Indonesia",
    desc: "Focusing on Enterprise Resource Planning (ERP) and Data Analysis. Active member of the Information Systems Laboratory.",
    achievements: [
      "GPA: 3.85/4.00",
      "Head of UI/UX Division in Student Association",
      "Finalist in National Hackathon 2025",
    ],
  },
  {
    _id: "edu-2",
    institution: "MAN Darussalam",
    degree: "Social Science",
    period: "2021 - 2024",
    location: "Ciamis, Indonesia",
    desc: "Graduated with honors. Developed early interest in web technologies through extracurricular coding club.",
    achievements: [
      "Best Student Award 2023",
      "Lead Organizer of School Arts Festival",
      "Winner of Regional Debate Competition",
    ],
  },
  {
    _id: "edu-3",
    institution: "MAN Darussalam",
    degree: "Social Science",
    period: "2021 - 2024",
    location: "Ciamis, Indonesia",
    desc: "Graduated with honors. Developed early interest in web technologies through extracurricular coding club.",
    achievements: [
      "Best Student Award 2023",
      "Lead Organizer of School Arts Festival",
      "Winner of Regional Debate Competition",
    ],
  },
  {
    _id: "edu-4",
    institution: "MAN Darussalam",
    degree: "Social Science",
    period: "2021 - 2024",
    location: "Ciamis, Indonesia",
    desc: "Graduated with honors. Developed early interest in web technologies through extracurricular coding club.",
    achievements: [
      "Best Student Award 2023",
      "Lead Organizer of School Arts Festival",
      "Winner of Regional Debate Competition",
    ],
  },
];

interface EducationCardProps {
  data?: EducationItem[];
}

export const EducationCard = ({
  data = DUMMY_EDUCATION,
}: EducationCardProps) => {
  return (
    <div className="flex h-full w-full flex-col overflow-hidden relative backdrop-blur-sm bg-white/40 dark:bg-white/5 ">
      <h3 className="absolute z-25 left-6 top-6 flex items-center gap-2 text-2xl font-semibold tracking-tighter">
        Education
      </h3>

      <div className="relative flex-1 min-h-0">
        {/* Gradient Blur Mask di bagian atas */}
        <div
          className="absolute inset-x-0 top-0 z-20 h-20 backdrop-blur-xs"
          style={{
            maskImage:
              "linear-gradient(to bottom, black 0%, black 25%, rgba(0,0,0,0.5) 60%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black 0%, black 25%, rgba(0,0,0,0.5) 60%, transparent 100%)",
          }}
        />

        {/* Scrollable Area - Height disesuaikan dengan file asli (34vh) */}
        <div
          className="h-[34vh] overflow-y-auto px-6 scrollbar-hide"
          data-lenis-prevent
        >
          <div className="flex flex-col gap-3 pt-18 pb-8">
            {data.map((edu) => (
              <Dialog
                key={edu._id}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <DialogTrigger>
                  <div className="group relative flex flex-col p-4 rounded-lg hover:bg-accent/50 transition-colors cursor-pointer w-full text-left">
                    <div className="flex w-full items-start justify-between gap-2">
                      <div className="flex flex-col gap-1">
                        <DialogTitle className="text-sm font-bold text-foreground">
                          {edu.institution}
                        </DialogTitle>
                        <DialogSubtitle className="text-xs text-muted-foreground">
                          {edu.degree}
                        </DialogSubtitle>
                      </div>
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                        <Plus className="h-3.5 w-3.5" />
                      </div>
                    </div>

                    <div className="mt-2 flex items-center gap-3 text-[10px] text-muted-foreground/80 font-medium">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {edu.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {edu.location}
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
                          {edu.institution}
                        </DialogTitle>
                        <DialogSubtitle className="text-base font-medium text-muted-foreground">
                          {edu.degree} • {edu.location}
                        </DialogSubtitle>
                        <div className="text-sm text-muted-foreground/70">
                          {edu.period}
                        </div>
                      </div>

                      <DialogDescription className="text-sm leading-relaxed text-muted-foreground/90">
                        {edu.desc}
                      </DialogDescription>

                      {edu.achievements && (
                        <div className="space-y-2">
                          <h4 className="text-xs font-semibold uppercase tracking-wider">
                            Achievements & Activities
                          </h4>
                          <ul className="list-disc pl-5 space-y-1">
                            {edu.achievements.map((item, i) => (
                              <li
                                key={i}
                                className="text-sm text-muted-foreground"
                              >
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
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
