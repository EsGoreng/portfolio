import { ProgressiveBlur } from "@/components/ui/progressive-blur";
import {
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from "@/components/ui/scroll-based-velocity";

import { TelkomLogo } from "../components/icons/TelkomLogo";

export interface BentoItem {
  className: string;
  children: React.ReactNode;
}

export const bentoItems: BentoItem[] = [
  {
    className:
      "lg:col-start-1 lg:col-span-1 lg:row-start-1 lg:row-span-2 min-h-[300px]",
    children: (
      <div className="group relative h-full w-full overflow-hidden rounded-4xl bg-gray-900">
        <img
          src="https://images.unsplash.com/photo-1745870297558-367a83462926?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Profile"
          className="absolute inset-0 z-0 h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
        />

        <ProgressiveBlur height="50%" />

        <div className="relative z-30 flex h-full flex-col justify-end p-5 transition-transform duration-300 ease-out group-hover:-translate-y-2">
          <div className="flex items-center gap-1.5 mb-1">
            <h3 className="text-lg font-bold text-white tracking-tight">
              Sophie Bennett
            </h3>
          </div>

          <p className="text-xs font-medium text-gray-300 leading-relaxed line-clamp-2 mb-4 opacity-80 group-hover:opacity-100 transition-opacity">
            A Product Designer focused on intuitive user experiences.
          </p>
        </div>
      </div>
    ),
  },
  {
    className: "lg:col-start-2 lg:col-span-2 lg:row-start-1 lg:row-span-1",
    children: (
      <div className="flex h-full flex-col justify-center bg-card/50 text-[var(--ray-color)]">
        <ScrollVelocityContainer className="text-4xl font-bold md:text-7xl">
          <ScrollVelocityRow baseVelocity={8} direction={1}>
            Grow More
          </ScrollVelocityRow>
          <ScrollVelocityRow baseVelocity={8} direction={-1}>
            Learn More
          </ScrollVelocityRow>
        </ScrollVelocityContainer>
      </div>
    ),
  },
  {
    className: "lg:col-start-4 lg:col-span-2 lg:row-start-1 lg:row-span-2",
    children: (
      <div className="flex h-full flex-col">
        <h3 className="mb-4 flex items-center gap-2 text-lg font-bold">
          <span>🎨</span> Hobbies & Interests
        </h3>
        <div className="grid flex-1 grid-cols-2 gap-3">
          <div className="flex flex-col items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 p-2 transition-colors hover:bg-white/10">
            <span className="text-3xl">📸</span>
            <span className="text-xs font-medium opacity-80">Photography</span>
          </div>
          <div className="flex flex-col items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 p-2 transition-colors hover:bg-white/10">
            <span className="text-3xl">🎮</span>
            <span className="text-xs font-medium opacity-80">Gaming</span>
          </div>
          <div className="flex flex-col items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 p-2 transition-colors hover:bg-white/10">
            <span className="text-3xl">✈️</span>
            <span className="text-xs font-medium opacity-80">Traveling</span>
          </div>
          <div className="flex flex-col items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 p-2 transition-colors hover:bg-white/10">
            <span className="text-3xl">☕</span>
            <span className="text-xs font-medium opacity-80">Coffee</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    className: "lg:col-start-2 lg:col-span-2 lg:row-start-2 lg:row-span-2",
    children: (
      <div className="flex h-full flex-col">
        <h3 className="mb-5 flex items-center gap-2 text-lg font-bold">
          <span>💼</span> Experience
        </h3>
        <div className="flex flex-col gap-5">
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-500/20 text-xl">
              🚀
            </div>
            <div>
              <h4 className="font-bold text-base">Frontend Developer</h4>
              <p className="text-xs font-medium text-purple-600 dark:text-purple-400">
                Tech Startup Inc.
              </p>
              <p className="text-[10px] opacity-50 mb-1">Jan 2024 - Present</p>
              <p className="text-xs opacity-80 line-clamp-2">
                Membangun dashboard interaktif skala besar dan mengoptimalkan
                performa web perusahaan hingga 40%.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-500/20 text-xl">
              💻
            </div>
            <div>
              <h4 className="font-bold text-base">Junior Web Developer</h4>
              <p className="text-xs font-medium text-cyan-600 dark:text-cyan-400">
                Creative Agency
              </p>
              <p className="text-[10px] opacity-50 mb-1">Aug 2023 - Dec 2023</p>
              <p className="text-xs opacity-80 line-clamp-2">
                Mengembangkan landing page klien dan menerjemahkan desain UI
                Figma ke dalam HTML/CSS/JS.
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    className: "lg:col-start-1 lg:col-span-1 lg:row-start-3 lg:row-span-2",
    children: (
      <div className="flex h-full flex-col p-8">
        <TelkomLogo className="h-40 text-(--ray-color) w-full mb-6" />
        <div className="flex flex-col gap-4">
          <div className="relative pl-4 border-l border-white/20 dark:border-white/10">
            <div className="absolute -left-1.25 top-1.5 h-2 w-2 rounded-full bg-purple-500"></div>
            <h4 className="font-semibold text-sm">Universitas Telkom</h4>
            <p className="text-xs opacity-70">S1 Sistem Informasi</p>
            <p className="text-[10px] opacity-50 mt-1">2024 - 2028</p>
          </div>
          <div className="relative pl-4 border-l border-white/20 dark:border-white/10">
            <div className="absolute -left-1.25 top-1.5 h-2 w-2 rounded-full bg-gray-400"></div>
            <h4 className="font-semibold text-sm">MAN Darussalam</h4>
            <p className="text-xs opacity-70">Social Science</p>
            <p className="text-[10px] opacity-50 mt-1">2021 - 2024</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    className: "lg:col-start-4 lg:col-span-2 lg:row-start-3 lg:row-span-2",
    children: (
      <div className="flex h-full flex-col">
        <h3 className="mb-4 flex items-center gap-2 text-lg font-bold">
          <span>📚</span> Reading List
        </h3>
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3">
            <div className="h-14 w-10 shrink-0 rounded-sm bg-linear-to-br from-purple-500 to-indigo-600 shadow-sm"></div>
            <div>
              <p className="text-sm font-bold">Atomic Habits</p>
              <p className="text-[10px] opacity-60">James Clear</p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3">
            <div className="h-14 w-10 shrink-0 rounded-sm bg-linear-to-br from-green-400 to-emerald-600 shadow-sm"></div>
            <div>
              <p className="text-sm font-bold">Clean Code</p>
              <p className="text-[10px] opacity-60">Robert C. Martin</p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3">
            <div className="h-14 w-10 shrink-0 rounded-sm bg-linear-to-br from-orange-400 to-red-500 shadow-sm"></div>
            <div>
              <p className="text-sm font-bold">The Pragmatic Programmer</p>
              <p className="text-[10px] opacity-60">David Thomas</p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    className: "lg:col-start-2 lg:col-span-2 lg:row-start-4 lg:row-span-1",
    children: (
      <div className="flex h-full items-center gap-4 rounded-xl bg-white/5 p-2 border border-white/10">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-500/20 text-3xl">
          🏆
        </div>
        <div>
          <h3 className="font-bold">Best UI/UX Design</h3>
          <p className="text-xs opacity-70">Juara 1 Hackathon Nasional 2023</p>
        </div>
      </div>
    ),
  },
];
