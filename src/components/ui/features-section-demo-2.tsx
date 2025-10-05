import { cn } from "@/lib/utils";
import {
  IconCpu,
  IconGitBranch,
  IconScale,
  IconShieldLock,
} from "@tabler/icons-react";
import type React from "react";

export default function FeaturesSectionDemo() {
  const features = [
    {
      title:
        "Single huge-page fault loads the entire micro-process on each I/O dispatch",
      icon: <IconCpu className="h-6 w-6 text-blue-400" />,
    },
    {
      title: "Persistent, memory-protected mappings backed by huge pages",
      icon: <IconShieldLock className="h-6 w-6 text-blue-400" />,
    },
    {
      title:
        "104 KB footprint per actor (8 KB process + 96 KB tunable ring buffers)",
      icon: <IconScale className="h-6 w-6 text-blue-400" />,
    },
    {
      title:
        "Cooperative and isolated scheduling, Language-agnostic bindings (C, JavaScript, etc.)",
      icon: <IconGitBranch className="h-6 w-6 text-blue-400" />,
    },
    // language-agnostic bindings already included in previous line; keep a separate visual mention with a code icon
  ];
  return (
    <div className="relative z-10 py-10 max-w-7xl mx-auto dark">
      <h3 className="text-lg uppercase text-neutral-200 mb-4 px-10">
        Key Features
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2">
        {features.map((feature, index) => (
          <Feature key={feature.title} {...feature} index={index} />
        ))}
      </div>
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col md:border-r py-10 relative group/feature dark:border-neutral-800",
        index % 2 === 0 && "md:border-l dark:border-neutral-800",
        index < 2 && "md:border-b dark:border-neutral-800"
      )}
    >
      {index < 2 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-blue-200 to-transparent dark:from-blue-900/30 pointer-events-none" />
      )}
      {index >= 2 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-blue-200 to-transparent dark:from-blue-900/30 pointer-events-none" />
      )}
      {icon ? (
        <div className="mb-4 relative place-self-center z-10 px-10">
          <div className="relative inline-flex rounded-2xl p-[2px] bg-gradient-to-br from-blue-500 to-indigo-600 shadow-[0_12px_28px_-14px_rgba(59,130,246,0.6)]">
            <div className="h-12 w-12 rounded-2xl bg-black/80 backdrop-blur-[2px] flex items-center justify-center shadow-[inset_0_-6px_12px_rgba(0,0,0,0.45),inset_0_8px_16px_rgba(59,130,246,0.06)]">
              {icon}
            </div>
          </div>
        </div>
      ) : null}
      <div className="text-sm text-center mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      {description ? (
        <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
          {description}
        </p>
      ) : null}
    </div>
  );
};
