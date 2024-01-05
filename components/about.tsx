"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        As a <span className="font-medium">Freelancer</span>, I leverage my
        skills in React.js, Angular.js, Next.js, and Flutter to create and
        deploy scalable and user-friendly applications for various clients. I
        have a Bachelor of Science in{" "}
        <span className="font-medium">Computer Science</span>
        from University of Engineering and Technology, Lahore. I have been
        working as a freelance developer for a year. I am passionate about
        learning new technologies and solving complex problems with innovative
        solutions. My mission is to help businesses and organizations achieve
        their goals and improve their performance with the power of cloud
        computing and software development.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and playing with my dog. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about <span className="font-medium">Kubenetes</span>. I'm also
        learning how to play the Chess.
      </p>
    </motion.section>
  );
}
