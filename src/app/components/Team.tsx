"use client";
import FadingLine from "@/components/FadingLine";
import LightRays from "@/components/LightRays";
import Image from "next/image";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
}

const teamData: TeamMember[] = [
  {
    id: "1",
    name: "Ben Woolley",
    role: "Platform Development",
    bio: "A generalist with deep experience across all levels, from web front-ends to operating system internals. Decades of marketing technology experience.",
    image: "/team.jpg",
  },
  {
    id: "2",
    name: "Tony Davydets",
    role: "Application Development",
    bio: "A prolific application developer who can build novel products on any platform. Decades of government contracting experience.",
    image: "/team2.jpg",
  },
  {
    id: "3",
    name: "Shane Kutzer",
    role: "Business Development",
    bio: "The king of customer loyalty. Decades operating multiple businesses.",
    image: "/teaam3.jpg",
  },
];

export default function Team() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-black via-slate-950 to-transparent">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Team</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto gap-6 md:gap-0 md:divide-x md:divide-y divide-blue-500/20 rounded-2xl overflow-hidden ring-1 ring-blue-500/20">
          {teamData.map((member) => (
            <div key={member.id} className="relative">
              <div className="bg-transparent p-6 md:p-8 h-full">
                <div className="mb-6 flex items-center justify-center">
                  <div className="h-20 w-20 rounded-full overflow-hidden ring-1 ring-white/15">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={80}
                      height={80}
                    />
                  </div>
                </div>
                <h3 className="text-base md:text-lg font-bold text-center text-gray-200 mb-1 uppercase tracking-wide">
                  {member.name}
                </h3>
                <p className="text-center text-blue-300 mb-3 md:mb-4">
                  {member.role}
                </p>
                <p className="text-gray-400 text-left md:text-justify leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-12 md:mt-16 max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl ring-1 ring-blue-500/20 border-b-2 border-blue-800/30 px-6 py-12 md:py-24 md:px-16 ">
          {/* Light rays background */}
          <div className="absolute inset-0 z-10">
            <LightRays
              raysOrigin="top-center"
              raysColor="#3b82f6"
              raysSpeed={1.5}
              lightSpread={1.8}
              rayLength={1.4}
              followMouse={true}
              mouseInfluence={0.1}
              noiseAmount={0.08}
              distortion={0.05}
              className="opacity-70"
            />
          </div>

          {/* dotted texture */}
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.15),transparent_60%)]" />

          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 ring-1 ring-blue-400/30 text-blue-200 text-sm mb-6">
              <span className="h-2 w-2 rounded-full bg-blue-400" />
              Become a Part of Us
            </div>

            <h3 className="text-3xl md:text-6xl font-semibold text-white tracking-tight">
              Ready to Scale at C‑Speed?
            </h3>
            <p className="mt-4 md:mt-6 text-blue-100/80 text-base md:text-lg max-w-2xl mx-auto">
              Let’s talk about how DataVec can cut your runtime costs and unlock
              performance that feels impossible anywhere else.
            </p>

            <div className="mt-8 md:mt-10 flex justify-center">
              <button className="relative inline-flex items-center justify-center px-6 py-3 rounded-2xl font-medium text-white bg-blue-600 ring-1 ring-blue-400/40 shadow-[0_12px_28px_-12px_rgba(59,130,246,0.75)] hover:bg-blue-500 hover:shadow-[0_16px_40px_-12px_rgba(59,130,246,0.9)] transition-all duration-200">
                Contact us
              </button>
            </div>
          </div>
        </div>
        <FadingLine />
      </div>
    </section>
  );
}
