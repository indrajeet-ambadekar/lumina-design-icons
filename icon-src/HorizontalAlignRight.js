import * as React from "react";
const SvgHorizontalAlignRight = ({ title, titleId, ...props }) => (
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
      d='M21 2a1 1 0 0 0-1 1v3H9a1 1 0 0 0-1 1v3H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h17v3a1 1 0 0 0 2 0V3a1 1 0 0 0-1-1m-1 14H4v-4h16zm0-6H10V8h10z'
    />
  </svg>
);
export default SvgHorizontalAlignRight;
