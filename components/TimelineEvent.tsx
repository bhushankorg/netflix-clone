"use client";

import { motion } from "framer-motion";
import { TimelineMilestone } from "@/data/memories";

interface TimelineEventProps {
  milestone: TimelineMilestone;
  index: number;
  isLast?: boolean;
}

export default function TimelineEvent({ milestone, index, isLast = false }: TimelineEventProps) {
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`relative flex items-center gap-6 md:gap-0 ${
        isLeft ? "md:flex-row" : "md:flex-row-reverse"
      } mb-0`}
    >
      {/* Content card — takes up half width on md+ */}
      <div className={`flex-1 md:max-w-[calc(50%-2rem)] ${isLeft ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
        <div className="bg-neutral-900 border border-white/10 rounded-xl p-5 hover:border-red-500/40 transition-colors">
          <span className="text-2xl mb-2 block">{milestone.emoji}</span>
          <p className="text-red-400 text-xs font-semibold uppercase tracking-widest mb-1">
            {milestone.date}
          </p>
          <h3 className="text-white font-bold text-lg mb-1">{milestone.title}</h3>
          <p className="text-gray-400 text-sm leading-relaxed">{milestone.description}</p>
        </div>
      </div>

      {/* Centre line & dot */}
      <div className="hidden md:flex flex-col items-center w-16 flex-shrink-0 relative">
        <div className="w-4 h-4 rounded-full bg-red-500 border-4 border-black z-10 ring-2 ring-red-500/30" />
        {!isLast && (
          <div className="absolute top-4 bottom-0 w-0.5 bg-gradient-to-b from-red-500/60 to-transparent h-full" />
        )}
      </div>

      {/* Spacer for other side */}
      <div className="hidden md:block flex-1" />
    </motion.div>
  );
}
