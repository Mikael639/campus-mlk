"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Logomark from "./Logomark";

/*
  Écran de démarrage affiché brièvement à chaque premier chargement du site
  (pas lors des navigations internes, puisque le layout n'est pas remonté).
*/
export default function SplashScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setVisible(false), 750);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.215, 0.61, 0.355, 1] }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 200,
            background: "#f9f9f9",
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
        </motion.div>
      )}
    </AnimatePresence>
  );
}
