"use client";
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
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-black overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(rgba(0,255,153,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,255,153,0.1) 1px, transparent 1px)
          `,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300 mb-4">
            Performance That Scales
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-green-400 to-emerald-300 mx-auto rounded-full shadow-[0_0_20px_rgba(0,255,153,0.5)]"></div>
        </div>

        {/* Main Stats Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div
              key={stat.id}
              className="group relative"
              onMouseEnter={() => setHoveredCard(stat.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div
                className={`relative bg-gradient-to-br ${
                  stat.gradient
                } p-0.5 rounded-xl transition-all duration-500 ${
                  hoveredCard === stat.id ? "scale-105 shadow-2xl" : "shadow-lg"
                }`}
              >
                <div className="bg-black rounded-xl p-8 h-full">
                  {/* Light beam glow effect */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-20 rounded-xl transition-opacity duration-500`}
                  ></div>

                  <div className="relative z-10">
                    {/* Number */}
                    <div className="text-4xl lg:text-5xl font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 mb-2">
                      {stat.number}
                    </div>

                    {/* Unit */}
                    <div className="text-lg text-slate-400 font-mono mb-4">
                      {stat.unit}
                    </div>

                    {/* Description */}
                    <div className="text-slate-300 text-sm">
                      {stat.description}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Row - Graph and Code */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Animated Line Graph */}
          <div className="bg-black/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8">
            <h3 className="text-xl font-mono text-green-400 mb-6">
              Latency Stability
            </h3>
            <div className="relative h-64">
              {/* Graph Background */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-800 to-transparent rounded-lg"></div>

              {/* Animated Line */}
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 400 200"
              >
                <defs>
                  <linearGradient
                    id="lineGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#00FF99" stopOpacity="0.8" />
                    <stop offset="50%" stopColor="#00FF99" stopOpacity="1" />
                    <stop offset="100%" stopColor="#00FF99" stopOpacity="0.8" />
                  </linearGradient>
                </defs>

                {/* Grid Lines */}
                <g stroke="rgba(0,255,153,0.1)" strokeWidth="1">
                  <line x1="0" y1="50" x2="400" y2="50" />
                  <line x1="0" y1="100" x2="400" y2="100" />
                  <line x1="0" y1="150" x2="400" y2="150" />
                </g>

                {/* Animated Line */}
                <path
                  d="M0,100 Q100,80 200,90 T400,95"
                  stroke="url(#lineGradient)"
                  strokeWidth="3"
                  fill="none"
                  className="animate-pulse"
                />

                {/* Data Points */}
                <circle
                  cx="100"
                  cy="80"
                  r="3"
                  fill="#00FF99"
                  className="animate-ping"
                />
                <circle
                  cx="200"
                  cy="90"
                  r="3"
                  fill="#00FF99"
                  className="animate-ping"
                  style={{ animationDelay: "0.5s" }}
                />
                <circle
                  cx="300"
                  cy="88"
                  r="3"
                  fill="#00FF99"
                  className="animate-ping"
                  style={{ animationDelay: "1s" }}
                />
              </svg>

              {/* Labels */}
              <div className="absolute bottom-0 left-0 text-xs text-slate-400 font-mono">
                <div>0ms</div>
                <div className="mt-16">0.5ms</div>
                <div className="mt-16">1.0ms</div>
              </div>
            </div>
          </div>

          {/* Code Snippet Card */}
          <div className="bg-black/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8">
            <h3 className="text-xl font-mono text-green-400 mb-6">
              Efficient Handler
            </h3>
            <div className="bg-black rounded-lg p-6 font-mono text-sm overflow-x-auto">
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

              {/* Glowing Cursor */}
              <span className="text-green-400 animate-pulse">|</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Performance;
