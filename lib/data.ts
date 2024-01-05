import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Freelancer",
    location: "",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2022 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Gaztron",
    description:
      "Build a Website for Gaztron, India’s leading manufacturer of high-quality On-Site PSA Nitrogen & Oxygen Gas Generator Plants.",
    tags: ["Angular.js", "Node.js", "MongoDB", "Bootstrap"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Personal Portfolio",
    description:
      "My personal portfolio showcases a collection of projects, skills, and passion for innovative web developmen.",
    tags: ["Reactjs", "Next.js", "MongoDB", "Tailwind"],
    imageUrl: wordanalyticsImg,
  },
  {
    title: "Cinemon",
    description:
      "Mobile app for cinema and movie information. Enables user to explore upcoming movies and view showtimes at different theaters.",
    tags: ["Flutter", "Firebase"],
    imageUrl: rmtdevImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Angular.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "GraphQL",
  "Express",
  "PostgreSQL",
  "Python",
] as const;
