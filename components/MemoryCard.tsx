"use client";

import { motion } from "framer-motion";
import { TrendingCard } from "@/data/memories";

interface MemoryCardProps {
  card: TrendingCard;
  index?: number;
  onClick?: () => void;
}

export default function MemoryCard({ card, index = 0, onClick }: MemoryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07 }}
      whileHover={{ scale: 1.04 }}
      onClick={onClick}
      className="flex-shrink-0 w-44 sm:w-52 cursor-pointer group"
    >
      {/* Card image */}
      <div className="relative aspect-[2/3] rounded-md overflow-hidden bg-neutral-800 mb-2">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
          style={{ backgroundImage: card.image ? `url(${card.image})` : undefined }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

        {/* Tag */}
        <div className="absolute top-2 right-2 bg-red-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded">
          {card.tag}
        </div>

        {/* Title overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-3">
          <h3 className="text-white text-sm font-semibold leading-tight">{card.title}</h3>
          <p className="text-gray-300 text-xs mt-0.5 line-clamp-2">{card.description}</p>
        </div>
      </div>
    </motion.div>
  );
}
