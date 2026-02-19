// page.tsx (Sekarang jadi Server Component)
import ScrollWrapper from "@/components/wrappers/ScrollWrapper"; // Import wrapper yang baru dibuat
import ProfileSection from "@/components/home/ProfileSection";
import SkillSection from "@/components/home/SkillSection";
import CarouselSection from "@/components/home/CarouselSection";
import BlogSection from "@/components/home/BlogSection";
import CTA from "@/components/home/CTASection";

export default function Main() {
  return (
    <ScrollWrapper>
      <ProfileSection />
      <CarouselSection />
      <SkillSection />
      <BlogSection />
      <CTA />
    </ScrollWrapper>
  );
}
