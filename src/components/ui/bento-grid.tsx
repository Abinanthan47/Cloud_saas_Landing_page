import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "group/bento row-span-1 flex flex-col justify-between space-y-4 rounded-xl border border-blue-500/20 bg-gradient-to-br from-slate-900/50 to-black/80 p-4 transition duration-200 hover:shadow-2xl hover:shadow-blue-500/10 hover:border-blue-400/30",
        className
      )}
    >
      {header}
      <div className="transition duration-200 group-hover/bento:translate-x-2">
        {icon}
        {title && (
          <div className="mt-2 mb-2 font-heading font-bold text-white">
            {title}
          </div>
        )}
        {description && (
          <div className="font-body text-sm font-normal text-slate-300">
            {description}
          </div>
        )}
      </div>
    </div>
  );
};
