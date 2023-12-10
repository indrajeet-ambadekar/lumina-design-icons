import * as React from "react";
const SvgPolygon = ({ title, titleId, ...props }) => (
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
      d='m21.87 11.5-4.5-7.79a1 1 0 0 0-.87-.5h-9a1 1 0 0 0-.87.5l-4.5 7.79a1 1 0 0 0 0 1l4.5 7.79a1 1 0 0 0 .87.5h9a1 1 0 0 0 .87-.5l4.5-7.79a1.001 1.001 0 0 0 0-1Zm-6 7.29H8.08L4.15 12l3.93-6.79h7.84L19.85 12l-3.98 6.79Z'
    />
  </svg>
);
export default SvgPolygon;
