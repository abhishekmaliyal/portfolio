import React from "react";

export default function ProjectTitle({ children }) {
  return (
    <>
      <div className="w-[10%] h-full flex items-start justify-center pt-20">
        <div className="title underline underline-offset-[15px] decoration-4 text-5xl transform -rotate-90">
          {children}
        </div>
      </div>
    </>
  );
}
