import { TelkomLogo } from ".././icons/TelkomLogo";

export const EducationCard = () => {
  return (
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
  );
};
