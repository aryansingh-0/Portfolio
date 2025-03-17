"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProjectCard from "./projectcard/ProjectCard";
import MobileProjectCard from "./projectcard/MobileProjectCard";
gsap.registerPlugin(ScrollTrigger);

function ProjectSection() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const section = sectionRef.current;

    // Fade in effect for the section
    gsap.fromTo(
      section,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Animate each project card
    cardsRef.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 100, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power2.out",
          delay: index * 0.2,
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  const projects = [
    {
      title: "Tourism Website",
      link: "https://safatourism.netlify.app/",
      imgUrl: "https://ibb.co/qFc08tR4",
      description: "A modern tourism website showcasing price and gallery.",
      technologies: ["Next JS", "Tailwind CSS", "JavaScript", "GSAP"],
    },
    {
      title: "Moody Films",
      imgUrl: "https://ibb.co/tMFD5WrS",
      link: "https://moodyfilm.netlify.app/home",
      description:
        "An online movie platform with comment and recommendation integration.",
      technologies: ["Next.js", "Tailwind CSS", " API", "MongoDB"],
    },
    {
      title: "Next Event",
      imgUrl: "https://ibb.co/gLQnvZ9N",
      link: "https://aryansingh-0.github.io/NextEvent/",
      description:
        "A website where Find and participate in exciting college events with ease. ",
      technologies: ["React.js", "Cloudanary", "Nodemailer"],
    },
  ];

  return (
    <div ref={sectionRef} id="project" className="project pt-11">
      <div className="textDiv pl-2 md:pl-0">
        <h1 className="text-[19vw] md:text-9xl font-bold">
          RECENT
          <span
            className="text-light-background -mt-10  block md:-mt-5  text-[15vw] md:text-9xl font-bold  "
            style={{
              textShadow:
                "1px 1px 0 white, -1px -1px 0 white, -1px 1px 0 white, 1px -1px 0 white",
            }}
          >
            PROJECT
          </span>
        </h1>
      </div>

      <div className="twocard w-full flex-col flex gap-3">
        {projects.map((project, index) => (
          <div ref={(el) => (cardsRef.current[index] = el)} key={index}>
            <ProjectCard project={project} />
            <MobileProjectCard project={project}></MobileProjectCard>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectSection;
