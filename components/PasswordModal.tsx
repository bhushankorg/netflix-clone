"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, X, Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";

interface PasswordModalProps {
  isOpen: boolean;
  onClose: () => void;
  correctPassword?: string;
  redirectTo?: string;
}

export default function PasswordModal({
  isOpen,
  onClose,
  correctPassword = "2306",
  redirectTo = "/birthday",
}: PasswordModalProps) {
  const [value, setValue] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [error, setError] = useState(false);
  const [shake, setShake] = useState(false);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (value === correctPassword) {
      onClose();
      router.push(redirectTo);
    } else {
      setError(true);
      setShake(true);
      setTimeout(() => setShake(false), 500);
      setTimeout(() => setError(false), 2000);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal */}
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: shake ? [1, 1.02, 0.98, 1.02, 0.98, 1] : 1, opacity: 1 }}
            exit={{ scale: 0.85, opacity: 0 }}
            transition={{ type: "spring", damping: 20 }}
            className="relative z-10 bg-neutral-950 border border-white/10 rounded-2xl p-8 w-full max-w-sm shadow-2xl"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors"
            >
              <X size={18} />
            </button>

            <div className="flex flex-col items-center text-center mb-6">
              <div className="w-14 h-14 rounded-full bg-red-600/20 border border-red-500/40 flex items-center justify-center mb-4">
                <Lock size={24} className="text-red-400" />
              </div>
              <h2 className="text-white text-xl font-bold">Secret Episode</h2>
              <p className="text-gray-400 text-sm mt-1">
                Enter the access code to unlock this episode.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <input
                  type={showPw ? "text" : "password"}
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  placeholder="Access code"
                  maxLength={20}
                  className={`w-full bg-neutral-900 border ${
                    error ? "border-red-500" : "border-white/10"
                  } text-white placeholder-gray-600 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-red-500 transition-colors pr-10`}
                />
                <button
                  type="button"
                  onClick={() => setShowPw((s) => !s)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition-colors"
                >
                  {showPw ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>

              <AnimatePresence>
                {error && (
                  <motion.p
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-red-400 text-xs text-center"
                  >
                    Incorrect code. Try again.
                  </motion.p>
                )}
              </AnimatePresence>

              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-lg transition-colors text-sm"
              >
                Unlock Episode
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
