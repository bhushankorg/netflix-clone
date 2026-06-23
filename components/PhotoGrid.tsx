"use client";

import { motion } from "framer-motion";

interface PhotoGridProps {
  images: string[];
  title?: string;
}

const placeholderColors = [
  "from-rose-900 to-rose-800",
  "from-red-900 to-red-800",
  "from-neutral-800 to-neutral-700",
  "from-stone-900 to-stone-800",
  "from-zinc-900 to-zinc-800",
  "from-slate-900 to-slate-800",
];

export default function PhotoGrid({ images, title }: PhotoGridProps) {
  // Use placeholder styling when no real images
  const items = images.length > 0 ? images : Array(6).fill("");

  return (
    <div>
      {title && (
        <h3 className="text-white font-bold text-lg mb-4">{title}</h3>
      )}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
        {items.map((src, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            whileHover={{ scale: 1.02 }}
            className={`relative aspect-square rounded-lg overflow-hidden bg-gradient-to-br ${
              placeholderColors[i % placeholderColors.length]
            } cursor-pointer`}
          >
            {src ? (
              <img
                src={src}
                alt={`Memory ${i + 1}`}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white/20 text-xs font-medium uppercase tracking-widest">
                  Memory
                </span>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
