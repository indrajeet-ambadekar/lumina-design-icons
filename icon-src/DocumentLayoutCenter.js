import * as React from "react";
const SvgDocumentLayoutCenter = ({ title, titleId, ...props }) => (
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
      d='M9 12h6a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1Zm1-6h4v4h-4V6Zm11 4h-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2Zm-2-2h2a1 1 0 1 0 0-2h-2a1 1 0 1 0 0 2ZM3 8h2a1 1 0 0 0 0-2H3a1 1 0 0 0 0 2Zm0 4h2a1 1 0 0 0 0-2H3a1 1 0 0 0 0 2Zm18 2H3a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2Zm-8 4H3a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2Z'
    />
  </svg>
);
export default SvgDocumentLayoutCenter;
