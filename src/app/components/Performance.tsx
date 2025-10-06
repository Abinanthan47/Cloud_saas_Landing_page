"use client";
import { BentoGridSecondDemo } from "@/components/BentoGrid";
import FadingLine from "@/components/FadingLine";
import { BentoGrid } from "@/components/ui/bento-grid";
import Image from "next/image";
import { useEffect, useState } from "react";

const Performance = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [countUpValues, setCountUpValues] = useState({
    requests: 0,
    latency: 0,
    memory: 0,
  });

  // Count-up animation effect
  useEffect(() => {
    const animateCountUp = () => {
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;

      let step = 0;
      const interval = setInterval(() => {
        step++;
        const progress = step / steps;

        setCountUpValues({
          requests: Math.floor(300000 * progress),
          latency: Math.floor(0.1 * progress * 100) / 100,
          memory: Math.floor(104 * progress),
        });

        if (step >= steps) {
          clearInterval(interval);
        }
      }, stepDuration);
    };

    animateCountUp();
  }, []);

  const stats = [
    {
      id: 1,
      number: countUpValues.requests.toLocaleString(),
      unit: "requests/sec per core",
      description: "High-throughput processing",
      gradient: "from-green-400 to-emerald-500",
    },
    {
      id: 2,
      number: countUpValues.latency,
      unit: "ms latency",
      description: "Ultra-low response time",
      gradient: "from-blue-400 to-cyan-500",
    },
    {
      id: 3,
      number: countUpValues.memory,
      unit: "KB footprint",
      description: "Deterministic memory usage",
      gradient: "from-purple-400 to-pink-500",
    },
  ];

  return (
    <section className="relative  py-24  overflow-hidden">
      {/* soft vignette */}
      <FadingLine className="absolute inset-0" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.15),transparent_60%)]" />

      <div className="relative z-10 container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight">
            Performance That Scales
          </h2>
          <p className="mt-3 text-slate-300/80">
            Dark bento grid with blue gradients, using your existing content.
          </p>
        </div>

        {/* Bento Grid */}
       <BentoGridSecondDemo/>
      </div>
    </section>
  );
};

export default Performance;
