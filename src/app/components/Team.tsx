"use client";

import { ExternalLink, Github, Linkedin, Mail, Twitter } from "lucide-react";
import { useState } from "react";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  social: {
    linkedin?: string;
    twitter?: string;
    github?: string;
    email?: string;
    website?: string;
  };
}

const teamData: TeamMember[] = [
  {
    id: "1",
    name: "Sarah Chen",
    role: "CEO & Co-Founder",
    bio: "Former data scientist at Google with 10+ years of experience in machine learning and distributed systems. Passionate about making data accessible to everyone.",
    image: "/api/placeholder/300/300",
    social: {
      linkedin: "https://linkedin.com/in/sarahchen",
      twitter: "https://twitter.com/sarahchen",
      email: "sarah@datavec.com",
    },
  },
  {
    id: "2",
    name: "Marcus Rodriguez",
    role: "CTO & Co-Founder",
    bio: "Ex-AWS engineer specializing in cloud infrastructure and real-time data processing. Led the development of several open-source data tools.",
    image: "/api/placeholder/300/300",
    social: {
      linkedin: "https://linkedin.com/in/marcusrodriguez",
      github: "https://github.com/marcusrodriguez",
      email: "marcus@datavec.com",
    },
  },
  {
    id: "3",
    name: "Dr. Emily Watson",
    role: "Head of AI Research",
    bio: "PhD in Computer Science from MIT. Expert in natural language processing and automated machine learning. Published 50+ research papers.",
    image: "/api/placeholder/300/300",
    social: {
      linkedin: "https://linkedin.com/in/emilywatson",
      twitter: "https://twitter.com/emilywatson",
      email: "emily@datavec.com",
    },
  },
  {
    id: "4",
    name: "David Kim",
    role: "VP of Engineering",
    bio: "Former Netflix engineer with expertise in scalable data architectures. Led teams building systems processing petabytes of data daily.",
    image: "/api/placeholder/300/300",
    social: {
      linkedin: "https://linkedin.com/in/davidkim",
      github: "https://github.com/davidkim",
      email: "david@datavec.com",
    },
  },
  {
    id: "5",
    name: "Lisa Thompson",
    role: "Head of Product",
    bio: "Product leader with 8+ years at Microsoft and Stripe. Focused on creating intuitive user experiences for complex data workflows.",
    image: "/api/placeholder/300/300",
    social: {
      linkedin: "https://linkedin.com/in/lisathompson",
      twitter: "https://twitter.com/lisathompson",
      email: "lisa@datavec.com",
    },
  },
  {
    id: "6",
    name: "Alex Johnson",
    role: "Head of Security",
    bio: "Cybersecurity expert with background in financial services. Certified in multiple security frameworks and compliance standards.",
    image: "/api/placeholder/300/300",
    social: {
      linkedin: "https://linkedin.com/in/alexjohnson",
      email: "alex@datavec.com",
    },
  },
];

export default function Team() {
  const [hoveredMember, setHoveredMember] = useState<string | null>(null);

  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case "linkedin":
        return <Linkedin className="w-4 h-4" />;
      case "twitter":
        return <Twitter className="w-4 h-4" />;
      case "github":
        return <Github className="w-4 h-4" />;
      case "email":
        return <Mail className="w-4 h-4" />;
      case "website":
        return <ExternalLink className="w-4 h-4" />;
      default:
        return null;
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Meet Our Team
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're a diverse group of engineers, researchers, and product experts
            passionate about transforming how organizations work with data.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {teamData.map((member) => (
            <div
              key={member.id}
              className="group relative bg-card border rounded-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              onMouseEnter={() => setHoveredMember(member.id)}
              onMouseLeave={() => setHoveredMember(null)}
            >
              {/* Profile Image */}
              <div className="relative mb-6">
                <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center overflow-hidden">
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary">
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                </div>

                {/* Hover Overlay */}
                {hoveredMember === member.id && (
                  <div className="absolute inset-0 bg-primary/10 rounded-full flex items-center justify-center">
                    <div className="text-primary font-semibold text-sm">
                      View Profile
                    </div>
                  </div>
                )}
              </div>

              {/* Member Info */}
              <div className="text-center mb-4">
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-primary font-medium">{member.role}</p>
              </div>

              {/* Bio */}
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {member.bio}
              </p>

              {/* Social Links */}
              <div className="flex justify-center gap-3">
                {Object.entries(member.social).map(([platform, url]) => (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center group/link"
                    title={`${
                      platform.charAt(0).toUpperCase() + platform.slice(1)
                    }`}
                  >
                    {getSocialIcon(platform)}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Join Us Section */}
        <div className="text-center bg-card border rounded-lg p-8">
          <h3 className="text-2xl font-bold mb-4">Join Our Mission</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            We're always looking for talented individuals who share our vision
            of making data processing accessible, efficient, and powerful for
            everyone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors">
              View Open Positions
            </button>
            <button className="border border-border px-6 py-3 rounded-lg hover:bg-secondary transition-colors">
              Learn About Our Culture
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
