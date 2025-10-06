import FeaturesSectionDemo from "@/components/ui/features-section-demo-2";

const Faetures = () => {
  const features = [
    {
      icon: (
        <svg
          className="w-10 h-10 text-green-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <rect
            x="3"
            y="3"
            width="18"
            height="18"
            rx="2"
            ry="2"
            strokeWidth="2"
          />
          <rect
            x="7"
            y="7"
            width="10"
            height="10"
            rx="1"
            ry="1"
            strokeWidth="2"
          />
          <circle cx="6" cy="6" r="1" fill="currentColor" />
          <circle cx="18" cy="6" r="1" fill="currentColor" />
          <circle cx="6" cy="18" r="1" fill="currentColor" />
          <circle cx="18" cy="18" r="1" fill="currentColor" />
        </svg>
      ),
      title: "AI-native runtime",
      description:
        "Engineered from the ground up for heavy AI workloads, built for super-fast autoscaling and model initialization and 100x faster than Docker.",
    },
    {
      icon: (
        <svg
          className="w-10 h-10 text-green-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <rect
            x="3"
            y="4"
            width="18"
            height="4"
            rx="1"
            ry="1"
            strokeWidth="2"
          />
          <rect
            x="3"
            y="10"
            width="18"
            height="4"
            rx="1"
            ry="1"
            strokeWidth="2"
          />
          <rect
            x="3"
            y="16"
            width="18"
            height="4"
            rx="1"
            ry="1"
            strokeWidth="2"
          />
        </svg>
      ),
      title: "Built-in storage layer",
      description:
        "A globally distributed storage system built for high throughput and low latency. Designed for fast model loading, training data, or other datasets.",
    },
    {
      icon: (
        <svg
          className="w-10 h-10 text-green-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
          />
        </svg>
      ),
      title: "First-party integrations",
      description:
        "Mount your existing cloud buckets, connect to MLOps tools, and send data to your existing telemetry vendors.",
    },
    {
      icon: (
        <svg
          className="w-10 h-10 text-green-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <rect
            x="3"
            y="3"
            width="8"
            height="8"
            rx="1"
            ry="1"
            strokeWidth="2"
          />
          <rect
            x="13"
            y="13"
            width="8"
            height="8"
            rx="1"
            ry="1"
            strokeWidth="2"
          />
          <circle cx="7" cy="7" r="1" fill="currentColor" />
          <circle cx="17" cy="17" r="1" fill="currentColor" />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M11 7l2 2m0 0l2 2m-2-2l-2 2m2-2l2-2"
          />
        </svg>
      ),
      title: "Multi-cloud capacity pool",
      description:
        "Deep multi-cloud capacity with intelligent scheduling ensures you always have the CPUs and GPUs you need without managing input orchestration.",
    },
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Section - Introduction */}
          <div className="space-y-8">
            {/* Header */}
            <div className="text-sm font-medium text-gray-500 uppercase tracking-wide">
              PLATFORM
            </div>

            {/* Main Title */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              AI-POWERED DEVELOPMENT
            </h2>

            {/* Description */}
            <p className="text-sm md:text-base text-gray-400 text-left md:text-justify leading-relaxed max-w-lg">
              Today’s AI startups promise no‑code app building—but they struggle
              with platform code, because platforms manage resources in space
              and time, which requires spatial reasoning—something AI still
              handles poorly. As a result, AI‑generated apps default to
              high-level platforms (e.g., serverless, managed runtimes), which
              are easy for AI to target but deliver unhappy trade-offs: bloated
              runtime overhead, poor performance, and skyrocketing costs at
              scale.
            </p>

            {/* Learn More Button */}
            <button className="relative inline-flex items-center justify-center px-6 py-3 rounded-2xl font-medium text-white bg-blue-600 ring-1 ring-blue-400/40 shadow-[0_12px_28px_-12px_rgba(59,130,246,0.75)] hover:bg-blue-500 hover:shadow-[0_16px_40px_-12px_rgba(59,130,246,0.9)] transition-all duration-200">
              Get Started Now
            </button>
          </div>

          {/* Right Section - Features Grid */}
          <FeaturesSectionDemo />
        </div>
      </div>
    </section>
  );
};

export default Faetures;
