import * as React from "react";
const SvgCompressLines = ({ title, titleId, ...props }) => (
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
      d='M17 20h-4v-3.59l.79.8a1.002 1.002 0 0 0 1.639-.325 1 1 0 0 0-.219-1.095l-2.5-2.5a1 1 0 0 0-.33-.21 1 1 0 0 0-.76 0 1 1 0 0 0-.33.21l-2.5 2.5a1.003 1.003 0 1 0 1.42 1.42l.79-.8V20H7a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2M7 4h4v3.59l-.79-.8a1.003 1.003 0 1 0-1.42 1.42l2.5 2.5a1 1 0 0 0 .33.21.94.94 0 0 0 .76 0 1 1 0 0 0 .33-.21l2.5-2.5a1.005 1.005 0 0 0-.71-1.714 1 1 0 0 0-.71.294l-.79.8V4h4a1 1 0 1 0 0-2H7a1 1 0 0 0 0 2'
    />
  </svg>
);
export default SvgCompressLines;
