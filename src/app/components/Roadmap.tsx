"use client";

import { Calendar, CheckCircle, ChevronRight, Clock } from "lucide-react";
import { useState } from "react";

interface RoadmapItem {
  id: string;
  title: string;
  description: string;
  status: "completed" | "in-progress" | "planned";
  quarter: string;
  year: string;
}

const roadmapData: RoadmapItem[] = [
  {
    id: "1",
    title: "Core Platform Launch",
    description:
      "Initial release of DataVec platform with basic data processing capabilities",
    status: "completed",
    quarter: "Q4",
    year: "2023",
  },
  {
    id: "2",
    title: "Advanced Analytics",
    description:
      "Machine learning integration and predictive analytics features",
    status: "completed",
    quarter: "Q1",
    year: "2024",
  },
  {
    id: "3",
    title: "Real-time Processing",
    description: "Stream processing and real-time data pipeline capabilities",
    status: "in-progress",
    quarter: "Q2",
    year: "2024",
  },
  {
    id: "4",
    title: "Enterprise Security",
    description:
      "Advanced security features, compliance tools, and enterprise SSO",
    status: "planned",
    quarter: "Q3",
    year: "2024",
  },
  {
    id: "5",
    title: "AI-Powered Insights",
    description: "Natural language querying and automated insight generation",
    status: "planned",
    quarter: "Q4",
    year: "2024",
  },
  {
    id: "6",
    title: "Global Expansion",
    description: "Multi-region deployment and international compliance",
    status: "planned",
    quarter: "Q1",
    year: "2025",
  },
];

export default function Roadmap() {
  const [selectedYear, setSelectedYear] = useState("2024");

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case "in-progress":
        return <Clock className="w-5 h-5 text-blue-500" />;
      case "planned":
        return <Calendar className="w-5 h-5 text-gray-500" />;
      default:
        return null;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "border-green-500 bg-green-500/10";
      case "in-progress":
        return "border-blue-500 bg-blue-500/10";
      case "planned":
        return "border-gray-500 bg-gray-500/10";
      default:
        return "border-gray-500 bg-gray-500/10";
    }
  };

  const filteredRoadmap = roadmapData.filter(
    (item) => item.year === selectedYear
  );

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Product Roadmap
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our journey to revolutionize data processing and analytics. See what
            we've accomplished and what's coming next.
          </p>
        </div>

        {/* Year Filter */}
        <div className="flex justify-center mb-12">
          <div className="flex bg-card border rounded-lg p-1">
            {["2023", "2024", "2025"].map((year) => (
              <button
                key={year}
                onClick={() => setSelectedYear(year)}
                className={`px-6 py-2 rounded-md transition-all ${
                  selectedYear === year
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {year}
              </button>
            ))}
          </div>
        </div>

        {/* Roadmap Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border"></div>

          <div className="space-y-8">
            {filteredRoadmap.map((item, index) => (
              <div key={item.id} className="relative flex items-start">
                {/* Timeline Dot */}
                <div
                  className={`absolute left-6 w-4 h-4 rounded-full border-2 ${getStatusColor(
                    item.status
                  )} flex items-center justify-center z-10`}
                >
                  {getStatusIcon(item.status)}
                </div>

                {/* Content */}
                <div className="ml-16 flex-1">
                  <div className="bg-card border rounded-lg p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-semibold">{item.title}</h3>
                      <span className="text-sm text-muted-foreground bg-secondary px-3 py-1 rounded-full">
                        {item.quarter} {item.year}
                      </span>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      {item.description}
                    </p>
                    <div className="flex items-center text-sm">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          item.status === "completed"
                            ? "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400"
                            : item.status === "in-progress"
                            ? "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400"
                            : "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400"
                        }`}
                      >
                        {item.status === "completed"
                          ? "Completed"
                          : item.status === "in-progress"
                          ? "In Progress"
                          : "Planned"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Want to stay updated on our progress?
          </p>
          <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors flex items-center gap-2 mx-auto">
            Subscribe to Updates
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
