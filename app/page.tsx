import MagicBento from "./components/magic-bento";

export default function Main() {
  const bentoItems = [
    {
      title: "Analytics Standard",
      description: "Hanya teks biasa tanpa modifikasi ekstra.",
      label: "Basic",
      className: "lg:col-span-1 lg:row-span-1",
    },
    {
      className: "lg:col-span-2 lg:row-span-2 min-h-[300px]",
      children: (
        <div className="flex h-full flex-col items-center justify-center gap-4 text-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Custom Card Besar
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Sekarang mendukung Light & Dark mode dengan efek Glassmorphism!
            </p>
          </div>
          <button className="mt-4 rounded-lg  px-4 py-2 text-sm font-semibold cursor-pointer shadow-lg ">
            Klik Saya
          </button>
        </div>
      ),
    },
    {
      label: "Custom Title",
      className: "lg:col-span-1 lg:row-span-1",
      title: (
        <span className="text-xl">
          Integrasi <strong>Super</strong> Cepat
        </span>
      ),
      description: "Coba ubah tema sistemmu, card ini akan ikut berubah!",
    },
  ];

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center p-8 overflow-hidden">
      <div className="relative z-10 w-full max-w-5xl">
        <MagicBento
          items={bentoItems}
          textAutoHide={false}
          enableSpotlight={true}
          enableMagnetism={false}
          glowColor="var(--bento-glow)"
          particleColor="var(--bento-glow)"
        />
      </div>
    </div>
  );
}
