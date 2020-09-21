import React from "react";

export default function ChevronDown({ ...props }) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8 13.3335L16 21.3335L24 13.3335"
        stroke="#383B41"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
