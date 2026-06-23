"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Play, Clock } from "lucide-react";
import { Memory } from "@/data/memories";

interface EpisodeCardProps {
  memory: Memory;
  index?: number;
}

export default function EpisodeCard({ memory, index = 0 }: EpisodeCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      whileHover={{ scale: 1.03 }}
      className="flex-shrink-0 w-64 sm:w-72 group cursor-pointer"
    >
      <Link href={`/episode/${memory.id}`}>
        {/* Thumbnail */}
        <div className="relative aspect-video rounded-md overflow-hidden bg-neutral-800 mb-2">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
            style={{
              backgroundImage: memory.images[0]
                ? `url(${memory.images[0]})`
                : undefined,
            }}
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />

          {/* Episode badge */}
          <div className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded">
            EP {memory.episode}
          </div>

          {/* Play button on hover */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="bg-white/90 rounded-full p-3">
              <Play size={20} fill="black" className="text-black" />
            </div>
          </div>

          {/* Progress bar */}
          {memory.progress > 0 && (
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-600">
              <div
                className="h-full bg-red-500"
                style={{ width: `${memory.progress}%` }}
              />
            </div>
          )}
        </div>

        {/* Meta */}
        <div>
          <h3 className="text-white text-sm font-semibold leading-tight truncate">
            {memory.title}
          </h3>
          <p className="text-gray-400 text-xs mt-0.5 truncate">{memory.subtitle}</p>
          <div className="flex items-center gap-1 mt-1 text-gray-500 text-xs">
            <Clock size={11} />
            <span>{memory.date}</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
