"use client";

import FadingLine from "@/components/FadingLine";

export default function Roadmap() {
  const steps = [
    { id: 1, label: "Q3 2025", title: "Public Beta Launch" },
    { id: 2, label: "Q4 2025", title: "CLI & SDK Release" },
    { id: 3, label: "Q1 2026", title: "Managed Cloud Service" },
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white">Roadmap</h2>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Horizontal gradient line behind steps */}
         
<FadingLine className="absolute left-0 right-0 top-10 h-[2px] bg-gradient-to-r from-blue-500/20 via-blue-500/60 to-blue-500/20"/>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
            {steps.map((step, idx) => (
              <div
                key={step.id}
                className="flex flex-col items-center text-center"
              >
                {/* Numbered circle with blue glow */}
                <div className="relative z-10">
                  <div className="relative inline-flex rounded-full p-[3px] bg-gradient-to-br from-blue-500 to-indigo-600 shadow-[0_20px_40px_-20px_rgba(59,130,246,0.75)]">
                    <div className="h-16 w-16 rounded-full bg-black/85 backdrop-blur-sm flex items-center justify-center ring-1 ring-blue-400/30">
                      <span className="text-white text-xl font-semibold">
                        {idx + 1}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Labels */}
                <div className="mt-6">
                  <div className="text-blue-300 text-sm font-medium">
                    {step.label}
                  </div>
                  <div className="text-white text-lg mt-1">{step.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
     
    </section>
  );
}
