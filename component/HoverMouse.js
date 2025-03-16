"use client";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

function HoverMouse() {
  const [mounted, setMounted] = useState(false); // Track if component is mounted
  const circleRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    setMounted(true); // Mark component as mounted
  }, []);

  useEffect(() => {
    if (!mounted) return; // Ensure this runs only on the client

    const circle = circleRef.current;
    const container = containerRef.current;
    if (!circle || !container) return;

    let mouseX = 0;
    let mouseY = 0;
    let circleX = 0;
    let circleY = 0;
    let moveSpeed = 0.15; // Smooth effect

    const updateBounds = () => container.getBoundingClientRect();
    let containerRect = updateBounds();

    const moveCircle = (e) => {
      containerRect = updateBounds(); // Update bounds on resize

      const { clientX, clientY } = e;

      // Keep mouse position inside container
      mouseX = Math.max(
        0,
        Math.min(clientX - containerRect.left, containerRect.width)
      );
      mouseY = Math.max(
        0,
        Math.min(clientY - containerRect.top, containerRect.height)
      );
    };

    const animateCircle = () => {
      let distance = Math.hypot(mouseX - circleX, mouseY - circleY);
      let newSize = Math.max(50, 100 - distance * 0.05); // Adjusted scaling effect

      // Smoothly follow mouse but stay within bounds
      circleX += (mouseX - circleX) * moveSpeed;
      circleY += (mouseY - circleY) * moveSpeed;

      gsap.to(circle, {
        x: Math.max(
          0,
          Math.min(circleX - newSize / 2, containerRect.width - newSize)
        ),
        y: Math.max(
          0,
          Math.min(circleY - newSize / 2, containerRect.height - newSize)
        ),
        width: newSize,
        height: newSize,
        opacity: 0.7,
        duration: 0.3,
        ease: "power3.out",
      });

      requestAnimationFrame(animateCircle);
    };

    animateCircle();
    window.addEventListener("mousemove", moveCircle);
    window.addEventListener("resize", () => (containerRect = updateBounds()));

    return () => {
      window.removeEventListener("mousemove", moveCircle);
      window.removeEventListener(
        "resize",
        () => (containerRect = updateBounds())
      );
    };
  }, [mounted]);

  if (!mounted) return null; // Prevent hydration error

  return (
    <div ref={containerRef} className="relative w-full h-full  ">
      {/* 🔵 Dynamic Circle (Limited within Container) */}
      <div
        ref={circleRef}
        className="absolute w-24 h-24 rounded-full bg-blue-500 opacity-60 pointer-events-none blur-lg"
      ></div>

      {/* 🟥 Grid Boxes (Static Background) */}
      <div className="absolute inset-0 grid grid-cols-10 grid-rows-6 p-1">
        {Array.from({ length: 60 }).map((_, index) => (
          <div
            key={index}
            className="box h-8 w-8 rounded-md bg-background shadow-lg"
          ></div>
        ))}
      </div>
    </div>
  );
}

export default HoverMouse;
