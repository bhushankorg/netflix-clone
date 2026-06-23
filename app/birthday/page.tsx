"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LetterContent from "@/components/LetterContent";

// Particle component
function FloatingParticle({ delay }: { delay: number }) {
  const randomX = Math.random() * 100;
  const randomDuration = 8 + Math.random() * 12;
  const randomSize = 2 + Math.random() * 3;

  return (
    <motion.div
      initial={{ opacity: 0, y: "100vh", x: `${randomX}vw` }}
      animate={{
        opacity: [0, 0.6, 0.6, 0],
        y: "-10vh",
        x: [`${randomX}vw`, `${randomX + (Math.random() * 10 - 5)}vw`],
      }}
      transition={{
        duration: randomDuration,
        delay,
        repeat: Infinity,
        ease: "linear",
      }}
      className="absolute rounded-full bg-red-400/60 pointer-events-none"
      style={{ width: randomSize, height: randomSize }}
    />
  );
}

// Floating memory photo placeholder
function FloatingPhoto({ src, delay, x, y }: { src: string; delay: number; x: string; y: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, rotate: -4 }}
      animate={{
        opacity: [0, 0.7, 0.7, 0],
        scale: [0.8, 1, 1, 0.8],
        rotate: [-4, 2, -2, 4],
        y: [0, -20, 0, -10, 0],
      }}
      transition={{
        duration: 10,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="absolute rounded-lg overflow-hidden shadow-2xl border border-white/10"
      style={{ left: x, top: y, width: 100, height: 100 }}
    >
      <div className="w-full h-full bg-gradient-to-br from-neutral-800 to-neutral-700 flex items-center justify-center">
        <span className="text-white/10 text-2xl">📸</span>
      </div>
    </motion.div>
  );
}

export default function BirthdayPage() {
  const [revealed, setRevealed] = useState(false);
  const [showLetter, setShowLetter] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setRevealed(true), 800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (revealed) {
      const timer = setTimeout(() => setShowLetter(true), 2000);
      return () => clearTimeout(timer);
    }
  }, [revealed]);

  return (
    <main className="relative bg-black min-h-screen overflow-hidden flex flex-col items-center justify-start">
      {/* Particles */}
      {Array.from({ length: 18 }).map((_, i) => (
        <FloatingParticle key={i} delay={i * 1.2} />
      ))}

      {/* Floating memory photos */}
      <FloatingPhoto src="" delay={2} x="5%" y="20%" />
      <FloatingPhoto src="" delay={4} x="80%" y="15%" />
      <FloatingPhoto src="" delay={6} x="8%" y="65%" />
      <FloatingPhoto src="" delay={5} x="78%" y="60%" />

      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-red-950/30 via-black to-black pointer-events-none" />

      {/* Main content */}
      <div className="relative z-10 w-full max-w-2xl mx-auto px-6 sm:px-10 pt-24 pb-24 text-center">
        <AnimatePresence>
          {revealed && (
            <>
              {/* Happy Birthday title */}
              <motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", damping: 14, delay: 0.2 }}
                className="mb-2"
              >
                <span className="text-5xl">🎂</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight mb-2"
              >
                Happy Birthday
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <span className="text-5xl sm:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-red-300 to-rose-400">
                  Piyusha
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="w-16 h-0.5 bg-gradient-to-r from-transparent via-red-500 to-transparent mx-auto my-8"
              />

              {/* Letter section */}
              <AnimatePresence>
                {showLetter && (
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-left"
                  >
                    <div className="bg-neutral-950/80 backdrop-blur-sm border border-white/8 rounded-2xl p-8 sm:p-10 shadow-2xl">
                      <p className="text-red-400 text-xs font-semibold uppercase tracking-widest mb-6">
                        A Letter
                      </p>
                      <LetterContent />
                      <div className="mt-8 pt-6 border-t border-white/8">
                        <p className="text-gray-400 text-sm text-right italic">
                          — Bhushan
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Footer */}
              {showLetter && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="mt-12 text-center"
                >
                  <p className="text-gray-600 text-xs uppercase tracking-widest">
                    PIYUSHA+ · More memories loading...
                  </p>
                </motion.div>
              )}
            </>
          )}
        </AnimatePresence>
      </div>

      {/* Optional: background music (add your audio file at /public/music/birthday.mp3) */}
      <audio ref={audioRef} src="/music/birthday.mp3" loop />
    </main>
  );
}
