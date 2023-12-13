"use client";
import { roles, projects, personalDetails } from "./data";
import OpenToWorkButton from "./components/OpenToWorkBtn";
import RainbowText from "./components/RainbowText";
import Tabs from "./components/Tabs";
import ProjectCard from "./components/ProjectCard";
import RoleItem from "./components/RoleItem";
import BusinessCard from "./components/BusinessCard";
import CornerTag from "./components/CornerTag";

const WorkExperienceContent = (
  <div className="relative py-8 lg:mt-8 lg:px-12 grid lg:grid-cols-1 lg:bg-green-900 ">
    <div
      className="h-2 absolute top-0 left-0 w-full hidden lg:block"
      style={{
        background:
          "linear-gradient(to right, #FFD700, #FF7F50,#FF69B4, #9370DB, #40E0D0)",
      }}
    ></div>
    {roles.map((role, i) => (
      <RoleItem key={i} role={role} />
    ))}
  </div>
);

const ProjectsContent = (
  <div className="py-8 grid md:grid-cols-2 gap-8">
    {projects.map((project, i) => (
      <ProjectCard key={i} project={project} />
    ))}
  </div>
);

export default function Home() {
  const tabs = [
    {
      id: "workExperience",
      label: "Experience",
      content: WorkExperienceContent,
    },
    {
      id: "projects",
      label: "Projects",
      content: ProjectsContent,
    },
  ];
  return (
    <main className="flex min-h-screen flex-col lg:flex-row items-start justify-between px-8 py-32 lg:px-24 lg:py-24">
      <div className="z-10 lg:max-w-[50ch] w-full justify-between flex-col lg:px-12">
        <RainbowText text={personalDetails.name} />
        <p className="mt-4 font-mono text-sm ">{personalDetails.location}</p>
        {personalDetails.statement.map((para, p) => (
          <p key={p} className="mt-4 font-mono text-sm">
            {para}
          </p>
        ))}
        <OpenToWorkButton />
        <p className="mt-8 font-mono text-sm text-center">
          Javascript <span style={{ color: "#FFD700" }}>•</span> React{" "}
          <span style={{ color: "#FF7F50" }}>•</span> NextJS{" "}
          <span style={{ color: "#FF69B4" }}>•</span> HTML5{" "}
          <span style={{ color: "#9370DB" }}>•</span> CSS3/SASS{" "}
          <span style={{ color: "#40E0D0" }}>•</span> GraphQL{" "}
          <span style={{ color: "#FFD700" }}>•</span> API integration{" "}
          <span style={{ color: "#FF7F50" }}>•</span> Headless CMS
        </p>
        <BusinessCard details={personalDetails} />
      </div>
      <div className="mb-32 lg:max-w-5xl lg:w-full lg:mb-0">
        <Tabs tabs={tabs} />
      </div>
      <CornerTag />
    </main>
  );
}
