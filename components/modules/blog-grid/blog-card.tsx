import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link"; // IMPOR INI
import Image from "next/image";
import type { Project } from "@/lib/project-items";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="relative flex flex-col mx-auto w-full pt-0 bg-white/40 dark:bg-white/5 backdrop-blur-lg border border-border rounded-4xl h-full">
      {project.image?.asset?.url && (
        <div className="relative aspect-video w-full overflow-hidden rounded-t-[25px]">
          <Image
            src={project.image.asset.url}
            alt={project.title}
            fill
            className="object-cover brightness-90 hover:brightness-100 transition-all duration-300"
          />
        </div>
      )}

      <CardHeader>
        <CardTitle className="line-clamp-1">{project.title}</CardTitle>
      </CardHeader>

      <CardContent className="flex-grow">
        <CardDescription className="line-clamp-3">
          {project.description}
        </CardDescription>
      </CardContent>

      <CardFooter>
        <Button asChild className="w-full">
          <Link href={`/projects/${project.slug.current}`}>View Detail</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
