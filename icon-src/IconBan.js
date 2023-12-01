import * as React from "react";
const SvgIconBan = ({ title, titleId, ...props }) => (
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
      d='M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 18a8 8 0 0 1-8-8 7.92 7.92 0 0 1 1.69-4.9L16.9 18.31A7.92 7.92 0 0 1 12 20Zm6.31-3.1L7.1 5.69A7.92 7.92 0 0 1 12 4a8 8 0 0 1 8 8 7.92 7.92 0 0 1-1.69 4.9Z'
    />
  </svg>
);
export default SvgIconBan;
