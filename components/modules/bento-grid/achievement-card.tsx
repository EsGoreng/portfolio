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
import { Trophy, Calendar, MapPin, X, Award } from "lucide-react";

export interface AchievementItem {
  _id: string;
  title: string;
  organizer: string;
  date: string;
  location: string;
  desc: string;
  category: string;
  tags: string[];
}

const DUMMY_ACHIEVEMENTS: AchievementItem[] = [
  {
    _id: "ach-1",
    title: "1st Place - National Web Design",
    organizer: "Ministry of Communication",
    date: "Nov 2023",
    location: "Jakarta",
    desc: "Won the first prize in a national level competition focusing on accessible and responsive web design for public services.",
    category: "Competition",
    tags: ["Web Design", "Accessibility", "UI/UX"],
  },
  {
    _id: "ach-2",
    title: "Best Innovation Award",
    organizer: "Tech Summit 2023",
    date: "Aug 2023",
    location: "Bandung",
    desc: "Recognized for creating an innovative solution for local waste management using IoT and a React Native mobile dashboard.",
    category: "Hackathon",
    tags: ["IoT", "Mobile App", "Innovation"],
  },
  {
    _id: "ach-3",
    title: "Google Cloud Certified Associate",
    organizer: "Google",
    date: "May 2023",
    location: "Online",
    desc: "Achieved certification demonstrating proficiency in deploying and maintaining cloud solutions on Google Cloud Platform.",
    category: "Certification",
    tags: ["Cloud", "GCP", "DevOps"],
  },
];

interface AchievementCardProps {
  data?: AchievementItem[];
}

export const AchievementCard = ({
  data = DUMMY_ACHIEVEMENTS,
}: AchievementCardProps) => {
  return (
    <div className="flex h-full w-full flex-col overflow-hidden relative">
      <h3 className="absolute z-25 left-6 top-6 flex items-center gap-2 text-2xl font-semibold tracking-tighter">
        Achievement
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
          className="h-[34vh] overflow-y-auto px-6 scrollbar-hide"
          data-lenis-prevent
        >
          <div className="flex flex-col gap-3 pt-18 pb-8">
            {data.map((item) => (
              <Dialog
                key={item._id}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <DialogTrigger>
                  <div className="group relative flex flex-col rounded-lg p-4 hover:bg-accent/50 transition-colors cursor-pointer w-full text-left">
                    <div className="flex w-full items-start justify-between gap-2">
                      <div className="flex flex-col gap-1">
                        <DialogTitle className="text-sm font-bold text-foreground">
                          {item.title}
                        </DialogTitle>
                        <DialogSubtitle className="text-xs text-muted-foreground">
                          {item.organizer}
                        </DialogSubtitle>
                      </div>
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                        <Trophy className="h-3.5 w-3.5" />
                      </div>
                    </div>

                    <div className="mt-2 flex items-center gap-3 text-[10px] text-muted-foreground/80 font-medium">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {item.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Award className="h-3 w-3" />
                        {item.category}
                      </span>
                    </div>
                  </div>
                </DialogTrigger>

                <DialogContainer className="grid place-items-center h-full">
                  <DialogContent className="pointer-events-auto relative flex h-auto w-full max-w-125 flex-col overflow-hidden border border-border bg-background rounded-xl shadow-2xl">
                    <div className="relative h-32 w-full bg-linear-to-br from-yellow-500/20 to-orange-500/20 p-6">
                      <DialogClose className="absolute right-4 top-4 rounded-full bg-background/50 p-1 text-foreground hover:bg-background">
                        <X className="h-4 w-4" />
                      </DialogClose>
                      <Trophy className="absolute bottom-6 left-6 h-12 w-12 text-yellow-600/50" />
                    </div>

                    <div className="flex flex-col p-6 gap-4">
                      <div className="space-y-1">
                        <DialogTitle className="text-2xl font-bold text-foreground">
                          {item.title}
                        </DialogTitle>
                        <DialogSubtitle className="text-base font-medium text-muted-foreground">
                          {item.organizer}
                        </DialogSubtitle>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground/70">
                          <span>{item.date}</span>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            {item.location}
                          </span>
                        </div>
                      </div>

                      <DialogDescription className="text-sm leading-relaxed text-muted-foreground/90">
                        {item.desc}
                      </DialogDescription>

                      <div className="flex flex-wrap gap-2 pt-2">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-[10px] font-medium"
                          >
                            {tag}
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
