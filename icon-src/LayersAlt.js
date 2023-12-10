import * as React from "react";
const SvgLayersAlt = ({ title, titleId, ...props }) => (
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
      d='M21 2H9a1 1 0 0 0-1 1v4H6a1 1 0 0 0-1 1v4H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-2h4a1 1 0 0 0 1-1v-2h4a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1ZM10 20H4v-6h6v6Zm5-3h-3v-4a1 1 0 0 0-1-1H7V9h8v8Zm5-3h-3V8a1 1 0 0 0-1-1h-6V4h10v10Z'
    />
  </svg>
);
export default SvgLayersAlt;
