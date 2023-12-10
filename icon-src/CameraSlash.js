import * as React from "react";
const SvgCameraSlash = ({ title, titleId, ...props }) => (
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
      d='M3.71 2.29a1.004 1.004 0 1 0-1.42 1.42l2.8 2.79H5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h14.08l1.21 1.22a1 1 0 0 0 1.42 0 1.002 1.002 0 0 0 0-1.42l-18-18.01Zm6.49 9.33 2.68 2.68a2.001 2.001 0 0 1-.88.2 2 2 0 0 1-2-2 2 2 0 0 1 .2-.88ZM5 18.5a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h2.07l1.7 1.69A3.92 3.92 0 0 0 8 12.5a4 4 0 0 0 4 4 3.92 3.92 0 0 0 2.32-.77l2.77 2.77H5Zm14-12h-1.28l-.31-1a3 3 0 0 0-2.85-2h-4.4a1 1 0 1 0 0 2h4.4a1 1 0 0 1 .95.68l.54 1.63a1 1 0 0 0 .95.69h2a1 1 0 0 1 1 1v5.84a1 1 0 1 0 2 0V9.5a3 3 0 0 0-3-3Z'
    />
  </svg>
);
export default SvgCameraSlash;
