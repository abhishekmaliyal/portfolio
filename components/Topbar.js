import Link from "next/link";
import React from "react";

export default function Topbar() {
  return (
    <>
      <div className="topbar flex items-center justify-between">
        <div className="title w-[10%] flex justify-center">
          <Link className="font-bold text-4xl" href="/">
            am.
          </Link>
        </div>
        <div className="available flex justify-center items-center w-[10%] text-green-500 font-bold text-lg">
          <p className="text-4xl">&#x2022;</p> available
        </div>
      </div>
    </>
  );
}
