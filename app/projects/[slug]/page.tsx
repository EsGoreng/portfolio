import { getProjectBySlug } from "@/sanity/lib/queries";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import ScrollWrapper from "@/components/wrappers/ScrollWrapper";

const portableTextComponents = {
  types: {
    image: ({ value }: any) => {
      if (!value?.asset?.url) return null;

      return (
        <div className="relative w-full my-8 aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-lg">
          <Image
            src={value.asset.url}
            alt={value.alt || "Project image"}
            fill
            sizes="(max-width: 768px) 100vw, 768px"
            className="object-cover"
          />
        </div>
      );
    },
  },
};

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = await getProjectBySlug(slug);

  if (!project) {
    return <div className="text-center py-20">Project not found.</div>;
  }

  return (
    <ScrollWrapper>
      <main className="min-h-screen py-20 px-4 md:px-8 max-w-4xl mx-auto pb-60">
        {/* Tombol Kembali */}
        <Button asChild className="mb-8">
          <Link href="/" className="flex items-center gap-2">
            <ArrowLeft size={16} /> Back
          </Link>
        </Button>

        {/* Header Proyek */}
        <h1 className="text-4xl md:text-6xl mb-6 tracking-tight">
          {project.title}
        </h1>

        {/* Gambar Utama */}
        {project.image?.asset?.url && (
          <div className="relative w-full aspect-video rounded-3xl overflow-hidden mb-10 shadow-xl border border-white/10">
            <Image
              src={project.image.asset.url}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        {/* Info Tech Stack */}
        {project.technologies && (
          <div className="flex flex-wrap gap-2 mb-8">
            {project.technologies.map((tech: string) => (
              <span
                key={tech}
                className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* Konten Detail (Portable Text) */}
        <div className="prose prose-neutral dark:prose-invert max-w-none text-lg leading-relaxed">
          {project.longDescription ? (
            <PortableText
              value={project.longDescription}
              components={portableTextComponents}
            />
          ) : (
            <p>{project.description}</p>
          )}
        </div>

        {/* Tombol External Link (Jika ada) */}
        {project.links && project.links.length > 0 && (
          <div className="mt-12 pt-8 border-t border-border flex gap-4">
            {project.links.map((link: any) => (
              <Button key={link.url} asChild>
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  {link.label || "Visit Link"}
                </a>
              </Button>
            ))}
          </div>
        )}
      </main>
    </ScrollWrapper>
  );
}
