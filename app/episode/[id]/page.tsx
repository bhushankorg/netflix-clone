"use client";

import { use } from "react";
import { memories } from "@/data/memories";
import Navbar from "@/components/Navbar";
import PhotoGrid from "@/components/PhotoGrid";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Tag } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ id: string }>;
}

export default function EpisodePage({ params }: Props) {
  const { id } = use(params);
  const memory = memories.find((m) => m.id === id);

  if (!memory) notFound();

  return (
    <main className="bg-black min-h-screen pb-24">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[55vh] min-h-[340px] flex items-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-neutral-900"
          style={
            memory.images[0]
              ? { backgroundImage: `url(${memory.images[0]})` }
              : {}
          }
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />

        <div className="relative z-10 max-w-screen-xl mx-auto px-6 sm:px-10 pb-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Link
              href="/home"
              className="inline-flex items-center gap-1 text-gray-400 hover:text-white text-sm mb-4 transition-colors"
            >
              <ArrowLeft size={14} />
              Back
            </Link>
            <div className="flex flex-wrap gap-2 mb-3">
              {memory.genre.map((g) => (
                <span
                  key={g}
                  className="text-xs bg-white/10 border border-white/20 text-gray-300 px-2 py-0.5 rounded-full"
                >
                  {g}
                </span>
              ))}
            </div>
            <p className="text-red-400 text-xs font-semibold uppercase tracking-widest mb-1">
              Episode {memory.episode}
            </p>
            <h1 className="text-white text-4xl sm:text-5xl font-black tracking-tight leading-none">
              {memory.title}
            </h1>
            <p className="text-gray-300 text-base mt-2">{memory.subtitle}</p>
          </motion.div>
        </div>
      </section>

      {/* Body */}
      <div className="max-w-screen-xl mx-auto px-6 sm:px-10 mt-10 space-y-12">
        {/* Meta row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap gap-6 text-sm text-gray-400"
        >
          <span className="flex items-center gap-1.5">
            <Calendar size={14} className="text-red-400" />
            {memory.date}
          </span>
          <span className="flex items-center gap-1.5">
            <Tag size={14} className="text-red-400" />
            {memory.genre.join(" · ")}
          </span>
          {memory.progress > 0 && (
            <span className="text-green-400">{memory.progress}% watched</span>
          )}
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="max-w-2xl"
        >
          <h2 className="text-white font-bold text-xl mb-3">About This Episode</h2>
          <p className="text-gray-300 text-base leading-relaxed mb-4">
            {memory.description}
          </p>
          <p className="text-gray-400 text-sm leading-relaxed">
            {memory.longDescription}
          </p>
        </motion.div>

        {/* Quote */}
        <motion.blockquote
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="border-l-4 border-red-500 pl-5 py-2"
        >
          <p className="text-gray-200 text-lg font-serif italic leading-relaxed">
            &quot;{memory.quote}&quot;
          </p>
        </motion.blockquote>

        {/* Favourite moment */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="bg-neutral-900 border border-white/8 rounded-xl p-6"
        >
          <p className="text-red-400 text-xs font-semibold uppercase tracking-widest mb-2">
            Favourite Moment
          </p>
          <p className="text-white text-base">{memory.favoriteMoment}</p>
        </motion.div>

        {/* Photo gallery */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <PhotoGrid images={memory.images} title="Gallery" />
        </motion.div>
      </div>
    </main>
  );
}
