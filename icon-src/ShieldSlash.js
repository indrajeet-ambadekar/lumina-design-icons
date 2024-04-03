import * as React from "react";
const SvgShieldSlash = ({ title, titleId, ...props }) => (
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
      d='m21.71 20.29-16-16-2-2a1.004 1.004 0 0 0-1.42 1.42L4 5.41v6.47a9 9 0 0 0 3.77 7.32l3.65 2.61a1 1 0 0 0 1.16 0l3.65-2.61q.454-.322.86-.7l3.2 3.21a1 1 0 0 0 1.095.219 1 1 0 0 0 .325-.22 1 1 0 0 0 0-1.42m-6.64-2.71L12 19.77l-3.07-2.19A7 7 0 0 1 6 11.88V7.41l9.67 9.68c-.19.17-.39.33-.6.49m-5-12.51c.672-.225 1.32-.52 1.93-.88a9.82 9.82 0 0 0 6 1.39v6.3q0 .594-.1 1.18a1 1 0 0 0 .83 1.15h.16a1 1 0 0 0 1-.84q.118-.745.12-1.5V4.43a1 1 0 0 0-.37-.77 1 1 0 0 0-.83-.21 7.9 7.9 0 0 1-6.23-1.27 1 1 0 0 0-1.14 0 8 8 0 0 1-2 1 1.003 1.003 0 1 0 .64 1.9z'
    />
  </svg>
);
export default SvgShieldSlash;
