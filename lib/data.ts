import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.jpg";
import rmtdevImg from "@/public/rmtdev.jpg";
import wordanalyticsImg from "@/public/wordanalytics.jpg";

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
    title: "Sales Executive and Operations Manager",
    location: "UAE and Oman",
    description:
      "Working as a Sales and Operations Manager at Al Rabeh Heavy Equipment Spare Parts Establishment in UAE. Boosts the Company’s sales by attracting good buyers. I am also actively contributing to the efficient management of various activities within the organization.",
    icon: React.createElement(FaReact),
    date: "2018 - present",
  },
  {
    title: "Sales Manager and Executive",
    location: "Pakistan",
    description:
      "I have played a pivotal role in propelling Seiko Filters to new heights in the market. , I found the need for new products in the market and helped the company in launching and distributing it in all the cities of Pakistan.",
    icon: React.createElement(FaReact),
    date: "2014 - 2018",
  },
  {
    title: "Call center Agent ",
    location: "Pakistan",
    description:
      "During this tenure, I honed my communication and persuasion skills, consistently meeting and exceeding sales targets. My role involved engaging potential customers, providing detailed product information, and tailoring solutions to meet their needs.",
    icon: React.createElement(FaReact),
    date: "2013 - 2014",
  },
] as const;

export const projectsData = [
  {
    title: "Expanding Market Share in Dynamic China",
    description:
      "Successfully identified and cultivated a robust portfolio of new clientele in the dynamic market of China",
    tags: ["Team Leadership", "Sales Executive"],
    imageUrl: corpcommentImg,
  },
  {
    title: " Dynamic Leadership in Oman",
    description:
      "Stepped into the role of Manager at the OMAN branch of the company.",
    tags: ["Team Leadership", "Managing Roles", "Training New Employees", "Sales Executive"],
    imageUrl: wordanalyticsImg,
  },
  {
    title: "Navigating and Innovating in Pakistan",
    description:
      "Facilitated the successful launch and widespread distribution of new products throughout Pakistan",
    tags: ["Travel Pakistan","Meeting with clients", "Need of New products"],
    imageUrl: rmtdevImg,
  },
] as const;

export const skillsData = [
  "Sales and Marketing Strategy",
  "Operations Management",
  "International Business Development",
  "Customer Relationship management",
  "Team Leadership and Training",
  "Market Expansion and Penetration",
  "Project Management.",
] as const;
