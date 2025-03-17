import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Aryan Singh | Full Stack Developer & Web Designer",
  description:
    "Welcome to the official portfolio of Aryan Singh, a highly skilled Full Stack Developer and Web Designer specializing in modern web technologies, including the MERN stack. Explore my projects, skills, and experience in building scalable, user-friendly, and visually appealing web applications.",
  keywords:
    "Aryan Singh, Full Stack Developer, Web Developer, MERN Stack Developer, React.js, Node.js, Express.js, MongoDB, Frontend Developer, Backend Developer, JavaScript, Portfolio Website, Software Engineer, UI/UX Designer",
  author: "Aryan Singh",
  url: "https://aryan0singh.netlify.app/",
  image: "https://aryan0singh.netlify.app/assets/profile.jpg", // Ensure the path is correct
  ogTitle: "Aryan Singh - Full Stack Developer & Web Designer",
  ogDescription:
    "Discover the portfolio of Aryan Singh, a Full Stack Developer and Web Designer specializing in React, Node.js, and modern web technologies. Explore my latest projects and skills.",
  ogImage: "https://aryan0singh.netlify.app/assets/profile.jpg",
  ogUrl: "https://aryan0singh.netlify.app/",
  ogType: "website",
  twitterCard: "summary_large_image",
  twitterTitle: "Aryan Singh | Full Stack Developer",
  twitterDescription:
    "Explore the portfolio of Aryan Singh, a Full Stack Developer skilled in the MERN stack and passionate about creating innovative web solutions.",
  twitterImage: "https://aryan0singh.netlify.app/assets/profile.jpg",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
