import React from "react";

export default function InfoCard(props) {
  return (
    <>
      <div className="info w-full h-full">
        <div className="title text-2xl font-bold pb-4 underline underline-offset-8">{props.title}</div>
        <div className="data">{props.children}</div>
      </div>
    </>
  );
}
