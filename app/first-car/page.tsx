"use client";

import Navbar from "@/components/Navbar";
import PhotoGrid from "@/components/PhotoGrid";
import { motion } from "framer-motion";
import { ArrowLeft, MapPin, Star } from "lucide-react";
import Link from "next/link";

const bucketList = [
  "Goa road trip at sunrise",
  "Mountains in Himachal",
  "Drive along the coast",
  "Midnight drive to nowhere special",
  "First long highway stretch",
  "Camping under the stars",
];

const timeline = [
  { label: "Decision Made", note: "The conversation that started it all" },
  { label: "Research Phase", note: "Hours of YouTube reviews and test drives" },
  { label: "The Day It Arrived", note: "The first moment it was really ours" },
  { label: "First Drive", note: "Windows down. Music up. No destination." },
  { label: "First Road Trip", note: "Coming soon..." },
];

export default function FirstCarPage() {
  return (
    <main className="bg-black min-h-screen pb-24">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[60vh] min-h-[380px] flex items-end overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-950 via-red-950 to-neutral-900" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

        {/* Decorative car silhouette placeholder */}
        <div className="absolute inset-0 flex items-center justify-center opacity-5">
          <span className="text-[20rem] select-none">🚗</span>
        </div>

        <div className="relative z-10 max-w-screen-xl mx-auto px-6 sm:px-10 pb-10 w-full">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}>
            <Link
              href="/home"
              className="inline-flex items-center gap-1 text-gray-400 hover:text-white text-sm mb-4 transition-colors"
            >
              <ArrowLeft size={14} />
              Back
            </Link>

            <div className="flex flex-wrap gap-2 mb-3">
              {["New Release", "Adventure", "Episode 6"].map((t) => (
                <span
                  key={t}
                  className="text-xs bg-white/10 border border-white/20 text-gray-300 px-2 py-0.5 rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>

            <p className="text-red-400 text-xs font-semibold uppercase tracking-widest mb-1">
              Special Edition
            </p>
            <h1 className="text-white text-4xl sm:text-6xl font-black tracking-tight leading-none">
              Our First Car
            </h1>
            <p className="text-gray-300 text-base mt-2 max-w-lg">
              A new chapter unlocked. The world just got a little bigger.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Body */}
      <div className="max-w-screen-xl mx-auto px-6 sm:px-10 mt-10 space-y-14">
        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-2xl"
        >
          <h2 className="text-white font-bold text-2xl mb-4">About This Chapter</h2>
          <p className="text-gray-300 text-base leading-relaxed mb-4">
            Getting a first car together isn&apos;t just a practical milestone — it&apos;s a
            signal that the adventures are only getting started. Suddenly every
            weekend has a different radius. Every idea of &quot;let&apos;s go somewhere&quot;
            becomes a real plan.
          </p>
          <p className="text-gray-400 text-sm leading-relaxed">
            This page is dedicated to that moment — and to all the drives, playlists,
            pit-stops, and detours still ahead.
          </p>
        </motion.div>

        {/* Quote */}
        <motion.blockquote
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="border-l-4 border-red-500 pl-5 py-2"
        >
          <p className="text-gray-200 text-xl font-serif italic">
            &quot;The best views come after the hardest drives.&quot;
          </p>
        </motion.blockquote>

        {/* Car timeline */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
        >
          <h2 className="text-white font-bold text-xl mb-6">The Journey So Far</h2>
          <div className="relative border-l-2 border-red-500/40 pl-6 space-y-8">
            {timeline.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative"
              >
                <div className="absolute -left-[33px] top-1 w-3.5 h-3.5 rounded-full bg-red-500 border-2 border-black" />
                <h3 className="text-white font-semibold text-base">{t.label}</h3>
                <p className="text-gray-400 text-sm mt-0.5">{t.note}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Photo gallery */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <PhotoGrid images={[]} title="Photo Gallery" />
        </motion.div>

        {/* Road trip bucket list */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h2 className="text-white font-bold text-xl mb-4 flex items-center gap-2">
            <MapPin size={18} className="text-red-400" />
            Road Trip Bucket List
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {bucketList.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="flex items-center gap-3 bg-neutral-900 border border-white/8 rounded-lg px-4 py-3 hover:border-red-500/30 transition-colors"
              >
                <Star size={14} className="text-red-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Memory notes */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55 }}
          className="bg-neutral-900 border border-white/8 rounded-xl p-6 max-w-xl"
        >
          <p className="text-red-400 text-xs font-semibold uppercase tracking-widest mb-3">
            Memory Note
          </p>
          <p className="text-gray-300 text-sm leading-relaxed italic">
            [Add your personal memory note about the car here — the story of how
            you decided, what you felt on the first drive, the first song you
            played.]
          </p>
        </motion.div>
      </div>
    </main>
  );
}
