import * as React from "react";
const SvgIconBath = ({ title, titleId, ...props }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='1em'
    height='1em'
    fill='none'
    viewBox='0 0 24 24'
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill='#000'
      d='M22 12H5V6.41a1.975 1.975 0 0 1 1.04-1.759c.35-.19.75-.27 1.148-.23a3.491 3.491 0 0 0 .837 3.554l1.06 1.06a1 1 0 0 0 1.415 0L14.035 5.5a1.001 1.001 0 0 0 0-1.414l-1.06-1.06a3.494 3.494 0 0 0-4.53-.343A3.992 3.992 0 0 0 3 6.41V12H2a1 1 0 1 0 0 2h1v3a2.995 2.995 0 0 0 2 2.816V21a1 1 0 1 0 2 0v-1h10v1a1 1 0 0 0 2 0v-1.184A2.995 2.995 0 0 0 21 17v-3h1a1 1 0 0 0 0-2ZM9.44 4.44a1.502 1.502 0 0 1 2.12 0l.354.353-2.121 2.121-.354-.353a1.501 1.501 0 0 1 0-2.122ZM19 17a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-3h14v3Z'
    />
  </svg>
);
export default SvgIconBath;
