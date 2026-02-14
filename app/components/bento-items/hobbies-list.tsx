const hobbies = [
  { icon: "📸", label: "Photography" },
  { icon: "🎮", label: "Gaming" },
  { icon: "✈️", label: "Traveling" },
  { icon: "☕", label: "Coffee" },
];

export const HobbiesList = () => {
  return (
    <div className="flex h-full flex-col p-6">
      <h3 className="mb-4 flex items-center gap-2 text-lg font-bold">
        <span>🎨</span> Hobbies & Interests
      </h3>
      <div className="grid flex-1 grid-cols-2 gap-3">
        {hobbies.map((hobby, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 p-2 transition-colors hover:bg-white/10"
          >
            <span className="text-3xl">{hobby.icon}</span>
            <span className="text-xs font-medium opacity-80">
              {hobby.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
