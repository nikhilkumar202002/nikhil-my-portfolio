import React from "react";
import { notFound } from "next/navigation";
import { projectsData } from "../../component/sections/my-works/projectsData";
import ProjectDetailView from "../../component/sections/my-works/ProjectDetailView";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return projectsData.map((item) => ({
    slug: item.id,
  }));
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const projectIndex = projectsData.findIndex((item) => item.id === slug);

  if (projectIndex === -1) {
    notFound();
  }

  const project = projectsData[projectIndex];
  const prevProject =
    projectIndex > 0
      ? projectsData[projectIndex - 1]
      : projectsData[projectsData.length - 1];
  const nextProject =
    projectIndex < projectsData.length - 1
      ? projectsData[projectIndex + 1]
      : projectsData[0];

  return (
    <ProjectDetailView
      project={project}
      prevProject={prevProject}
      nextProject={nextProject}
    />
  );
}
