"use client";
import Aside from "@/component/Aside";
import ContactUs from "@/component/ContactUs";
import Footer from "@/component/Footer";
import HeroSection from "@/component/HeroSection";
import MFooter from "@/component/mobile/MFooter";
import Profile from "@/component/mobile/Profile";
import Navbar from "@/component/Navbar";
import MobileNav from "@/component/Navbar/MobileNav";
import ProjectSection from "@/component/ProjectSection";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ToastContainer } from "react-toastify";

export default function Home() {
  const circleRef = useRef(null);

  useEffect(() => {
    const circle = circleRef.current;
    const moveSpeed = 0.1; // Adjust speed of movement

    let mouseX = 0;
    let mouseY = 0;
    let circleX = window.innerWidth / 2;
    let circleY = window.innerHeight / 2;

    function moveCircle() {
      const distance = Math.hypot(mouseX - circleX, mouseY - circleY);
      const maxSize = 30;
      const minSize = 5;

      // Adjust size based on distance
      const newSize = Math.max(
        minSize,
        maxSize - (distance / window.innerWidth) * maxSize
      );

      // Smooth follow effect
      circleX += (mouseX - circleX) * moveSpeed;
      circleY += (mouseY - circleY) * moveSpeed;

      gsap.to(circle, {
        x: circleX - newSize / 2,
        y: circleY - newSize / 2,
        width: newSize,
        height: newSize,
        opacity: 1,
        ease: "power2.out",
      });

      requestAnimationFrame(moveCircle);
    }

    moveCircle(); // Start animation loop

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="min-h-screen w-screen bg-background text-text">
      <Navbar />
      <MobileNav />
      <ToastContainer />
      {/* 🟡 Fix: Circle now covers the whole screen */}
      <div className="fixed z-20 top-0 left-0 w-full h-full pointer-events-none">
        <div
          ref={circleRef}
          className="circle hidden md:block absolute rounded-full mix-blend-color-burn cursor-none bg-orange-600 opacity-0 pointer-events-none"
        ></div>
      </div>
      <div className="relative flex justify-evenly">
        {/* Sticky Sidebar */}
        <div className="sticky hidden md:flex top-2 left-0 h-screen w-[25vw]  justify-center">
          <Aside />
        </div>

        {/* Scrollable Content */}
        <div className="w-screen   md:pl-3 md:w-[60vw]">
          <Profile />

          <HeroSection />
          <ProjectSection />
          <ContactUs />
        </div>
      </div>
      <MFooter />
      <Footer />
    </div>
  );
}
