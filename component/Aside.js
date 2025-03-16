"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa6";
import { RiLinkedinBoxFill } from "react-icons/ri";
import { MdOutlineEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

function Aside() {
  const textRef = useRef(null);
  const bgCircleRef = useRef(null);

  useEffect(() => {
    const textDiv = textRef.current;
    const bgCircle = bgCircleRef.current;

    if (!textDiv || !bgCircle) return;

    const handleMouseEnter = (e) => {
      console.log("Mouse Entered");

      const rect = textDiv.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Position the circle at cursor entry point
      gsap.set(bgCircle, {
        x: x - rect.width / 2,
        y: y - rect.height / 2,
        scale: 0,
        opacity: 1,
        zIndex: -1, // Move the circle behind text
      });

      // Expand animation
      gsap.to(bgCircle, {
        scale: 2.5,
        duration: 0.5,
        ease: "power2.out",
      });

      // Change text color and move it to front
      gsap.to(textDiv, { color: "black", duration: 0.3, zIndex: 10 });
    };

    const handleMouseLeave = () => {
      // Shrink the circle
      gsap.to(bgCircle, {
        scale: 0,
        duration: 0.5,
        ease: "power2.out",
        zIndex: -1, // Keep it behind text
      });

      // Reset text color
      gsap.to(textDiv, { color: "white", duration: 0.3 });
    };

    textDiv.addEventListener("mouseenter", handleMouseEnter);
    textDiv.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      textDiv.removeEventListener("mouseenter", handleMouseEnter);
      textDiv.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="w-[90%] bg-light-background rounded-md h-[90vh] px-4 pt-2">
      <div className="profile flex items-center justify-center w-full bg-white h-[30vh] rounded-md overflow-hidden">
        <img
          src="https://i.imgur.com/L0nvhpd.png"
          className="h-full object-cover"
          alt="Profile"
        />
      </div>
      <div className="name text-center pt-2 text-3xl">
        <h1 className="tracking-tight">Aryan Singh</h1>
      </div>
      <div className="name text-center mt-1">
        <span
          ref={textRef}
          className="relative overflow-hidden rounded-full border px-4 py-1 inline-block text-white z-10 cursor-none "
        >
          {/* Background Circle Inside the Span */}
          <div
            ref={bgCircleRef}
            className="absolute h-[200%] w-[150%] bg-white rounded-full transform -translate-x-1/2 -translate-y-1/2 z-[-1]"
            style={{ opacity: 0 }}
          ></div>
          Website Developer
        </span>
      </div>
      <div className="name w-full flex items-center justify-center mt-24">
        <p className="tracking-wide w-[90%]">
          A Software Engineer who has developed countless innovative solutions.
        </p>
      </div>
      <div className="social-media mt-4 w-full bg-slate-700 rounded-md h-10 grid grid-cols-4 place-items-center">
        <Link href="https://www.instagram.com" target="_blank">
          <FaInstagram className="cursor-pointer hover:scale-[250%] transition-all ease-in-out" />
        </Link>

        {/* LinkedIn */}
        <Link href="https://www.linkedin.com/in/aryansingh0" target="_blank">
          <RiLinkedinBoxFill className="cursor-pointer hover:scale-[250%] transition-all ease-in-out" />
        </Link>

        {/* GitHub */}
        <Link href="https://github.com/aryansingh-0" target="_blank">
          <FaGithub className="cursor-pointer hover:scale-[250%] transition-all ease-in-out" />
        </Link>

        {/* Email */}
        <Link href="mailto:aryan03aryansingh@gmail.com">
          <MdOutlineEmail className="cursor-pointer hover:scale-[250%] transition-all ease-in-out" />
        </Link>
      </div>
    </div>
  );
}

export default Aside;
