import * as React from "react";
const SvgChartGrowthAlt = ({ title, titleId, ...props }) => (
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
      d='M21 20H4v-2h3a1 1 0 0 0 0-2H4v-2h7a1 1 0 0 0 0-2H4v-2h11a1 1 0 1 0 0-2H4V6h15a1 1 0 1 0 0-2H4V3a1 1 0 0 0-2 0v18a1 1 0 0 0 1 1h18a1 1 0 0 0 0-2'
    />
  </svg>
);
export default SvgChartGrowthAlt;
