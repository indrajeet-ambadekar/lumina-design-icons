import * as React from "react";
const SvgConstructor = ({ title, titleId, ...props }) => (
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
      d='M20 9.67V9.5a7.95 7.95 0 0 0-5.59-7.62h-.06a8.3 8.3 0 0 0-2.59-.36A8.21 8.21 0 0 0 4 9.67a3 3 0 0 0 0 5.66 8 8 0 0 0 8 7.17h.23a8.13 8.13 0 0 0 7.68-7.16A3 3 0 0 0 20 9.67M12.18 20.5a6 6 0 0 1-6.09-5h11.77a6.09 6.09 0 0 1-5.68 5m6.82-7H5a1 1 0 0 1 0-2h2a1 1 0 0 0 0-2H6a6.4 6.4 0 0 1 3-5.15V7.5a1 1 0 1 0 2 0V3.59q.407-.068.82-.09H12q.504.007 1 .09V7.5a1 1 0 1 0 2 0V4.32c.424.246.82.537 1.18.87A6 6 0 0 1 18 9.5h-1a1 1 0 1 0 0 2h2a1 1 0 1 1 0 2'
    />
  </svg>
);
export default SvgConstructor;
