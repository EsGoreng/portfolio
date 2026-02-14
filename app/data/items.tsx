import { ProfileCard } from "../components/bento-items/profile-card";
import { VelocityScrollCard } from "../components/bento-items/velocity-scroll-card";
import { HobbiesList } from "../components/bento-items/hobbies-list";
import { ExperienceList } from "../components/bento-items/experience-list";
import { EducationCard } from "../components/bento-items/education-card";
import { ReadingList } from "../components/bento-items/reading-list";
import { AchievementCard } from "../components/bento-items/achievement-card";

export interface BentoItem {
  className: string;
  children: React.ReactNode;
}

const size = {
  normal: "col-span-1 row-span-1",
  wide: "col-span-1 md:col-span-2 row-span-1",
  tall: "col-span-1 row-span-2",
  big: "col-span-1 md:col-span-2 row-span-2",
};

export const bentoItems: BentoItem[] = [
  {
    className: `${size.normal} min-h-[300px]`,
    children: <ProfileCard />,
  },
  {
    className: size.wide,
    children: <VelocityScrollCard />,
  },
  {
    className: size.normal,
    children: <HobbiesList />,
  },
  {
    className: `${size.big} max-h-[70vh]`,
    children: <ExperienceList />,
  },
  {
    className: size.normal,
    children: <EducationCard />,
  },
  {
    className: size.normal,
    children: <ReadingList />,
  },
  {
    className: size.wide,
    children: <AchievementCard />,
  },
];
