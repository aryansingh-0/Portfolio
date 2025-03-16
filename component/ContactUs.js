"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { toast } from "react-toastify";

gsap.registerPlugin(ScrollTrigger);

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    topic: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await fetch("/api/sendmessage", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Email sent successfully!");

        setFormData({ name: "", email: "", topic: "", message: "" });
      } else {
        toast.error("Try again!");
        setStatus({
          type: "error",
          message: data.error || "Failed to send email.",
        });
      }
    } catch (error) {
      setStatus({
        type: "error",
        message: "Something went wrong. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

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

    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 100, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      formRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <div ref={sectionRef} className="pt-10 pb-10">
      {/* Animated Heading */}

      <div className="textDiv pl-2 md:pl-0" ref={textRef}>
        <h1 className="text-[19vw] md:text-9xl font-bold">
          LET'S
          <span
            className="text-light-background block text-[15vw] md:text-9xl font-bold md:-mt-5 -mt-10"
            style={{
              textShadow:
                "1px 1px 0 white, -1px -1px 0 white, -1px 1px 0 white, 1px -1px 0 white",
            }}
          >
            CONNECT
          </span>
        </h1>
      </div>

      {/* Animated Form Section */}
      <div
        ref={formRef}
        className="max-w-lg p-6 rounded-lg shadow-lg bg-gray-900"
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name & Email */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-white">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 rounded-md bg-gray-800 text-white focus:ring-2 focus:ring-orange-500 transition"
                required
              />
            </div>
            <div>
              <label className="block text-white">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 rounded-md bg-gray-800 text-white focus:ring-2 focus:ring-orange-500 transition"
                required
              />
            </div>
          </div>

          {/* Topic */}
          <div>
            <label className="block text-white">Topic</label>
            <input
              type="text"
              name="topic"
              value={formData.topic}
              onChange={handleChange}
              className="w-full p-2 rounded-md bg-gray-800 text-white focus:ring-2 focus:ring-orange-500 transition"
              required
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-white">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 h-32 rounded-md bg-gray-800 text-white focus:ring-2 focus:ring-orange-500 transition"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full cursor-pointer flex items-center justify-center gap-2 bg-orange-500 text-white py-2 rounded-md transition-transform transform hover:scale-105 hover:bg-orange-600 disabled:opacity-50"
            disabled={loading}
          >
            {loading ? "Sending..." : "Submit"} <FaArrowRight />
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
