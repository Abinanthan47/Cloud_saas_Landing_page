"use client";

import FadingLine from "@/components/FadingLine";
import { CloudLightningIcon, Compass, Layers3Icon } from "lucide-react";

const WhyDatavec = () => {
  const leftTitle = "DataVec";
  const rightTitle = "Current Platforms";

  const leftItems = [
    "Instant actor dispatch (µs – single page fault)",
    "8 KB memory per actor + 96 KB per socket (tunable)",
    "Ontological locality for state persistence",
  ];

  const rightItems = [
    "Heavy cold starts (10–100 ms)",
    "High per‑invocation overhead",
    "Stateless, hash‑partitioned scaling",
  ];

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-6">
        {/* Intro - centered like sample */}
        <div className="max-w-5xl mx-auto text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-8">
            Why DataVec?
          </h1>
          <p className="text-lg md:text-2xl leading-relaxed text-slate-200/90">
            The serverless paradigm has unlocked horizontal scale but sacrificed
            vertical scale. DataVec addresses this by inventing zero‑overhead
            abstractions that enable rapid development with high‑level
            interfaces for server and service authoring, while delivering
            performance that meets or exceeds state‑of‑the‑art specialized
            servers.
          </p>
          <p className="mt-6 text-slate-300/80">
            See our deck for a deeper summary.
          </p>
          <FadingLine
            thickness={1}
            blur={50}
            color="rgba(59,130,246,0.9)"
            fade="rgba(59,130,246,0)"
            className="mt-12"
          />
        </div>

        <div className="text-center mb-12">
          <div className="inline-flex gap-2 items-center text-xs tracking-widest uppercase text-blue-300/80 bg-blue-500/10 ring-1 ring-blue-500/20 rounded-full px-3 py-1 mb-4">
            <Compass className="h-4 w-4  rounded-full bg-blue-500/20" />{" "}
            Comparison
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold text-white">
            Why DataVec Stands Out
          </h2>
          <p className="text-blue-200/70 mt-3">
            How we compare on performance and architecture
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* DataVec card */}
          <div className="relative rounded-2xl p-6 bg-gradient-to-b from-blue-800/30 to-blue-900/20 ring-1 ring-blue-500/30 shadow-[0_30px_80px_-30px_rgba(59,130,246,0.35)]">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-8 w-8 rounded-lg bg-blue-500/20 ring-1 flex items-center justify-center ring-blue-400/30">
                <CloudLightningIcon className="text-blue-400" />
              </div>

              <h3 className="text-white text-2xl font-semibold">{leftTitle}</h3>
            </div>
            <ul className="divide-y divide-white/5">
              {leftItems.map((item) => (
                <li key={item} className="py-4 flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full animate-pulse bg-blue-400 ring-2 ring-blue-400/30" />
                  <span className="text-blue-100/90">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Current Platforms card */}
          <div className="relative rounded-2xl p-6 bg-gradient-to-b from-slate-900/60 to-slate-900/20 ring-1 ring-white/10">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-8 w-8 rounded-lg bg-slate-500/20 ring-1 ring-slate-400/30 flex items-center justify-center">
                <Layers3Icon className="text-blue-400" />
              </div>
              <h3 className="text-white text-2xl font-semibold">
                {rightTitle}
              </h3>
            </div>
            <ul className="divide-y divide-white/5">
              {rightItems.map((item) => (
                <li key={item} className="py-4 flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full animate-pulse bg-red-400/80 ring-2 ring-red-400/20" />
                  <span className="text-slate-200/90">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyDatavec;
