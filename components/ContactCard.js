import React from "react";

export default function ContactCard(prop) {
  return (
    <>
      <a href={prop.link}>
        <div className="contact w-60 h-24 flex items-center justify-center border border-black dark:border dark:border-white">{prop.children}</div>
      </a>
    </>
  );
}
