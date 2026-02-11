import MagicBento from "./components/magic-bento";

export default function Main() {
  const bentoItems = [
    // DIV 1 = Photo Profile (1x1) - Kiri Atas
    {
      className:
        "lg:col-start-1 lg:col-span-1 lg:row-start-1 lg:row-span-1 min-h-[150px]",
      children: (
        <div className="flex h-full w-full items-center justify-center">
          <img
            src="https://i.pravatar.cc/150?img=68"
            alt="Profile"
            className="h-24 w-24 rounded-full border-2 border-purple-500 object-cover shadow-[0_0_15px_rgba(168,85,247,0.4)]"
          />
        </div>
      ),
    },

    // DIV 2 = Social Media / Contact (1x1) - Kiri Tengah
    {
      className:
        "lg:col-start-1 lg:col-span-1 lg:row-start-2 lg:row-span-1 min-h-[120px]",
      children: (
        <div className="flex h-full w-full flex-col items-center justify-center gap-3">
          <h3 className="text-xs font-bold tracking-widest opacity-60 uppercase">
            Connect
          </h3>
          <div className="flex gap-4">
            <a
              href="#"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <span className="text-lg">🐙</span>
            </a>
            <a
              href="#"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 hover:bg-blue-500/40 transition-colors"
            >
              <span className="text-lg text-blue-400">in</span>
            </a>
            <a
              href="#"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 hover:bg-green-500/40 transition-colors"
            >
              <span className="text-lg text-green-400">✉️</span>
            </a>
          </div>
        </div>
      ),
    },

    // DIV 3 = Education (1x2) - Kiri Bawah memanjang ke bawah
    {
      className: "lg:col-start-1 lg:col-span-1 lg:row-start-3 lg:row-span-2",
      children: (
        <div className="flex h-full flex-col">
          <h3 className="mb-4 flex items-center gap-2 text-lg font-bold">
            <span>🎓</span> Education
          </h3>
          <div className="flex flex-col gap-4">
            <div className="relative pl-4 border-l border-white/20 dark:border-white/10">
              <div className="absolute -left-1.25 top-1.5 h-2 w-2 rounded-full bg-purple-500"></div>
              <h4 className="font-semibold text-sm">Universitas Contoh</h4>
              <p className="text-xs opacity-70">S1 Teknik Informatika</p>
              <p className="text-[10px] opacity-50 mt-1">2019 - 2023</p>
            </div>
            <div className="relative pl-4 border-l border-white/20 dark:border-white/10">
              <div className="absolute -left-1.25 top-1.5 h-2 w-2 rounded-full bg-gray-400"></div>
              <h4 className="font-semibold text-sm">SMA Negeri 1</h4>
              <p className="text-xs opacity-70">Jurusan IPA</p>
              <p className="text-[10px] opacity-50 mt-1">2016 - 2019</p>
            </div>
          </div>
        </div>
      ),
    },

    // DIV 4 = About (2x1) - Tengah Atas
    {
      className: "lg:col-start-2 lg:col-span-2 lg:row-start-1 lg:row-span-1",
      children: (
        <div className="flex h-full flex-col justify-center">
          <h2 className="mb-2 text-xl font-bold">
            Hi, I'm a Software Engineer 👋
          </h2>
          <p className="text-sm leading-relaxed opacity-80">
            Saya berfokus pada pengembangan antarmuka modern yang interaktif dan
            responsif. Memiliki passion kuat di bidang Web Development, React,
            dan UI/UX Design.
          </p>
        </div>
      ),
    },

    // DIV 5 = Experience (2x2) - Tengah (Pusat Grid)
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
                <p className="text-[10px] opacity-50 mb-1">
                  Jan 2024 - Present
                </p>
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
                <p className="text-[10px] opacity-50 mb-1">
                  Aug 2023 - Dec 2023
                </p>
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

    // DIV 6 = Achievement (2x1) - Tengah Bawah
    {
      className: "lg:col-start-2 lg:col-span-2 lg:row-start-4 lg:row-span-1",
      children: (
        <div className="flex h-full items-center gap-4 rounded-xl bg-white/5 p-2 border border-white/10">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-500/20 text-3xl">
            🏆
          </div>
          <div>
            <h3 className="font-bold">Best UI/UX Design</h3>
            <p className="text-xs opacity-70">
              Juara 1 Hackathon Nasional 2023
            </p>
          </div>
        </div>
      ),
    },

    // DIV 7 = Hobby (2x2) - Kanan Atas
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
              <span className="text-xs font-medium opacity-80">
                Photography
              </span>
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

    // DIV 8 = Book Reading List (2x2) - Kanan Bawah
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
  ];

  return (
    <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden p-8 lg:p-12">
      <div className="relative z-10 w-full max-w-6xl">
        <MagicBento
          items={bentoItems}
          textAutoHide={false}
          enableSpotlight={true}
          enableMagnetism={false}
          glowColor="var(--bento-glow)"
          particleColor="var(--bento-glow)"
          className="grid-cols-1 md:grid-cols-2 lg:grid-cols-5 lg:grid-rows-4"
        />
      </div>
    </div>
  );
}
