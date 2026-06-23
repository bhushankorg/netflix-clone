"use client";

import { motion } from "framer-motion";
import { TopPickCard } from "@/data/memories";

interface TopPickCardComponentProps {
  card: TopPickCard;
  index?: number;
}

const tagColors: Record<string, string> = {
  "Highly Rated": "bg-yellow-500 text-black",
  New: "bg-green-500 text-black",
  Upcoming: "bg-blue-500 text-white",
  Trending: "bg-orange-500 text-black",
  Exclusive: "bg-purple-500 text-white",
};

export default function TopPickCardComponent({
  card,
  index = 0,
}: TopPickCardComponentProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      whileHover={{ scale: 1.02, y: -2 }}
      className="flex-shrink-0 w-56 sm:w-64 bg-neutral-900 border border-white/8 hover:border-red-500/30 rounded-xl p-4 transition-all cursor-pointer group"
    >
      {/* Tag */}
      <span
        className={`inline-block text-[10px] font-bold uppercase px-2 py-0.5 rounded mb-3 ${
          tagColors[card.tag] ?? "bg-red-600 text-white"
        }`}
      >
        {card.tag}
      </span>

      {/* Title */}
      <h3 className="text-white font-bold text-base leading-tight mb-1 group-hover:text-red-300 transition-colors">
        {card.title}
      </h3>

      {/* Reason */}
      <p className="text-gray-500 text-xs mb-3 italic">{card.reason}</p>

      {/* Meta */}
      <p className="text-gray-400 text-xs leading-relaxed border-t border-white/5 pt-3">
        {card.metadata}
      </p>
    </motion.div>
  );
}
