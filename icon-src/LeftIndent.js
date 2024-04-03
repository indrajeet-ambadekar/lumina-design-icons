import * as React from "react";
const SvgLeftIndent = ({ title, titleId, ...props }) => (
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
      d='M3 7h18a1 1 0 1 0 0-2H3a1 1 0 0 0 0 2m0 4h10a1 1 0 0 0 0-2H3a1 1 0 0 0 0 2m18.77-1.31a1 1 0 0 0-1.41-.12l-2 1.66a1 1 0 0 0 0 1.54l2 1.66a1 1 0 0 0 .64.24 1.001 1.001 0 0 0 .64-1.77l-1.08-.9 1.08-.9a.997.997 0 0 0 .13-1.41M21 17H3a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2M3 15h10a1 1 0 0 0 0-2H3a1 1 0 0 0 0 2'
    />
  </svg>
);
export default SvgLeftIndent;
