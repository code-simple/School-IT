import * as React from "react";

function Tick(props) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" {...props}>
      <g clipPath="url(#prefix__clip0_231_196)">
        <path
          d="M10 19.375a9.375 9.375 0 100-18.75 9.375 9.375 0 100 18.75z"
          fill="#4BD37B"
        />
        <path
          d="M14.375 4.375l-6.563 6.75-2.187-2.25-2.188 2.25 4.376 4.5 8.75-9-2.188-2.25z"
          fill="#fff"
        />
      </g>
      <defs>
        <clipPath id="prefix__clip0_231_196">
          <path fill="#fff" d="M0 0h20v20H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default Tick;
