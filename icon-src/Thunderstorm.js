import * as React from "react";
const SvgThunderstorm = ({ title, titleId, ...props }) => (
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
      d='M13.5 15h-2.27l1.45-2.5a1.004 1.004 0 1 0-1.74-1l-2.31 4A1 1 0 0 0 9.5 17h2.27l-1.45 2.5a1.004 1.004 0 0 0 1.74 1l2.31-4a1 1 0 0 0-.87-1.5m4.92-7.79a7 7 0 0 0-13.36 1.9A4 4 0 0 0 6 17a1 1 0 1 0 0-2 2 2 0 1 1 0-4 1 1 0 0 0 1-1 5 5 0 0 1 9.73-1.61 1 1 0 0 0 .78.66A3 3 0 0 1 17 15a1 1 0 0 0 0 2 5 5 0 0 0 1.42-9.79'
    />
  </svg>
);
export default SvgThunderstorm;
