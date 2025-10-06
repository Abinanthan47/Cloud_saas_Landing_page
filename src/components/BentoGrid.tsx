import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import Image from "next/image";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";

export function BentoGridSecondDemo() {
  return (
    <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={item.className}
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
);
const items = [
  {
    title: "Performance at Scale",
    description:
      "300K+ HTTP requests/sec per core on a commodity i7,with consistent sub ms median latency, deterministic memory",
    header: (
      <Image
        src="/performance.png"
        alt="performance"
        width={1000}
        height={500}
        className="object-cover w-full h-auto"
      />
    ),
    className: "md:col-span-2",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Ontological Objects",
    description:
      "Cache-aware design,   Locality of reference,Lambda calculus optimized",
    header: (
      <Image
        src="/fast2.png"
        alt="performance"
        width={500}
        height={500}
        className="object-cover w-full h-64"
      />
    ),
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Zero-overhead",
    description:
      "3× faster than Go goroutines, optimized  cache sizes, high-level  I/O",
    header: (
      <Image
        src="/speed2.png"
        alt="performance"
        width={1000}
        height={1000}
        className="object-cover w-full h-auto"
      />
    ),
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Virtual Sockets",
    description:
      "High-performance I/O buffers, Zero copy, no syscalls overhead, Toolkit like SQLite for networking",
    header: (
      <Image
        src="/graph.png"
        alt="performance"
        width={1000}
        height={200}
        className="object-contain w-full h-52"
      />
    ),
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
];
