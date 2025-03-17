"use client";
import React, { useEffect, useId, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";
import { SparklesCore } from "./sparkles";

export const Cover = ({
  children,
  className,
  variant = "default",
}: {
  children?: React.ReactNode;
  className?: string;
  variant?: "default" | "smart";
}) => {
  const [hovered, setHovered] = useState(false);

  const ref = useRef<HTMLDivElement>(null);

  const [containerWidth, setContainerWidth] = useState(0);
  const [beamPositions, setBeamPositions] = useState<number[]>([]);

  useEffect(() => {
    if (ref.current) {
      setContainerWidth(ref.current?.clientWidth ?? 0);

      const height = ref.current?.clientHeight ?? 0;
      const numberOfBeams = Math.floor(height / 10); // Adjust the divisor to control the spacing
      const positions = Array.from(
        { length: numberOfBeams },
        (_, i) => (i + 1) * (height / (numberOfBeams + 1))
      );
      setBeamPositions(positions);
    }
  }, [ref.current]);

  const smartAnimation = {
    scale: hovered ? [1, 1.1, 1] : 1,
    rotate: hovered ? [0, 5, -5, 0] : 0,
  };

  const defaultAnimation = {
    scale: hovered ? 0.8 : 1,
    x: hovered ? [0, -30, 30, -30, 30, 0] : 0,
    y: hovered ? [0, 30, -30, 30, -30, 0] : 0,
  };

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      ref={ref}
      className={cn(
        "relative group/cover inline-block px-2 py-2 transition duration-200 rounded-sm",
        variant === "smart" 
          ? "hover:bg-blue-950/30 dark:hover:bg-blue-900/30" 
          : "hover:bg-neutral-900 dark:bg-neutral-900 bg-neutral-100"
      )}
    >
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ opacity: { duration: 0.2 } }}
            className="h-full w-full overflow-hidden absolute inset-0"
          >
            <motion.div
              animate={{
                translateX: variant === "smart" ? ["0%", "-25%", "0%"] : ["-50%", "0%"],
              }}
              transition={{
                translateX: {
                  duration: variant === "smart" ? 3 : 10,
                  ease: variant === "smart" ? "easeInOut" : "linear",
                  repeat: Infinity,
                },
              }}
              className="w-[200%] h-full flex"
            >
              <SparklesCore
                background="transparent"
                minSize={variant === "smart" ? 1 : 0.4}
                maxSize={variant === "smart" ? 2 : 1}
                particleDensity={variant === "smart" ? 100 : 500}
                className="w-full h-full"
                particleColor={variant === "smart" ? "#60A5FA" : "#FFFFFF"}
                speed={variant === "smart" ? 2 : 4}
              />
              <SparklesCore
                background="transparent"
                minSize={variant === "smart" ? 1 : 0.4}
                maxSize={variant === "smart" ? 2 : 1}
                particleDensity={variant === "smart" ? 100 : 500}
                className="w-full h-full"
                particleColor={variant === "smart" ? "#60A5FA" : "#FFFFFF"}
                speed={variant === "smart" ? 2 : 4}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {beamPositions.map((position, index) => (
        <Beam
          key={index}
          hovered={hovered}
          duration={Math.random() * 2 + 1}
          delay={Math.random() * 2 + 1}
          width={containerWidth}
          variant={variant}
          style={{
            top: `${position}px`,
          }}
        />
      ))}
      <motion.span
        key={String(hovered)}
        animate={variant === "smart" ? smartAnimation : defaultAnimation}
        exit={{
          filter: "none",
          scale: 1,
          x: 0,
          y: 0,
        }}
        transition={{
          duration: 0.2,
          ...(variant === "default" && {
            x: {
              duration: 0.2,
              repeat: Infinity,
              repeatType: "loop",
            },
            y: {
              duration: 0.2,
              repeat: Infinity,
              repeatType: "loop",
            },
          }),
          ...(variant === "smart" && {
            scale: {
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse",
            },
            rotate: {
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            },
          }),
        }}
        className={cn(
          "inline-block relative z-20 transition duration-200",
          variant === "smart" 
            ? "text-blue-400 group-hover/cover:text-blue-300" 
            : "dark:text-white text-neutral-900 group-hover/cover:text-white",
          className
        )}
      >
        {children}
      </motion.span>
      <CircleIcon 
        className="absolute -right-[2px] -top-[2px]" 
        variant={variant}
      />
      <CircleIcon 
        className="absolute -bottom-[2px] -right-[2px]" 
        delay={0.4}
        variant={variant}
      />
      <CircleIcon 
        className="absolute -left-[2px] -top-[2px]" 
        delay={0.8}
        variant={variant}
      />
      <CircleIcon 
        className="absolute -bottom-[2px] -left-[2px]" 
        delay={1.6}
        variant={variant}
      />
    </div>
  );
};

export const Beam = ({
  className,
  delay,
  duration,
  hovered,
  width = 600,
  variant = "default",
  ...svgProps
}: {
  className?: string;
  delay?: number;
  duration?: number;
  hovered?: boolean;
  width?: number;
  variant?: "default" | "smart";
} & React.ComponentProps<typeof motion.svg>) => {
  const id = useId();

  return (
    <motion.svg
      width={width ?? "600"}
      height="1"
      viewBox={`0 0 ${width ?? "600"} 1`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("absolute inset-x-0 w-full", className)}
      {...svgProps}
    >
      <motion.path
        d={`M0 0.5H${width ?? "600"}`}
        stroke={`url(#svgGradient-${id})`}
      />

      <defs>
        <motion.linearGradient
          id={`svgGradient-${id}`}
          key={String(hovered)}
          gradientUnits="userSpaceOnUse"
          initial={{
            x1: "0%",
            x2: hovered ? "-10%" : "-5%",
            y1: 0,
            y2: 0,
          }}
          animate={{
            x1: "110%",
            x2: hovered ? "100%" : "105%",
            y1: 0,
            y2: 0,
          }}
          transition={{
            duration: hovered ? 0.5 : duration ?? 2,
            ease: "linear",
            repeat: Infinity,
            delay: hovered ? Math.random() * (1 - 0.2) + 0.2 : 0,
            repeatDelay: hovered ? Math.random() * (2 - 1) + 1 : delay ?? 1,
          }}
        >
          <stop stopColor={variant === "smart" ? "#2563EB" : "#2EB9DF"} stopOpacity="0" />
          <stop stopColor={variant === "smart" ? "#60A5FA" : "#3b82f6"} />
          <stop offset="1" stopColor={variant === "smart" ? "#2563EB" : "#3b82f6"} stopOpacity="0" />
        </motion.linearGradient>
      </defs>
    </motion.svg>
  );
};

export const CircleIcon = ({
  className,
  delay,
  variant = "default",
}: {
  className?: string;
  delay?: number;
  variant?: "default" | "smart";
}) => {
  return (
    <div
      className={cn(
        "pointer-events-none animate-pulse group-hover/cover:hidden group-hover/cover:opacity-100 h-2 w-2 rounded-full opacity-20",
        variant === "smart" 
          ? "bg-blue-400 group-hover/cover:bg-blue-300" 
          : "bg-neutral-600 dark:bg-white group-hover/cover:bg-white",
        className
      )}
    ></div>
  );
};
