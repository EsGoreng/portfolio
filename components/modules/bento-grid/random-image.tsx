export const RandomImage = () => {
  return (
    <div className="group relative h-full w-full overflow-hidden backdrop-blur-sm bg-white/40 dark:bg-white/5 ">
      <img
        src="https://images.unsplash.com/photo-1770064319334-2c61b12dd2cc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Profile"
        className="absolute inset-0 z-0 h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
      />
    </div>
  );
};
