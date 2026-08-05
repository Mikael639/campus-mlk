"use client";

import { motion } from "motion/react";
import Logomark from "@/components/Logomark";

export default function Loading() {
  return (
    <div
      style={{
        minHeight: "70vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 22,
      }}
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "linear" }}
      >
        <Logomark size={56} variant="principal" />
      </motion.div>
      <motion.div
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
        style={{
          fontSize: 13,
          fontWeight: 600,
          letterSpacing: ".08em",
          textTransform: "uppercase",
          color: "#6b6b6b",
        }}
      >
        MLK Campus
      </motion.div>
    </div>
  );
}
