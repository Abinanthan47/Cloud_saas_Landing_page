import Image from "next/image";

const Architecture = () => {
  const features = [
    {
      icon: (
        <div className="flex items-center justify-center ">
          <Image src="/cloud.png" alt="icon" width={50} height={50} />
        </div>
      ),
      title: "CLOUD FRAMEWORK",
      description:
        "WinterTC provides serverless function execution with zero cold starts and instant scaling across global edge locations.",
    },
    {
      icon: (
        <div className=" flex items-center justify-center  ">
          <Image src="/server.png" alt="icon" width={50} height={50} />
        </div>
      ),
      title: "SERVICE FRAMEWORK",
      description:
        "Super-Server protocol suite enables high-performance inter-service communication with built-in load balancing and fault tolerance.",
    },
    {
      icon: (
        <div className=" flex items-center justify-center ">
          <Image src="/profile.png" alt="icon" width={50} height={50} />
        </div>
      ),
      title: "ACTOR FRAMEWORK",
      description:
        "Soft real-time micro-kernel provides deterministic execution with guaranteed response times for critical workloads.",
    },
    {
      icon: (
        <div className=" flex items-center justify-center ">
          <Image src="/fast.png" alt="icon" width={50} height={50} />
        </div>
      ),
      title: "THREADING FRAMEWORK",
      description:
        "Event-based coroutine system delivers massive concurrency with minimal memory overhead and lock-free operations.",
    },
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white text-gray-900 mb-4">
            Our Approach
          </h2>
          <p className="text-lg  text-gray-600 max-w-2xl mx-auto">
            A C-based service stack (mnvkd) built from four frameworks.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 max-w-7xl mx-auto lg:grid-cols-4 gap-0 divide-x divide-y divide-white/10 rounded-2xl overflow-hidden ring-1 ring-white/10">
          {features.map((feature, index) => (
            <div key={index} className="relative">
              {/* Card */}
              <div className="bg-transparent p-8 h-full">
                {/* Icon */}
                <div className="mb-6 place-self-center">{feature.icon}</div>

                {/* Title */}
                <h3 className="text-lg font-bold text-center text-gray-200 mb-4 uppercase tracking-wide">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-500 text-justify leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Vertical Divider (except for last column) */}
              {/* {index < features.length - 1 && (
                <div className="hidden lg:block absolute top-0 right-0 w-px h-full">
                  <div className="w-full h-full bg-gray-200"></div>
                </div>
              )} */}
            </div>
          ))}
        </div>

        {/* Bottom Decorative Line */}
      </div>
    </section>
  );
};

export default Architecture;
