import React from "react";
import { notFound } from "next/navigation";
import { portfolioData } from "@/app/dataset/Portfolio";
import ProjectDetailView from "../../component/sections/my-works/ProjectDetailView";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return portfolioData.map((item) => ({
    slug: item.id,
  }));
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const projectIndex = portfolioData.findIndex((item) => item.id === slug);

  if (projectIndex === -1) {
    notFound();
  }

  const project = portfolioData[projectIndex];
  const prevProject =
    projectIndex > 0
      ? portfolioData[projectIndex - 1]
      : portfolioData[portfolioData.length - 1];
  const nextProject =
    projectIndex < portfolioData.length - 1
      ? portfolioData[projectIndex + 1]
      : portfolioData[0];

  return (
    <ProjectDetailView
      project={project}
      prevProject={prevProject}
      nextProject={nextProject}
    />
  );
}
