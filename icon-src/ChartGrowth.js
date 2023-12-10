import * as React from "react";
const SvgChartGrowth = ({ title, titleId, ...props }) => (
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
      d='M21 20h-1V5a1 1 0 0 0-2 0v15h-2V9a1 1 0 0 0-2 0v11h-2v-7a1 1 0 0 0-2 0v7H8v-3a1 1 0 1 0-2 0v3H4V3a1 1 0 0 0-2 0v18a1 1 0 0 0 1 1h18a1 1 0 0 0 0-2Z'
    />
  </svg>
);
export default SvgChartGrowth;
