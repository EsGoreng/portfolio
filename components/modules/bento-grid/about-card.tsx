export const AboutCard = () => {
  return (
    <div className="flex h-full w-full flex-col overflow-hidden relative backdrop-blur-sm bg-white/40 dark:bg-white/5 ">
      <h3 className="absolute z-25 left-6 top-6 flex items-center gap-2 text-2xl font-semibold tracking-tighter">
        About
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
          <div className="flex flex-col gap-3 pt-18 pb-8 font-light">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis eum
              cupiditate similique debitis explicabo dolor libero? Eius,
              recusandae sequi? Nemo delectus officia ab natus, ut omnis
              explicabo incidunt sint maxime.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
