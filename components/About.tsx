"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { useSectionInView } from "@/lib/hooks";
import { useLocale, useTranslations } from "next-intl";
import Banner from './Banner';
import { images } from './data';

export default function About() {
  
  const { ref } = useSectionInView("About");
  const t = useTranslations("AboutSection");
  const sectionLan = useTranslations("SectionName");
  const activeLocale = useLocale();

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "module";
    script.src = "../src_banner/main.tsx"; // Adjust path as needed
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // Cleanup the script on unmount
    };
  }, []);

  return (
    <motion.section
      ref={ref}
      className="mb-50 max-w-[45rem] text-start leading-8 sm:mb-40 scroll-mt-28 mb-28 "
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>{sectionLan("about")}</SectionHeading>
      <p className="mb-3">
        My journey into programming kicked off during my undergrad in
        <span className="font-medium italic">
          {" "}
          College
        </span>{" "}
        at {}
        <span className="italic underline">
          <a href="http://www.isi.rnu.tn/" target="_blank">
            Institue of Computer Science
          </a>
        </span>{" "}
        As a freshman, I got my feet wet with the basics of computer science, databases, and Python. But what truly sparked my passion was Competitive Programming, I used C++ to solve +300 problems on differents platforms like,{" "}
        <a
          href="https://codeforces.com/profile/imem"
          target="_blank"
          className="italic underline"
        >
          Leetocde and codeforces.{" "}
        </a>
        This experience opened my eyes to the charm of web development———
        <span className="font-medium italic">
          literally, you can build anything you envision with code.
        </span>
      </p>
      <Banner images={images} speed={20000} />
      </motion.section>

  );
}
