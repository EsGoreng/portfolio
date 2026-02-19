import { PortableTextBlock } from "sanity";

export interface Project {
  _id: string;
  title: string;
  slug: { current: string };
  description: string;
  longDescription?: PortableTextBlock[];
  image: {
    asset: {
      url: string;
    };
    alt?: string;
  };
  technologies?: string[];
  link?: string;
}
