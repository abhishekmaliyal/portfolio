import { cn } from "@/lib/utils";
import React from "react";

export default function ContactCard(props) {
  return (
    <>
      <a href={props.link}>
        <div className={cn("contact w-60 h-24 flex items-center justify-center border border-black dark:border dark:border-white lg:hover:shadow-xl",props.className)}>{props.children}</div>
      </a>
    </>
  );
}
