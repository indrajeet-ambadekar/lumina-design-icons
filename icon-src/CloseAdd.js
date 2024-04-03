import * as React from "react";
const SvgCloseAdd = ({ title, titleId, ...props }) => (
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
      d='M14.71 7.29a1 1 0 0 0-1.42 0L11 9.59l-2.29-2.3a1.004 1.004 0 1 0-1.42 1.42L9.59 11l-2.3 2.29a1 1 0 0 0 .325 1.639 1 1 0 0 0 1.095-.219l2.29-2.3 2.29 2.3a1.002 1.002 0 0 0 1.639-.325 1 1 0 0 0-.219-1.095L12.41 11l2.3-2.29a1 1 0 0 0 0-1.42M7 18a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3 1 1 0 0 0 0-2 5 5 0 0 0-5 5v8a5 5 0 0 0 5 5 1 1 0 0 0 0-2M18 7v6a1 1 0 0 0 2 0V7a5 5 0 0 0-5-5 1 1 0 1 0 0 2 3 3 0 0 1 3 3m3 11h-1v-1a1 1 0 0 0-2 0v1h-1a1 1 0 0 0 0 2h1v1a1 1 0 0 0 2 0v-1h1a1 1 0 0 0 0-2'
    />
  </svg>
);
export default SvgCloseAdd;
