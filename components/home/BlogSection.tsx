import MagicBento from "@/components/modules/bento-grid/bento-wrapper";
import { ProjectCard } from "@/components/modules/blog-grid/blog-card";
import { projects } from "@/lib/project-items";

export default function BlogSection() {
  const blogItems = projects.map((project) => {
    return {
      children: <ProjectCard project={project} />,
    };
  });

  return (
    <>
      <div className="flex justify-center items-center min-h-screen w-full">
        <h1 className="text-7xl tracking-tighter">Work</h1>
      </div>
      <div className="w-full max-w-7xl mx-auto px-4 pt-8 pb-4">
        <MagicBento
          items={blogItems}
          textAutoHide={true}
          enableSpotlight={false}
          enableMagnetism={false}
          enableStars={false}
          clickEffect={false}
          glowColor="var(--bento-glow)"
          particleColor="var(--bento-glow)"
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        />
      </div>
    </>
  );
}
