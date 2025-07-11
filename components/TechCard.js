import { cn } from "@/lib/utils";
import React from "react";

export default function TechCard(props) {
  return (
    <>
      <div className="w-full h-full flex items-start justify-center">
        <div
          className={cn(
            "cards w-40 h-20 flex items-center justify-center border border-black dark:border dark:border-white lg:hover:shadow-xl",
            props.className
          )}
        >
          {props.children}
        </div>
      </div>
    </>
  );
}
