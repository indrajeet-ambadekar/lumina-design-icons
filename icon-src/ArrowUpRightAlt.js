import * as React from "react";
const SvgArrowUpRightAlt = ({ title, titleId, ...props }) => (
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
      d='M17.92 6.62a1 1 0 0 0-.54-.54A1 1 0 0 0 17 6H7a1 1 0 0 0 0 2h7.59l-8.3 8.29a1 1 0 0 0 .325 1.639 1 1 0 0 0 1.095-.219L16 9.41V17a1 1 0 0 0 2 0V7a.997.997 0 0 0-.08-.38Z'
    />
  </svg>
);
export default SvgArrowUpRightAlt;
