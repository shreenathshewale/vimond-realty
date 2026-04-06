"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * @fileOverview A unique, high-end architectural loader for ViMond Realty.
 * It uses geometric animations and minimalist blueprint-style lines to set a luxury tone.
 */

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Artificial delay to ensure the premium animation can be appreciated
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
          }}
          className="fixed inset-0 flex flex-col items-center justify-center bg-[#F7F5F2] z-[9999]"
        >
          <div className="relative w-48 h-48 flex items-center justify-center">
            {/* Architectural Grid Lines (The Blueprint) */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "100%", opacity: 1 }}
              transition={{ duration: 1, ease: "circOut" }}
              className="absolute h-[0.5px] bg-[#8A7A63]/20 top-1/2 left-0"
            />
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "100%", opacity: 1 }}
              transition={{ duration: 1, ease: "circOut" }}
              className="absolute w-[0.5px] bg-[#8A7A63]/20 left-1/2 top-0"
            />
            
            {/* Minimalist Geometric Shape */}
            <motion.div
              initial={{ scale: 0, rotate: 0, opacity: 0 }}
              animate={{ 
                scale: [0.8, 1, 0.8], 
                rotate: [45, 225, 405],
                opacity: 1 
              }}
              transition={{ 
                duration: 2.5, 
                ease: "easeInOut",
                repeat: Infinity,
              }}
              className="w-16 h-16 border border-[#8A7A63] border-t-transparent border-r-transparent"
            />

            <motion.div
              initial={{ scale: 0, rotate: 0, opacity: 0 }}
              animate={{ 
                scale: [1, 0.8, 1], 
                rotate: [-45, -225, -405],
                opacity: 1 
              }}
              transition={{ 
                duration: 2.5, 
                ease: "easeInOut",
                repeat: Infinity,
              }}
              className="absolute w-16 h-16 border border-[#8A7A63]/40 border-b-transparent border-l-transparent"
            />

            {/* Brand Signature */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
              className="absolute -bottom-12 flex flex-col items-center gap-2"
            >
              <span className="text-[10px] tracking-[1em] uppercase text-[#8A7A63] font-bold ml-[1em]">Vimond</span>
              <div className="w-8 h-[1px] bg-[#8A7A63]/20" />
            </motion.div>
          </div>
          
          {/* Subtle percentage-like progress line at bottom */}
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 2, ease: "linear" }}
            className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#8A7A63] origin-left opacity-20"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
