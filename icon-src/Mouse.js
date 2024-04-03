import * as React from "react";
const SvgMouse = ({ title, titleId, ...props }) => (
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
      d='M12 2a7 7 0 0 0-7 7v6a7 7 0 1 0 14 0V9a7 7 0 0 0-7-7M7 9a5 5 0 0 1 4-4.9V10H7zm10 6a5 5 0 1 1-10 0v-3h10zm0-5h-4V4.1A5 5 0 0 1 17 9z'
    />
  </svg>
);
export default SvgMouse;
