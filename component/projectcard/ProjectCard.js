"use client";
import { useEffect, useRef } from "react";
import { FaArrowRight } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
gsap.registerPlugin(ScrollTrigger);

function ProjectCard({ project }) {
  const cardRef = useRef(null);
  const arrowRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    const arrow = arrowRef.current;
    const image = imageRef.current;

    // Fade-in effect on scroll
    gsap.fromTo(
      card,
      { opacity: 0, y: 50, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Hover animation for arrow
    gsap.to(arrow, {
      rotation: -45,
      scale: 1.3,
      duration: 0.4,
      ease: "power1.out",
      paused: true,
    });

    // Hover animation for image
    gsap.to(image, {
      scale: 1.2,
      duration: 0.4,
      ease: "power2.out",
      paused: true,
    });

    // Mouse enter & leave events for interactivity
    card.addEventListener("mouseenter", () => {
      gsap.to(arrow, { play: true });
      gsap.to(image, { play: true });
    });

    card.addEventListener("mouseleave", () => {
      gsap.to(arrow, { reverse: true });
      gsap.to(image, { reverse: true });
    });

    return () => {
      card.removeEventListener("mouseenter", () => {});
      card.removeEventListener("mouseleave", () => {});
    };
  }, []);

  return (
    <Link href={project.link || "#"}>
      <div
        ref={cardRef}
        className="hidden group relative md:flex items-center w-[80%] h-[30vh] cursor-pointer rounded-md bg-light-background transition-all overflow-hidden shadow-lg"
      >
        {/* Animated Arrow */}
        <div
          ref={arrowRef}
          className="absolute top-3 right-3 transition-all duration-300 ease-in-out"
        >
          <FaArrowRight className="text-white text-2xl" />
        </div>

        {/* Project Image */}
        <div className="relative w-[30%] h-[90%] rounded-md overflow-hidden">
          <img
            ref={imageRef}
            src={project.imgUrl}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-300"
          />
        </div>

        {/* Project Details */}
        <div className="w-[60%] h-[90%] px-3 text-white relative">
          <h1 className="text-2xl text-highlight">{project.title}</h1>
          <hr className="w-[50%] border-white my-1" />
          <p className="tracking-wider">{project.description}</p>

          {/* Technologies Used */}
          <div className="absolute bottom-2 flex items-center gap-2 flex-wrap">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-2 py-0.5 rounded-md border border-white text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProjectCard;
