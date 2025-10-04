const Architecture = () => {
  const features = [
    {
      icon: (
        <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center shadow-sm">
          <svg
            className="w-8 h-8 text-blue-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
            />
          </svg>
        </div>
      ),
      title: "CLOUD FUNCTION FRAMEWORK",
      description:
        "WinterTC provides serverless function execution with zero cold starts and instant scaling across global edge locations.",
    },
    {
      icon: (
        <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-lg flex items-center justify-center shadow-sm">
          <svg
            className="w-8 h-8 text-green-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
            />
          </svg>
        </div>
      ),
      title: "SERVICE FRAMEWORK",
      description:
        "Super-Server protocol suite enables high-performance inter-service communication with built-in load balancing and fault tolerance.",
    },
    {
      icon: (
        <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg flex items-center justify-center shadow-sm">
          <svg
            className="w-8 h-8 text-purple-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
        </div>
      ),
      title: "ACTOR FRAMEWORK",
      description:
        "Soft real-time micro-kernel provides deterministic execution with guaranteed response times for critical workloads.",
    },
    {
      icon: (
        <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-orange-200 rounded-lg flex items-center justify-center shadow-sm">
          <svg
            className="w-8 h-8 text-orange-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
        </div>
      ),
      title: "THREADING FRAMEWORK",
      description:
        "Event-based coroutine system delivers massive concurrency with minimal memory overhead and lock-free operations.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Approach
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A C-based service stack (mnvkd) built from four frameworks.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="relative">
              {/* Card */}
              <div className="bg-white rounded-lg p-8 h-full shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                {/* Icon */}
                <div className="mb-6">{feature.icon}</div>

                {/* Title */}
                <h3 className="text-lg font-bold text-gray-900 mb-4 uppercase tracking-wide">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Vertical Divider (except for last column) */}
              {index < features.length - 1 && (
                <div className="hidden lg:block absolute top-0 right-0 w-px h-full">
                  <div className="w-full h-full bg-gray-200"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Decorative Line */}
        <div className="mt-16 flex items-center justify-center">
          <div className="flex items-center w-full max-w-4xl">
            {/* Left Star */}
            <div className="w-4 h-4 bg-gray-300 transform rotate-45"></div>

            {/* Line */}
            <div className="flex-1 h-px bg-gray-300 mx-4"></div>

            {/* Right Star */}
            <div className="w-4 h-4 bg-gray-300 transform rotate-45"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Architecture;
