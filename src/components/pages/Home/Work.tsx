import React from "react";
import Image from "next/image";
import { ParallaxImage } from "@/components";

//daovation, afrihealth, 

const works = [
  {
    title: "Matchbox",
    description: "The Ultimate Match-Making Platform for Upward-Mobile Millennials",
    workType: "Frontend",
    image: "/projects/matchbox.jpeg",
    year: "2023",
  },
    {
    title: "ULES Awards",
    description: "Award voting site for Faculty of Engineering, University of Lagos",
    workType: "Frontend",
    image: "/projects/ules-awards.png",
    year: "2023",
  },
      {
    title: "Harmony",
    description: "A visualization tool for the harmony blockchain for tracking transactions",
    workType: "Frontend",
    image: "/projects/harmony.png",
    year: "2023",
  },
];

const Work = () => {
  return (
    <div>
      {works.map((work, index) => (
        <div key={index}>
          <WorkCard
            title={work.title}
            description={work.description}
            workType={work.workType}
            image={work.image}
            year={work.year}
          />
        </div>
      ))}
    </div>
  );
};

export default Work;

interface WorkCardProps {
  title: string;
  description: string;
  workType: string;
  image: string;
  year: string;
}

const WorkCard = ({
  title,
  description,
  workType,
  image,
  year,
}: WorkCardProps) => {
  return (
    <>
      <div className="bg-off-white grid gap-8 px-16 py-12 lg:grid-cols-[1fr,_0.75fr]">
        <h1 className="lg:text-[7rem] font-semibold lg:leading-[100%] lg:tracking-[-7px]">
          {title}
        </h1>
        <div className="flex flex-col justify-between">
          <p className="text-muted leading-[160%] text-[1.25rem] font-medium">
            {description}
          </p>
          <div className="flex gap-2">
            <div className="bg-black text-white px-[0.75rem] py-[0.5rem] rounded-full text-sm font-medium">
              {workType}
            </div>
            <div className="bg-black text-white px-[0.75rem] py-[0.5rem] rounded-full text-sm font-medium">
              {year}
            </div>
          </div>
        </div>
      </div>
      <ParallaxImage priority src={image} alt={description} />
    </>
  );
};
