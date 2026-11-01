import React from "react";
import SlugBanner from "../../component/sections/my-works/SlugBanner";
import { projectsData } from "../../component/sections/my-works/projectsData";

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
  const project = projectsData.find((item) => item.id === slug);

  const headline = project ? project.title : slug.replace(/-/g, " ");
  const backgroundImage =
    project?.image || "/porfolio/GULF-CARGO/FEATURED.webp";

  return (
    <div>
      <SlugBanner
        headline={headline}
        backgroundImage={backgroundImage}
      />
    </div>
  );
}