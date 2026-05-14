import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto ",
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
  title?: string | ReactNode;
  description?: string | ReactNode;
  header?: ReactNode;
  icon?: ReactNode;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-3xl group/bento hover:shadow-2xl transition duration-500 shadow-sm p-8 bg-white border border-gray-100 justify-between flex flex-col space-y-6",
        className
      )}
    >
      {header}
      <div className="group-hover/bento:translate-x-2 transition duration-300">
        <div className="flex items-center gap-3 mb-4">
           <div className="p-2 bg-primary/5 rounded-xl text-primary">
              {icon}
           </div>
           <div className="font-semibold text-primary text-xl">
             {title}
           </div>
        </div>
        <div className="font-medium text-foreground/50 text-sm leading-relaxed">
          {description}
        </div>
      </div>
    </div>
  );
};
