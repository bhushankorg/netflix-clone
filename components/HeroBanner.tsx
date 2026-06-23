"use client";

import { motion } from "framer-motion";
import { Play, Info } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface HeroBannerProps {
  title?: string;
  subtitle?: string;
  description?: string;
  imageSrc?: string;
  primaryHref?: string;
  secondaryHref?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
  genres?: string[];
}

export default function HeroBanner({
  title = "PIYUSHA+",
  subtitle = "Romance • Comedy • Adventure • Drama",
  description = "Two strangers accidentally crossed paths and slowly became each other's favourite person.",
  imageSrc = "/images/IMG-20260227-WA0005.webp",
  primaryHref = "/home",
  secondaryHref = "/timeline",
  primaryLabel = "Continue Watching",
  secondaryLabel = "Our Story",
  genres = ["Romance", "Comedy", "Adventure", "Drama"],
}: HeroBannerProps) {
  return (
    <section className="relative h-screen min-h-[600px] flex items-end overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-neutral-900">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-50"
          style={{ backgroundImage: `url(${imageSrc})` }}
        />
      </div>

      {/* Cinematic gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-screen-xl mx-auto px-6 sm:px-10 pb-20 sm:pb-28 w-full">
        {/* Genre pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap gap-2 mb-4"
        >
          {genres.map((g) => (
            <span
              key={g}
              className="text-xs text-gray-300 bg-white/10 border border-white/20 px-3 py-1 rounded-full backdrop-blur-sm"
            >
              {g}
            </span>
          ))}
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tight text-white leading-none mb-2"
        >
          {title.replace("+", "")}
          <span className="text-red-500">+</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="text-gray-400 text-sm uppercase tracking-widest mb-5 font-medium"
        >
          {subtitle}
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55 }}
          className="text-gray-200 text-base sm:text-lg max-w-lg leading-relaxed mb-8"
        >
          {description}
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65 }}
          className="flex flex-wrap gap-3"
        >
          <Link
            href={primaryHref}
            className="flex items-center gap-2 bg-white text-black font-semibold px-7 py-3 rounded-md hover:bg-gray-200 transition-colors text-sm sm:text-base"
          >
            <Play size={18} fill="black" />
            {primaryLabel}
          </Link>
          <Link
            href={secondaryHref}
            className="flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white border border-white/30 font-semibold px-7 py-3 rounded-md hover:bg-white/30 transition-colors text-sm sm:text-base"
          >
            <Info size={18} />
            {secondaryLabel}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
