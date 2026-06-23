"use client";

import Navbar from "@/components/Navbar";
import StatsCard from "@/components/StatsCard";
import { stats } from "@/data/memories";
import { motion } from "framer-motion";
import { BarChart2 } from "lucide-react";

export default function StatsPage() {
  return (
    <main className="bg-black min-h-screen pb-24">
      <Navbar />

      <div className="pt-24 max-w-screen-xl mx-auto px-6 sm:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-3">
            <BarChart2 size={20} className="text-red-400" />
            <p className="text-red-400 text-xs font-semibold uppercase tracking-widest">
              Relationship Analytics
            </p>
          </div>
          <h1 className="text-white text-4xl sm:text-5xl font-black tracking-tight leading-none mb-3">
            By the Numbers
          </h1>
          <p className="text-gray-400 text-base max-w-lg leading-relaxed">
            A data-driven look at our relationship. Methodology: feelings and memory.
            Accuracy: approximately perfect.
          </p>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-14">
          {stats.map((stat, i) => (
            <StatsCard key={stat.label} stat={stat} index={i} />
          ))}
        </div>

        {/* Fun note */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-neutral-900 border border-white/8 rounded-xl p-6 max-w-xl"
        >
          <p className="text-gray-400 text-xs uppercase tracking-widest mb-2 font-semibold">
            Disclaimer
          </p>
          <p className="text-gray-300 text-sm leading-relaxed">
            These statistics are based on available data and have been independently
            verified by Piyusha herself (whether she knows it or not). The arguments
            stat is particularly well-documented.
          </p>
        </motion.div>
      </div>
    </main>
  );
}
