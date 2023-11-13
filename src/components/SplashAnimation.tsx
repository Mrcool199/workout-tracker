"use client";

import { motion } from "framer-motion";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export function SplashAnimation() {
  const auth = useSession();
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsOpen(false);
    }, 1000);

    // Clear the timeout when the component is unmounted or when isOpen becomes false
    return () => clearTimeout(timeout);
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div
      onClick={handleClose}
      className="absolute bg-black z-10 inset-0 flex items-center justify-center "
    >
      <div className="text-transparent relative text-4xl font-bold">
        <motion.span
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-red-700 absolute text-4xl font-bold "
        >
          Workout
        </motion.span>
        Workout
        <motion.span
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-white absolute text-4xl font-bold "
        >
          Tracker
        </motion.span>
        Tracker
      </div>
    </div>
  );
}
