"use client";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import gsap from "gsap";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

function MobileNav() {
  const navRef = useRef(null);
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  useEffect(() => {
    const footer = document.getElementById("footer");
    if (!footer || !navRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFooterVisible(entry.isIntersecting); // Updates state when footer is in view
      },
      { root: null, threshold: 0.1 }
    );

    observer.observe(footer);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!navRef.current) return;

    if (isFooterVisible) {
      gsap.to(navRef.current, {
        y: 100,
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
      }); // Slide down
    } else {
      gsap.to(navRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power2.out",
      }); // Slide up
    }
  }, [isFooterVisible]);

  return (
    <div
      ref={navRef}
      className="fixed md:hidden  bottom-0 left-0 w-full h-20 z-50"
    >
      <img
        src="/svgs/mobile navbar.svg"
        className="object-cover h-full w-full"
        alt="Mobile Navbar"
      />
      <div className="icons flex items-center justify-evenly absolute top-0 left-0 h-full w-[40%]">
        <div className="h-10 w-10 flex items-center justify-center">
          <Link href="#mhome">
            {" "}
            <FontAwesomeIcon icon={faHouse} className="text-4xl" />
          </Link>{" "}
        </div>
        <div className="h-10 w-10 flex items-center justify-center">
          <Link href="https://github.com/aryansingh-0" target="_blank">
            {" "}
            <FontAwesomeIcon icon={faGithub} className="text-4xl" />
          </Link>{" "}
        </div>
      </div>

      <div className="icons flex items-center justify-evenly absolute top-0 right-0 h-full w-[40%]">
        <div className="h-10 w-10 flex items-center justify-center">
          <Link href="mailto:aryan03aryansingh@gmail.com">
            {" "}
            <FontAwesomeIcon icon={faEnvelope} className="text-4xl" />
          </Link>{" "}
        </div>
        <div className="h-10 w-10 flex items-center justify-center">
          {" "}
          <Link href="https://www.linkedin.com/in/aryansingh0" target="_blank">
            <FontAwesomeIcon icon={faLinkedinIn} className="text-4xl" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MobileNav;
