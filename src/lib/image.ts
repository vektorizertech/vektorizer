import { IProject } from "@/data/projects";
import { IService } from "@/data/services";

export function resolveProjectImages(project: IProject) {
  const base = `/images/projects/${project.slug}`;

  return {
    ...project,
    thumbnail: `${base}/${project.thumbnail}`,
    modules: project.modules.map((mod) => ({
      ...mod,
      image: mod.image ? `${base}/${mod.image}` : undefined,
    })),
  };
}

export function resolveServiceImages(service: IService) {
  const base = `/images/services/${service.slug}`;

  return {
    ...service,
    details: {
      ...service.details,
      content: service.details.content.map((section) => ({
        ...section,
        image: `${base}/${section.image}`,
      })),
    },
  };
}
