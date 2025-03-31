import React from "react";

export default function Center({ children }) {
  return (
    <>
      <div className="w-[80%] h-full">
        <div className="flex h-full w-full">{children}</div>
      </div>
    </>
  );
}
