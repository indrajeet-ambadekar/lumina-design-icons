import * as React from "react";
const SvgArrowsShrinkV = ({ title, titleId, ...props }) => (
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
      d='M13.79 10.21a1.002 1.002 0 0 0 1.639-.325 1 1 0 0 0-.219-1.095l-2.5-2.5a1 1 0 0 0-.33-.21 1 1 0 0 0-.76 0 1 1 0 0 0-.33.21l-2.5 2.5a1.004 1.004 0 0 0 1.42 1.42l.79-.8v5.18l-.79-.8a1.004 1.004 0 1 0-1.42 1.42l2.5 2.5a1 1 0 0 0 .33.21.94.94 0 0 0 .76 0 1 1 0 0 0 .33-.21l2.5-2.5a1.004 1.004 0 1 0-1.42-1.42l-.79.8V9.41zM7 4h10a1 1 0 1 0 0-2H7a1 1 0 0 0 0 2m10 16H7a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2'
    />
  </svg>
);
export default SvgArrowsShrinkV;
