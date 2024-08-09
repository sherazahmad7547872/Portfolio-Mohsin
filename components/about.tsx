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
        As a <span className="font-medium"> Sales and Operations Manager in the UAE and Pakistan</span>, I have consistently elevated company sales, effectively managed operations, and played a pivotal role in propelling organizations to new heights.{" "}
        <span className="font-medium">From dynamic market expansions in China to strategic leadership in Oman and successful product launches nationwide in Pakistan, </span>
        my diverse experiences showcase a comprehensive skill set, including <span className="font-bold">customer relationship management, team leadership, and innovative market penetration.</span> I am adept at navigating global business landscapes, fostering key relationships, and driving impactful results.{" "}
        <span className="font-bold">With a Master's in Business Administration from Barani Institute of Management Sciences and Bachelor of Arts from Allama Iqbal Open University, I bring a wealth of expertise in international business development, sales strategy, and operations management</span>

        
      </p>

      <p>
        <span>When I'm not working</span>, I enjoy
        watching movies, and spending time with nature. I also enjoy{" "}
        <span className="font-medium">learning new things.</span>. I am currently
        learning about <span className="font-medium">New Market and Leadership Qualities which will further enhance my skill set</span>.
      </p>
    </motion.section>
  );
}
