import * as React from "react";
const SvgIconArrowBreak = ({ title, titleId, ...props }) => (
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
      d='M7 11h10a1 1 0 1 0 0-2h-4V5.41l.79.8a1 1 0 0 0 1.639-.325 1 1 0 0 0-.219-1.095l-2.5-2.5a1 1 0 0 0-.33-.21 1 1 0 0 0-.76 0 1 1 0 0 0-.33.21l-2.5 2.5a1.004 1.004 0 0 0 1.42 1.42l.79-.8V9H7a1 1 0 0 0 0 2Zm10 2H7a1 1 0 0 0 0 2h4v3.59l-.79-.8a1.003 1.003 0 1 0-1.42 1.42l2.5 2.5a.999.999 0 0 0 .33.21.94.94 0 0 0 .76 0 .999.999 0 0 0 .33-.21l2.5-2.5a1.004 1.004 0 1 0-1.42-1.42l-.79.8V15h4a1 1 0 1 0 0-2Z'
    />
  </svg>
);
export default SvgIconArrowBreak;
