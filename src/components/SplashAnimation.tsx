"use client";

import { motion } from "framer-motion";
import { useSession } from "next-auth/react";
import { useState } from "react";

export function SplashAnimation() {
  const auth = useSession();
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      onClick={() => {
        setIsOpen(false);
      }}
      className="absolute backdrop-blur z-10 inset-0 grid place-content-center"
    >
      <div>
        <span className="text-transparent relative">
          <motion.span
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-black absolute"
          >
            Workout
          </motion.span>
          Workout
        </span>
        <span className="text-transparent relative">
          <motion.span
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-black absolute"
          >
            Tracker
          </motion.span>
          Tracker
        </span>
      </div>
    </div>
  );
}
