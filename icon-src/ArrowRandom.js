import * as React from "react";
const SvgArrowRandom = ({ title, titleId, ...props }) => (
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
      d='M8.7 10a1 1 0 0 0 1.41 0 1 1 0 0 0 0-1.41l-6.27-6.3a1.004 1.004 0 0 0-1.42 1.42L8.7 10ZM21 14a1 1 0 0 0-1 1v3.59L15.44 14A1.018 1.018 0 1 0 14 15.44L18.59 20H15a1 1 0 0 0 0 2h6c.13-.002.26-.029.38-.08a1 1 0 0 0 .54-.54A.997.997 0 0 0 22 21v-6a1 1 0 0 0-1-1Zm.92-11.38a1 1 0 0 0-.54-.54A1 1 0 0 0 21 2h-6a1 1 0 0 0 0 2h3.59L2.29 20.29a1 1 0 0 0 .325 1.639 1 1 0 0 0 1.095-.219L20 5.41V9a1 1 0 0 0 2 0V3a.997.997 0 0 0-.08-.38Z'
    />
  </svg>
);
export default SvgArrowRandom;
