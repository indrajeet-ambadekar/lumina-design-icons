import * as React from "react";
const SvgHardHat = ({ title, titleId, ...props }) => (
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
      d='M20 13.17V13a8 8 0 0 0-2.42-5.74 7.84 7.84 0 0 0-3.18-1.88h-.05A8.2 8.2 0 0 0 11.76 5 8.21 8.21 0 0 0 4 13.17 3 3 0 0 0 5 19h14a3 3 0 0 0 1-5.83M19 17H5a1 1 0 0 1 0-2h2a1 1 0 0 0 0-2H6a6.41 6.41 0 0 1 3-5.15V11a1 1 0 1 0 2 0V7.09q.407-.068.82-.09H12q.505.005 1 .1V11a1 1 0 1 0 2 0V7.82c.424.246.82.537 1.18.87A6 6 0 0 1 18 13h-1a1 1 0 0 0 0 2h2a1 1 0 0 1 0 2'
    />
  </svg>
);
export default SvgHardHat;
