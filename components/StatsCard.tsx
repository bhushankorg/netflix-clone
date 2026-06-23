"use client";

import { motion } from "framer-motion";
import { Stat } from "@/data/memories";

interface StatsCardProps {
  stat: Stat;
  index?: number;
}

export default function StatsCard({ stat, index = 0 }: StatsCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      whileHover={{ y: -4 }}
      className="bg-neutral-900 border border-white/10 hover:border-red-500/40 rounded-xl p-6 flex flex-col gap-2 transition-colors"
    >
      <span className="text-4xl sm:text-5xl font-black text-white tracking-tight">
        {stat.value}
      </span>
      <span className="text-gray-200 font-semibold text-sm">{stat.label}</span>
      {stat.sublabel && (
        <span className="text-gray-500 text-xs">{stat.sublabel}</span>
      )}
    </motion.div>
  );
}
