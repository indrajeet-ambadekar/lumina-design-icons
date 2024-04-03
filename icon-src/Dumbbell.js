import * as React from "react";
const SvgDumbbell = ({ title, titleId, ...props }) => (
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
      d='m17.48 6.55-2.84-2.84a1 1 0 1 0-1.42 1.41l2.12 2.12-8.1 8.1-2.12-2.12a1 1 0 1 0-1.41 1.42l2.81 2.81 2.81 2.81a1 1 0 1 0 1.42-1.41l-2.09-2.09 8.1-8.1 2.12 2.12a1 1 0 1 0 1.41-1.42zM3.71 17.46a1.004 1.004 0 0 0-1.42 1.42l2.83 2.83a1 1 0 0 0 .71.29.999.999 0 0 0 .71-1.71zm18-12.34-2.83-2.83a1.004 1.004 0 0 0-1.42 1.42l2.83 2.83a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42'
    />
  </svg>
);
export default SvgDumbbell;
