"use client";

import { AnimatePresence, motion } from "motion/react";
import { usePathname } from "next/navigation";

/*
  Fondu enchaîné entre les pages : l'ancienne page s'efface pendant que
  la nouvelle apparaît, plutôt qu'un remplacement instantané suivi d'un
  fadeUp sur la nouvelle uniquement. Nav et footer restent fixes (ils
  vivent hors de ce wrapper, dans layout.tsx).
*/
export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
