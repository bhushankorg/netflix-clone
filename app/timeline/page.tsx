"use client";

import Navbar from "@/components/Navbar";
import TimelineEvent from "@/components/TimelineEvent";
import { timeline } from "@/data/memories";
import { motion } from "framer-motion";

export default function TimelinePage() {
  return (
    <main className="bg-black min-h-screen pb-24">
      <Navbar />

      <div className="pt-24 max-w-screen-lg mx-auto px-6 sm:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <p className="text-red-400 text-xs font-semibold uppercase tracking-widest mb-3">
            The Story So Far
          </p>
          <h1 className="text-white text-4xl sm:text-5xl font-black tracking-tight leading-none mb-4">
            Our Timeline
          </h1>
          <p className="text-gray-400 text-base max-w-md mx-auto leading-relaxed">
            Every great story has a chronology. This is ours — from the first
            message to right now.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Centre vertical line on md+ */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-red-500/60 via-red-500/20 to-transparent -translate-x-1/2" />

          <div className="space-y-10">
            {timeline.map((milestone, i) => (
              <TimelineEvent
                key={milestone.id}
                milestone={milestone}
                index={i}
                isLast={i === timeline.length - 1}
              />
            ))}
          </div>
        </div>

        {/* Footer note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 text-sm italic">
            More episodes loading...
          </p>
        </motion.div>
      </div>
    </main>
  );
}
