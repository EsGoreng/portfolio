import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Project } from "@/lib/project-items";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="relative mx-auto w-full pt-0 bg-white/40 dark:bg-white/5 backdrop-blur-lg border border-border rounded-4xl">
      {project.src && (
        <img
          src={project.link}
          alt={project.title}
          className="relative aspect-video rounded-t-[25px] z-30 w-full  object-cover brightness-60 grayscale dark:brightness-40"
        />
      )}
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{project.description}</CardDescription>
      </CardContent>
      <CardFooter>
        <Button asChild>
          <a target="_blank" rel="noopener noreferrer">
            View Detail
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}
