import * as React from "react";
const SvgBitcoinAlt = ({ title, titleId, ...props }) => (
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
      d='M16.304 11.241a3.998 3.998 0 0 0-3.312-6.239v-1a1 1 0 0 0-2 0v1h-2v-1a1 1 0 0 0-2 0v1h-1a1 1 0 0 0 0 2h1v10h-1a1 1 0 0 0 0 2h1v1a1 1 0 1 0 2 0v-1h2v1a1 1 0 0 0 2 0v-1h2a3.99 3.99 0 0 0 1.312-7.76M8.992 7.002h4a2 2 0 0 1 0 4h-4zm6 10h-6v-4h6a2 2 0 0 1 0 4'
    />
  </svg>
);
export default SvgBitcoinAlt;
