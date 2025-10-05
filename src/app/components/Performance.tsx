"use client";
import FadingLine from "@/components/FadingLine";
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
      <FadingLine className="absolute inset-0"/>
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
        <div className="grid max-w-7xl mx-auto grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Card A: Requests stat */}
          <div className="lg:col-span-6 rounded-2xl p-6 bg-gradient-to-b from-indigo-700/20 to-indigo-900/10 ring-1 ring-white/10">
            <h3 className="text-white text-xl font-semibold mb-4">
              Throughput
            </h3>
            <div
              className="group relative"
              onMouseEnter={() => setHoveredCard(1)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div
                className={`relative rounded-xl p-6 bg-black/50 ring-1 ring-white/10 transition-all ${
                  hoveredCard === 1 ? "shadow-2xl" : ""
                }`}
              >
                <div className="text-5xl font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-300">
                  {stats[0].number}
                </div>
                <div className="text-slate-400 font-mono mt-2">
                  {stats[0].unit}
                </div>
                <div className="text-slate-300 mt-3 text-sm">
                  {stats[0].description}
                </div>
              </div>
            </div>
          </div>

          {/* Card B: AI workflows placeholder */}
          <div className="lg:col-span-6 rounded-2xl p-6 bg-gradient-to-b from-indigo-700/20 to-indigo-900/10 ring-1 ring-white/10">
            <h3 className="text-white text-xl font-semibold mb-4">
              Smarter Workflows
            </h3>
            <div className="relative h-48 rounded-xl bg-black/50 ring-1 ring-white/10 overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-28 w-28 rounded-full bg-blue-500/20 ring-1 ring-blue-400/30" />
              </div>
              <div className="absolute left-6 top-6 px-3 py-1 rounded-full bg-blue-500/10 text-blue-200 text-sm ring-1 ring-blue-400/30">
                consult
              </div>
              <div className="absolute right-6 top-10 px-3 py-1 rounded-full bg-blue-500/10 text-blue-200 text-sm ring-1 ring-blue-400/30">
                report
              </div>
              <div className="absolute left-10 bottom-8 px-3 py-1 rounded-full bg-blue-500/10 text-blue-200 text-sm ring-1 ring-blue-400/30">
                invest
              </div>
            </div>
          </div>

          {/* Card C: Latency graph */}
          <div className="lg:col-span-7 rounded-2xl p-6 bg-gradient-to-b from-indigo-700/20 to-indigo-900/10 ring-1 ring-white/10">
            <h3 className="text-white text-xl font-semibold mb-6">
              Latency Stability
            </h3>
            <div className="relative h-64">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent rounded-xl" />
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 400 200"
              >
                <defs>
                  <linearGradient
                    id="lineGradientBlue"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.6" />
                    <stop offset="50%" stopColor="#60a5fa" stopOpacity="1" />
                    <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.6" />
                  </linearGradient>
                </defs>
                <g stroke="rgba(96,165,250,0.15)" strokeWidth="1">
                  <line x1="0" y1="50" x2="400" y2="50" />
                  <line x1="0" y1="100" x2="400" y2="100" />
                  <line x1="0" y1="150" x2="400" y2="150" />
                </g>
                <path
                  d="M0,100 Q100,80 200,90 T400,95"
                  stroke="url(#lineGradientBlue)"
                  strokeWidth="3"
                  fill="none"
                  className="animate-pulse"
                />
              </svg>
            </div>
          </div>

          {/* Card D: Code snippet */}
          <div className="lg:col-span-5 rounded-2xl p-6 bg-gradient-to-b from-indigo-700/20 to-indigo-900/10 ring-1 ring-white/10">
            <h3 className="text-white text-xl font-semibold mb-6">
              Efficient Handler
            </h3>
            <div className="bg-black/60 rounded-lg p-6 font-mono text-sm overflow-x-auto ring-1 ring-white/10">
              <div className="text-gray-500 mb-2">
                // High-performance async handler
              </div>
              <div className="text-blue-400">async</div>
              <div className="text-white ml-2">
                <span className="text-green-400">handler</span>
                <span className="text-gray-300">()</span>
                <span className="text-gray-300"> &#123;</span>
              </div>
              <div className="text-white ml-4">
                <span className="text-blue-400">const</span>
                <span className="text-white"> result = </span>
                <span className="text-yellow-400">await</span>
                <span className="text-white"> process();</span>
              </div>
              <div className="text-white ml-4">
                <span className="text-blue-400">return</span>
                <span className="text-white"> result;</span>
              </div>
              <div className="text-gray-300">&#125;</div>
              <span className="text-blue-400 animate-pulse">|</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Performance;
