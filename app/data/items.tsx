import { ProfileCard } from "../components/bento-items/profile-card";
import { AboutCard } from "../components/bento-items/about-card";
import { Spinning } from "../components/bento-items/spinning";
import { ExperienceList } from "../components/bento-items/experience-list";
import { EducationCard } from "../components/bento-items/education-card";
import { RandomImage } from "../components/bento-items/random-image";
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
    className: size.normal,
    children: <ProfileCard />,
  },
  {
    className: size.wide,
    children: <AboutCard />,
  },
  {
    className: size.normal,
    children: <Spinning />,
  },
  {
    className: size.big,
    children: <ExperienceList />,
  },
  {
    className: size.normal,
    children: <EducationCard />,
  },
  {
    className: size.normal,
    children: <RandomImage />,
  },
  {
    className: size.wide,
    children: <AchievementCard />,
  },
];
