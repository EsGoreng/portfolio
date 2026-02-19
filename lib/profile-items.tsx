import { ProfileCard } from "@/components/modules/bento-grid/profile-card";
import { AboutCard } from "@/components/modules/bento-grid/about-card";
import { Spinning } from "@/components/modules/bento-grid/spinning";
import { ExperienceList } from "@/components/modules/bento-grid/experience-list";
import { EducationCard } from "@/components/modules/bento-grid/education-card";
import { RandomImage } from "@/components/modules/bento-grid/random-image";
import { AchievementCard } from "@/components/modules/bento-grid/achievement-card";

export interface ProfileItem {
  className: string;
  children: React.ReactNode;
}

const size = {
  normal: "col-span-1 row-span-1",
  wide: "col-span-1 md:col-span-2 row-span-1",
  tall: "col-span-1 row-span-2",
  big: "col-span-1 md:col-span-2 row-span-2",
};

export const profileItems: ProfileItem[] = [
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
