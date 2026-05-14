import { motion } from "framer-motion";
import { ComputersCanvas } from "./canvas";
import { styles } from "../styles";
import { cn } from "../utils/lib";

export const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto overflow-hidden">
      {/* Left accent line + dot */}
      <div
        className={cn(
          styles.paddingX,
          "absolute inset-0 top-[110px] max-w-7xl mx-auto flex flex-row items-start gap-5 z-10",
        )}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff] shadow-[0_0_16px_4px_#915eff99]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        {/* Text block */}
        <div className="mt-3 select-none">
          {/* Greeting line */}
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[#aaa6c3] text-[15px] sm:text-[18px] font-medium tracking-[0.25em] uppercase mb-1"
          >
            Hello World 👋 — I'm
          </motion.p>

          {/* Main name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="font-black leading-none"
            style={{ fontSize: "clamp(52px, 9vw, 100px)" }}
          >
            <span
              style={{
                background: "linear-gradient(90deg, #ffffff 0%, #c084fc 40%, #818cf8 75%, #38bdf8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                filter: "drop-shadow(0 0 24px rgba(145,94,255,0.45))",
              }}
            >
              SARDOR
            </span>
          </motion.h1>

          {/* Role line */}
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-3 text-[#dfd9ff] font-medium lg:text-[26px] sm:text-[22px] text-[16px] lg:leading-[36px] max-w-lg"
          >
            Full-Stack · DevOps ·{" "}
            <span className="text-[#915eff]">Cybersecurity</span>
          </motion.p>

          {/* Location badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="mt-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#915eff44] bg-[#915eff11] text-[13px] text-[#aaa6c3]"
          >
            <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse" />
            18 y/o · Samarkand, Uzbekistan 🇺🇿
          </motion.div>
        </div>
      </div>

      {/* 3D Computer */}
      <ComputersCanvas />

      {/* Scroll indicator */}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center z-10">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};
