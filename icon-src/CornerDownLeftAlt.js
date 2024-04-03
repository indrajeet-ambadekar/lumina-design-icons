import * as React from "react";
const SvgCornerDownLeftAlt = ({ title, titleId, ...props }) => (
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
      d='M18.69 2a1 1 0 0 0-1 1v10.37a2 2 0 0 1-2 2h-8l2.92-2.92A1 1 0 0 0 9.24 11l-4.63 4.66a1.2 1.2 0 0 0-.22.33 1 1 0 0 0 .22 1.09l4.63 4.63a1 1 0 0 0 1.41-1.42l-2.92-2.92h8a4 4 0 0 0 4-4V3a1 1 0 0 0-1.04-1'
    />
  </svg>
);
export default SvgCornerDownLeftAlt;
