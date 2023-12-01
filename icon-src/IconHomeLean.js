import * as React from "react";
const SvgIconHomeLean = ({ title, titleId, ...props }) => (
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
      d='m21.66 10.25-9-8a1 1 0 0 0-1.32 0l-9 8A1 1 0 0 0 3 12h1v9a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-9h1a1 1 0 0 0 .66-1.75ZM13 20h-2v-3a1 1 0 1 1 2 0v3Zm5 0h-3v-3a3 3 0 0 0-6 0v3H6v-8h12v8ZM5.63 10 12 4.34 18.37 10H5.63Z'
    />
  </svg>
);
export default SvgIconHomeLean;
