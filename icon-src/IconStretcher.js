import * as React from "react";
const SvgIconStretcher = ({ title, titleId, ...props }) => (
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
      d='M18 4.5h3a1 1 0 1 0 0-2h-3a1 1 0 1 0 0 2Zm3 2H3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h1.55l5.11 2.56-2.58 1.29A3 3 0 0 0 5 15.5a3 3 0 1 0 3 3c.01-.12.01-.24 0-.36l3.94-2 4.06 2.1a2.301 2.301 0 0 0 0 .26 3 3 0 1 0 3-3 2.999 2.999 0 0 0-2.15.92l-2.72-1.36 5.11-2.56H21a1 1 0 0 0 1-1v-4a1.001 1.001 0 0 0-1-1Zm-16 13a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm14-2a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm-7.1-3.56L9 12.5h5.75l-2.85 1.44ZM20 10.5H4v-2h16v2Z'
    />
  </svg>
);
export default SvgIconStretcher;
