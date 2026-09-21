"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "/deck/assets/case-coolbox-cup.jpg",
  "/deck/assets/experience-arena-community.jpg",
  "/deck/assets/case-gameclub-19k.jpg",
  "/deck/assets/ucv-connect.jpg"
];

export default function AnimatedMontage({ className = "" }: { className?: string }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 2000); // Cambia de foto cada 2 segundos
    return () => clearInterval(timer);
  }, []);

  return (
    <div className={`relative overflow-hidden w-full h-full bg-black ${className}`}>
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={images[index]}
            alt="Montage"
            fill
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
