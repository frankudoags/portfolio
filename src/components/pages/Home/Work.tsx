import React from "react";
import { ParallaxImage } from "@/components";
import { GlobeIcon } from "lucide-react";


const works = [
  {
    title: "Hydra EMR",
    description: "Hydra EMR is an electronic medical record platform that integrates workflows for healthcare practices",
    workType: "Frontend",
    image: "/projects/hydra.png",
    year: "2023",
    bgColor: "#F5F5F5",
    textColor: "#1E1E21",
    buttonColor: "#000000",
    buttonTextColor: "#FFFFFF",
    link: "https://gethydra.io/",
  },
  {
    title: "Konga Search Service",
    description: "Search Smarter, Not Harder with Konga Search Service, a powerful search engine by Konga",
    workType: "Frontend",
    image: "/projects/kss.png",
    year: "2024",
    bgColor: "#E6F7FF",
    textColor: "#003366",
    buttonColor: "#0066CC",
    buttonTextColor: "#FFFFFF",
    link: "https://staging-kss.konga.com/",
  },
  {
    title: "Portfolio",
    description: "My personal portfolio site built with Next.js and Tailwind CSS",
    workType: "Frontend",
    image: "/projects/portfolio.png",
    year: "2023",
    bgColor: "#F0FFF4",
    textColor: "#1A4731",
    buttonColor: "#38A169",
    buttonTextColor: "#FFFFFF",
    githubLink: "https://github.com/frankudoags/portfolio",
  },
  {
    title: "Harmony",
    description: "Harmony Tool is a web-based tool for visualizing and analyzing large-scale harmony blockchain data. Finalist project for Encode Club x Harmony Hackathon.",
    workType: "Frontend",
    image: "/projects/harmony.png",
    year: "2023",
    bgColor: "#F9F6FE",
    textColor: "#44337A",
    buttonColor: "#6B46C1",
    buttonTextColor: "#FFFFFF",
    githubLink: "https://github.com/frankudoags/Harmony",
    link: 'https://harmony-tawny.vercel.app/'
  },
  {
    title: "Daovation",
    description: "Daovation is a cross-chain crowdfunding DAO, for decentralized charity and project/campaign funding. Axelar bounty winner(BNB Global Zero 2 Hero Hackathon)",
    workType: "Frontend",
    image: "/projects/daovation.png",
    year: "2023",
    bgColor: "#FFFAF0",
    textColor: "#7B341E",
    buttonColor: "#DD6B20",
    buttonTextColor: "#FFFFFF",
    link: "https://daovation.vercel.app/",
    githubLink: "https://github.com/degencodebeast/daovation-frontend"
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
            bgColor={work.bgColor}
            textColor={work.textColor}
            buttonColor={work.buttonColor}
            buttonTextColor={work.buttonTextColor}
            link={work.link}
            githubLink={work.githubLink}
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
  bgColor: string;
  textColor: string;
  buttonColor: string;
  buttonTextColor: string;
  link?: string;
  githubLink?: string;
}

const WorkCard = ({
  title,
  description,
  workType,
  image,
  year,
  bgColor,
  textColor,
  buttonColor,
  buttonTextColor,
  link,
  githubLink,
}: WorkCardProps) => {
  return (
    <section>
      <div
        className="grid gap-8 px-16 py-12 md:py-20 lg:py-32 min-h-[50vh] lg:grid-cols-[1fr,_0.75fr]"
        style={{ backgroundColor: bgColor }}
      >
        <h1
          className="text-[2.5rem] md:text-[5rem] lg:text-[7rem] font-semibold leading-[100%] tracking-[-2px] lg:leading-[100%] lg:tracking-[-7px]"
          style={{ color: textColor }}
        >
          {title}
        </h1>
        <div className="flex flex-col justify-between">
          <p
            className="leading-[160%] text-[1.25rem] font-medium"
            style={{ color: textColor }}
          >
            {description}
          </p>
          <div className="flex flex-wrap gap-2 mt-6">
            <div
              className="px-[0.75rem] py-[0.5rem] rounded-full text-sm font-medium"
              style={{ backgroundColor: buttonColor, color: buttonTextColor }}
            >
              {workType}
            </div>
            <div
              className="px-[0.75rem] py-[0.5rem] rounded-full text-sm font-medium"
              style={{ backgroundColor: buttonColor, color: buttonTextColor }}
            >
              {year}
            </div>
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-[0.75rem] py-[0.5rem] rounded-full text-sm font-medium flex items-center gap-1"
                style={{ backgroundColor: buttonColor, color: buttonTextColor }}
              >
                <GlobeIcon className="w-4 h-4" />
              </a>
            )}
            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-[0.75rem] py-[0.5rem] rounded-full text-sm font-medium flex items-center gap-1"
                style={{ backgroundColor: buttonColor, color: buttonTextColor }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
            )}
          </div>
        </div>
      </div>
      {/* <ParallaxImage priority src={image} alt={description} /> */}
    </section>
  );
};
