import * as React from "react";
const SvgDocumentLayoutLeft = ({ title, titleId, ...props }) => (
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
      d='M3 12h6a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1m1-6h4v4H4zm9 2h8a1 1 0 1 0 0-2h-8a1 1 0 1 0 0 2m0 10H3a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2m8-4H3a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2m0-4h-8a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2'
    />
  </svg>
);
export default SvgDocumentLayoutLeft;
