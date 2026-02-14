export const AchievementCard = () => {
  return (
    <div className="flex h-full items-center gap-4 rounded-xl bg-white/5 p-2 border border-white/10">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-500/20 text-3xl">
        🏆
      </div>
      <div>
        <h3 className="font-bold">Best UI/UX Design</h3>
        <p className="text-xs opacity-70">Juara 1 Hackathon Nasional 2023</p>
      </div>
    </div>
  );
};
