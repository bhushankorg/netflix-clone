"use client";

import Navbar from "@/components/Navbar";
import GalleryCarousel from "@/components/GalleryCarousel";
import EpisodeCard from "@/components/EpisodeCard";
import MemoryCard from "@/components/MemoryCard";
import TopPickCardComponent from "@/components/TopPickCard";
import PasswordModal from "@/components/PasswordModal";
import { memories, trendingMemories, topPicks } from "@/data/memories";
import { useState } from "react";
import { Lock, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function HomePage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <main className="bg-black min-h-screen pb-20">
      <Navbar />

      {/* Top spacer so content clears the navbar */}
      <div className="pt-20" />

      {/* ── Featured banner (small) ───────────────────────────── */}
      <section className="max-w-screen-xl mx-auto px-4 sm:px-8 mb-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative rounded-xl overflow-hidden bg-gradient-to-r from-red-950 via-neutral-900 to-neutral-900 border border-white/8 p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
        >
          <div>
            <p className="text-red-400 text-xs font-semibold uppercase tracking-widest mb-1">
              Now Streaming
            </p>
            <h1 className="text-white text-2xl sm:text-3xl font-black tracking-tight">
              PIYUSHA<span className="text-red-500">+</span>
            </h1>
            <p className="text-gray-400 text-sm mt-1 max-w-sm">
              Romance • Comedy • Adventure • Drama
            </p>
          </div>
          <Link
            href="/"
            className="text-sm text-gray-400 hover:text-white flex items-center gap-1 transition-colors"
          >
            View Intro <ChevronRight size={14} />
          </Link>
        </motion.div>
      </section>

      {/* ── Continue Watching ─────────────────────────────────── */}
      <GalleryCarousel title="Continue Watching">
        {memories.map((m, i) => (
          <EpisodeCard key={m.id} memory={m} index={i} />
        ))}
      </GalleryCarousel>

      {/* ── Trending Memories ─────────────────────────────────── */}
      <GalleryCarousel title="Trending Memories">
        {trendingMemories.map((c, i) => (
          <MemoryCard key={c.id} card={c} index={i} />
        ))}
      </GalleryCarousel>

      {/* ── Top Picks for Piyusha ─────────────────────────────── */}
      <GalleryCarousel title="Top Picks for Piyusha">
        {topPicks.map((c, i) => (
          <TopPickCardComponent key={c.id} card={c} index={i} />
        ))}
      </GalleryCarousel>

      {/* ── Secret Episode card ───────────────────────────────── */}
      <section className="max-w-screen-xl mx-auto px-4 sm:px-8 py-10">
        <h2 className="text-white text-lg sm:text-xl font-bold mb-4">
          Exclusive Content
        </h2>
        <motion.div
          whileHover={{ scale: 1.01 }}
          onClick={() => setModalOpen(true)}
          className="relative cursor-pointer rounded-xl overflow-hidden bg-neutral-900 border border-white/10 hover:border-red-500/40 transition-colors p-8 flex items-center gap-6 max-w-lg"
        >
          {/* Lock icon */}
          <div className="w-14 h-14 rounded-full bg-red-600/20 border border-red-500/30 flex items-center justify-center flex-shrink-0">
            <Lock size={24} className="text-red-400" />
          </div>
          <div>
            <span className="inline-block text-[10px] font-bold uppercase bg-red-600 text-white px-2 py-0.5 rounded mb-2">
              Secret Episode
            </span>
            <h3 className="text-white font-bold text-lg">🔒 Locked</h3>
            <p className="text-gray-400 text-sm mt-0.5">
              Access code required. You know what it is.
            </p>
          </div>
        </motion.div>
      </section>

      <PasswordModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        correctPassword="2306"
        redirectTo="/birthday"
      />
    </main>
  );
}
