import * as React from "react";
const SvgIconMaximize2 = ({ title, titleId, ...props }) => (
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
      stroke='#000'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='M9 21H3v-6M3 21l7-7M15 3h6v6M21 3l-7 7'
    />
  </svg>
);
export default SvgIconMaximize2;
