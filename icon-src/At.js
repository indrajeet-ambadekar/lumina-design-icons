import * as React from "react";
const SvgAt = ({ title, titleId, ...props }) => (
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
      d='M12 2a10 10 0 1 0 5 18.66 1 1 0 1 0-1-1.73A8 8 0 1 1 20 12v.75a1.75 1.75 0 0 1-3.5 0V8.5a1 1 0 0 0-1-1 1 1 0 0 0-1 .79A4.45 4.45 0 0 0 12 7.5a4.5 4.5 0 1 0 3.3 7.5 3.74 3.74 0 0 0 6.7-2.25V12A10 10 0 0 0 12 2m0 12.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5'
    />
  </svg>
);
export default SvgAt;
