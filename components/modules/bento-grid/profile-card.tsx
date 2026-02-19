import { ProgressiveBlur } from "@/components/ui/progressive-blur";

export const ProfileCard = () => {
  return (
    <div className="group relative h-full w-full overflow-hidden backdrop-blur-sm bg-white/40 dark:bg-white/5 ">
      <img
        src="https://images.unsplash.com/photo-1745870297558-367a83462926?q=80&w=687&auto=format&fit=crop"
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
  );
};
