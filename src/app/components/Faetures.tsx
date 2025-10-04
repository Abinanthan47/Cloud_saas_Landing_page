const Faetures = () => {
  const features = [
    {
      icon: (
        <svg
          className="w-8 h-8 text-green-700"
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
          className="w-8 h-8 text-green-700"
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
          className="w-8 h-8 text-green-700"
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
          className="w-8 h-8 text-green-700"
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
    <section className="py-20 bg-green-50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Section - Introduction */}
          <div className="space-y-8">
            {/* Header */}
            <div className="text-sm font-medium text-gray-600 uppercase tracking-wide">
              PLATFORM
            </div>

            {/* Main Title */}
            <h2 className="text-4xl lg:text-5xl font-bold text-green-800 leading-tight">
              Build on a powerful foundation
            </h2>

            {/* Description */}
            <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
              From filesystem to runtime, every layer of DataVec's platform is
              engineered to give you the tools to build robust, scalable data
              applications.
            </p>

            {/* Learn More Button */}
            <button className="bg-green-50 border-2 border-green-700 text-green-700 px-6 py-3 rounded-lg font-medium hover:bg-green-100 transition-colors duration-200">
              Learn More
            </button>
          </div>

          {/* Right Section - Features Grid */}
          <div className="grid grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="space-y-4">
                {/* Icon */}
                <div className="w-12 h-12 flex items-center justify-center">
                  {feature.icon}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-green-800">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faetures;
