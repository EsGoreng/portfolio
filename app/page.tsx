import {
  FileTextIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
  InstagramLogoIcon,
  GlobeIcon,
  Link1Icon,
  PersonIcon,
} from "@radix-ui/react-icons"

import { BentoCard, BentoGrid } from "@/components/ui/bento-grid"
import { getProfile } from "@/sanity/lib/queries"
import { urlFor } from "@/sanity/lib/image"

// Helper untuk memetakan nama platform ke Icon yang sesuai
const getIconByPlatform = (platform: string) => {
  switch (platform.toLowerCase()) {
    case 'github': return GitHubLogoIcon;
    case 'linkedin': return LinkedInLogoIcon;
    case 'twitter': return TwitterLogoIcon;
    case 'instagram': return InstagramLogoIcon;
    case 'portfolio': return GlobeIcon;
    default: return Link1Icon;
  }
};

export default async function Home() {
  // 1. Ambil data profil dari Sanity
  const profile = await getProfile();

  if (!profile) {
    return <div className="p-10">Data profil belum diisi di Sanity Studio.</div>;
  }

  // 2. Siapkan array items untuk Bento Grid
  const items = [];

  // --- ITEM 1: INFORMASI PRIBADI (Kiri Atas, Lebar) ---
  items.push({
    key: 'personal-info',
    Icon: PersonIcon,
    name: profile.fullName,
    description: profile.headline, // "Full Stack Developer", dll
    // Menampilkan bio singkat sebagai background text atau custom component jika didukung
    // Di sini kita gunakan href ke 'about' atau biarkan '#'
    href: "#", 
    cta: profile.location || "Lihat Profil",
    className: "lg:col-span-2 lg:row-span-1", // Mengambil 2 kolom
    background: (
      <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
         <span className="text-8xl font-bold">{profile.fullName.split(' ')[0]}</span>
      </div>
    )
  });

  // --- ITEM 2: PHOTO PROFILE (Kanan, Vertikal Tinggi) ---
  if (profile.profileImage) {
    items.push({
      key: 'photo-profile',
      Icon: GlobeIcon, // Icon dummy, karena fokusnya gambar
      name: "", // Kosongkan nama agar gambar terlihat penuh
      description: "",
      href: "#",
      cta: "",
      className: "lg:col-span-1 lg:row-span-2", // Kotak tinggi di kanan
      background: (
        <img
          src={urlFor(profile.profileImage).url()}
          alt={profile.fullName}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      ),
    });
  }

  // --- ITEM 3: MENU - RESUME/CV (Jika ada) ---
  if (profile.resumeFile?.asset?.url) {
    items.push({
      key: 'resume',
      Icon: FileTextIcon,
      name: "Resume / CV",
      description: "Unduh CV terbaru saya.",
      href: `${profile.resumeFile.asset.url}?dl=`, // Force download
      cta: "Download PDF",
      className: "lg:col-span-1 lg:row-span-1",
      background: <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-neutral-200 to-neutral-100 dark:from-neutral-800 dark:to-neutral-900 opacity-50" />,
    });
  }

  // --- ITEM 4 dst: MENU - SOCIAL LINKS ---
  if (profile.socialLinks && profile.socialLinks.length > 0) {
    profile.socialLinks.forEach((link: any) => {
      items.push({
        key: link._key || link.platform,
        Icon: getIconByPlatform(link.platform),
        name: link.platform.charAt(0).toUpperCase() + link.platform.slice(1), // Capitalize
        description: `Terhubung di ${link.platform}`,
        href: link.url,
        cta: "Kunjungi",
        className: "lg:col-span-1 lg:row-span-1",
        background: <div className="absolute top-0 right-0 w-full h-full bg-neutral-100 dark:bg-neutral-900 opacity-20" />,
      });
    });
  }

  return (
    <BentoGrid className="lg:grid-rows-3 max-w-4xl mx-auto">
      {items.map((item) => (
        <BentoCard
          key={item.key}
          name={item.name}
          Icon={item.Icon}
          description={item.description}
          href={item.href}
          cta={item.cta}
          className={item.className}
          background={item.background}
        />
      ))}
    </BentoGrid>
  )
} 