import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Project } from "@/lib/constants";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="w-full bg-transparent">
      {project.src && (
        <img
          src={project.src}
          alt={project.title}
          className="w-full h-32 object-cover "
        />
      )}
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{project.description}</CardDescription>
      </CardContent>
      <CardFooter>
        <Button asChild variant="link">
          <a target="_blank" rel="noopener noreferrer">
            View
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}
