import LightRays from "@/components/LightRays";
import { ArrowUpRight, FileCode2Icon } from "lucide-react";
import Image from "next/image";
import { NavBar } from "./Navbar";
import FadingLine from "@/components/FadingLine";

const Hero = () => {
  return (
    <section className="relative min-h-screen w-screen overflow-hidden bg-black">
      {/* subtle rays */}
      <FadingLine thickness={2} blur={5} color="rgba(59,130,246,0.9)" fade="rgba(59,130,246,0)" className="absolute bottom-0 left-0 right-0" />
      <div className="absolute inset-0 z-10">
        <LightRays
          raysOrigin="top-center"
          raysColor="#3b82f6"
          raysSpeed={1.2}
          lightSpread={1.5}
          rayLength={1.9}
          followMouse={false}
          mouseInfluence={0}
          noiseAmount={0.06}
          distortion={0.04}
          className="opacity-80"
        />
      </div>

      {/* blue bottom glow */}
      <div className="pointer-events-none absolute -bottom-40 left-1/2 h-[480px] w-[1200px] -translate-x-1/2 rounded-[999px] bg-[radial-gradient(closest-side,rgba(59,130,246,0.35),transparent_70%)] blur-2xl" >
       
      </div>

      <NavBar />

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center pt-20 md:pt-24 justify-center text-center">
          {/* badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 ring-1 ring-blue-400/30 text-blue-200 text-sm mb-6">
            104KB actors | 300,000 invocations/sec per core | Zero cold-starts
          </div>

          {/* headline */}
          <h1 className="font-space-grotesk text-white font-semibold text-5xl md:text-7xl tracking-tight">
            Run{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-blue-600">
              AI-built
            </span>{" "}
            apps at C-speed
            <br className="hidden md:block" />
            <span className="text-white/90">with no runtime overhead.</span>
          </h1>

          {/* subtext */}
          <p className="text-slate-300/90 max-w-2xl mt-6">
            DataVec gives AI a fast, local runtime to compile to. Your app logic
            stays high-level, runs like hand-written C, and costs a fraction to
            operate.
          </p>

          {/* ctas */}
          <div className="flex flex-row gap-4 mt-8 justify-center items-center">
            <button className="relative  gap-2 inline-flex items-center justify-center px-5 py-3 rounded-2xl font-medium text-white bg-blue-600 ring-1 ring-blue-400/40 shadow-[0_12px_28px_-12px_rgba(59,130,246,0.85)] hover:bg-blue-500 transition-all">
              Deck <FileCode2Icon className="w-4 h-4" />
            </button>
            <button className="px-5 flex items-center gap-2 py-3 rounded-2xl font-medium text-blue-200 bg-blue-500/10 ring-1 ring-blue-400/30 hover:bg-blue-500/15 transition-colors">
              Code <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* hero image placeholder */}
          <div className="mt-12">
            <Image
              src="/herobg2.jpeg"
              alt="hero"
              width={500}
              height={520}
              className="opacity-100"
            />
            {/* <video src="/herobg.mp4" autoPlay loop muted className="rounded-3xl opacity-100" /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
