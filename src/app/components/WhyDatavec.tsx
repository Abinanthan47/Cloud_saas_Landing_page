"use client";
import { useState } from "react";

const WhyDatavec = () => {
  const [activeSection, setActiveSection] = useState("BUILT FOR PERFORMANCE");

  const menuItems = [
    "PROGRAMMABLE INFRA",
    "BUILT FOR PERFORMANCE",
    "ELASTIC GPU SCALING",
    "UNIFIED OBSERVABILITY",
  ];

  const sections = {
    "PROGRAMMABLE INFRA": {
      title: "Programmable infra",
      description:
        "Define everything in code, no YAML or config files. Keep environment and hardware requirements in sync.",
    },
    "BUILT FOR PERFORMANCE": {
      title: "Built for performance",
      description:
        "Launch and scale containers in seconds to keep feedback loops tight and latency low.",
    },
    "ELASTIC GPU SCALING": {
      title: "Elastic GPU scaling",
      description:
        "Scale GPU resources dynamically based on demand, from zero to thousands of instances in seconds.",
    },
    "UNIFIED OBSERVABILITY": {
      title: "Unified observability",
      description:
        "Monitor, debug, and optimize your entire stack with integrated logging, metrics, and tracing.",
    },
  };

  return (
    <section className="relative min-h-screen flex">
      {/* Left Side - Black Background */}
      <div className="w-1/2 bg-black p-12 flex flex-col justify-center">
        {/* Navigation Menu */}
        <div className="space-y-4 mb-12">
          {menuItems.map((item) => (
            <div key={item} className="flex items-center gap-3">
              <div
                className={`w-3 h-3 ${
                  activeSection === item ? "bg-green-400" : "bg-gray-600"
                }`}
              ></div>
              <button
                onClick={() => setActiveSection(item)}
                className={`text-sm font-medium transition-colors ${
                  activeSection === item
                    ? "text-green-400"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {item}
              </button>
            </div>
          ))}
        </div>

        {/* Content Sections */}
        <div className="space-y-16">
          {Object.entries(sections).map(([key, section]) => (
            <div
              key={key}
              className={`transition-opacity duration-300 ${
                activeSection === key ? "opacity-100" : "opacity-30"
              }`}
            >
              <h2 className="text-3xl font-mono font-bold text-green-400 mb-4">
                {section.title}
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed max-w-md">
                {section.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Right Side - Green Gradient Background */}
      <div className="w-1/2 bg-gradient-to-b from-green-400 via-green-500 to-green-600 p-12 flex flex-col justify-center space-y-8">
        {/* Code Snippet Widget */}
        <div className="bg-black/80 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
          {/* Window Controls */}
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>

          {/* Code Content */}
          <div className="font-mono text-sm">
            <div className="text-gray-500 mb-2">01</div>
            <div className="text-gray-500 mb-2">02</div>
            <div className="text-gray-500 mb-2">03</div>
            <div className="text-gray-500 mb-2">04</div>
            <div className="text-white">
              <span className="text-green-400">inference_image</span> = (
            </div>
            <div className="text-white ml-4">
              <span className="text-blue-400">Image</span>.
              <span className="text-yellow-400">debian_slim</span>()
            </div>
            <div className="text-white ml-4">
              .<span className="text-blue-400">uv_pip_install</span>(
            </div>
            <div className="text-white ml-8">
              <span className="text-red-400">"torch--2 7 1"</span>
            </div>
          </div>
        </div>

        {/* Performance Comparison Widget */}
        <div className="bg-black/80 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
          {/* Window Controls */}
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>

          {/* Performance Content */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Stable Diffusion Cold Starts
            </h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-1 h-6 bg-green-400"></div>
                  <span className="text-white">
                    Modal (with memory snapshots)
                  </span>
                </div>
                <span className="text-white font-mono">3.13s</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-1 h-6 bg-green-400"></div>
                  <span className="text-white">Modal</span>
                </div>
                <span className="text-white font-mono">4.11s</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-1 h-6 bg-gray-600"></div>
                  <span className="text-white">Provider A</span>
                </div>
                <span className="text-white font-mono">7s</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-1 h-6 bg-gray-600"></div>
                  <span className="text-white">Provider B</span>
                </div>
                <span className="text-white font-mono">8s</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-1 h-6 bg-gray-600"></div>
                  <span className="text-white">Kubernetes + EC2</span>
                </div>
                <span className="text-white font-mono">9s</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyDatavec;
