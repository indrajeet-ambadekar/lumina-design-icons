import * as React from "react";
const SvgCheckAlt = ({ title, titleId, ...props }) => (
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
      d='M18.71 7.21a.999.999 0 0 0-1.42 0l-7.45 7.46-3.13-3.14A1.023 1.023 0 0 0 5.29 13l3.84 3.84a1 1 0 0 0 1.42 0l8.16-8.16a.999.999 0 0 0 0-1.47Z'
    />
  </svg>
);
export default SvgCheckAlt;
