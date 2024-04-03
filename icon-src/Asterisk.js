import * as React from "react";
const SvgAsterisk = ({ title, titleId, ...props }) => (
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
      d='M18.562 14.634 14 12l4.562-2.634a1 1 0 0 0-1-1.732L13 10.268V5a1 1 0 0 0-2 0v5.268L6.438 7.634a1 1 0 0 0-1 1.732L10 12l-4.562 2.634a1 1 0 0 0 1 1.732L11 13.732V19a1 1 0 0 0 2 0v-5.268l4.562 2.634a1 1 0 0 0 1-1.732'
    />
  </svg>
);
export default SvgAsterisk;
