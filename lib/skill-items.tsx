export interface Skill {
  title: string;
  description: string;
  src: string;
  link: string;
  color: string;
}

export const skills: Skill[] = [
  {
    title: "Frontend Development",
    description:
      "Crafting responsive and interactive user interfaces using React, Next.js, and modern CSS frameworks like Tailwind to ensure seamless user experiences.",
    src: "frontend.jpg",
    link: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2670&auto=format&fit=crop",
    color: "#BBACAF",
  },
  {
    title: "Backend Engineering",
    description:
      "Building scalable server-side applications, RESTful APIs, and managing databases with Node.js, PostgreSQL, and microservices architecture.",
    src: "backend.jpg",
    link: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2670&auto=format&fit=crop",
    color: "#977F6D",
  },
  {
    title: "UI/UX Design",
    description:
      "Designing intuitive user experiences and high-fidelity interfaces using Figma and Adobe Creative Suite, focusing on accessibility and visual hierarchy.",
    src: "design.jpg",
    link: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=2670&auto=format&fit=crop",
    color: "#C2491D",
  },
  {
    title: "Mobile Development",
    description:
      "Developing cross-platform mobile applications for iOS and Android using React Native and Flutter, delivering native-like performance.",
    src: "mobile.jpg",
    link: "https://images.unsplash.com/photo-1556656793-08538906a9f8?q=80&w=2574&auto=format&fit=crop",
    color: "#B62429",
  },
  {
    title: "DevOps & Cloud",
    description:
      "Automating deployment pipelines, managing cloud infrastructure on AWS, and containerizing applications with Docker and Kubernetes.",
    src: "devops.jpg",
    link: "https://images.unsplash.com/photo-1631624210938-539575f92e3c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    color: "#88A28D",
  },
];
