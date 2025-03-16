"use client"

import React from "react"
import { certificationsData } from "@/lib/data"
import SectionHeading from "./SectionHeading"
import { useTheme } from "@/context/theme-context"
import { ExperienceLabel } from "./ExperienceLabel"
import { useLocale } from "next-intl"

export default function Certification() {
  const { theme } = useTheme()
  const activeLocale = useLocale()
  const experienceDataShown = certificationsData

  return (
    <section className="sm:mb-40 relative mb-20">
      <ExperienceLabel />
      <SectionHeading>
        {"My Certification"}
      </SectionHeading>
      <div className="flex flex-col gap-6 items-center">
        {experienceDataShown.map((item, index) => (
          <div
            key={index}
            className="w-full max-w-2xl dark:bg-slate-800 dark:text-slate-100 bg-slate-100 border-4 border-yellow-500 rounded-2xl p-6 pb-8 flex flex-col items-center text-center"
          >
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 border-4 border-4 border-gold
 flex items-center justify-center shadow-md">
              {item.icon}
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">{item.date}</p>
            <h3 className="font-bold capitalize mt-2">{item.title}</h3>
            <p className="font-normal !mt-1">{item.location}</p>
            <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}