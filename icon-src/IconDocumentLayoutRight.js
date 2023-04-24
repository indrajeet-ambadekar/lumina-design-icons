import * as React from "react";
const SvgIconDocumentLayoutRight = ({ title, titleId, ...props }) => (
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
      d='M13 18H3a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2ZM3 8h8a1 1 0 1 0 0-2H3a1 1 0 0 0 0 2Zm0 4h8a1 1 0 0 0 0-2H3a1 1 0 0 0 0 2Zm18 2H3a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2Zm0-10h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1Zm-1 6h-4V6h4v4Z'
    />
  </svg>
);
export default SvgIconDocumentLayoutRight;
