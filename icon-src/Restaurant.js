import * as React from "react";
const SvgRestaurant = ({ title, titleId, ...props }) => (
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
      d='M16.84 11.63a3 3 0 0 0 2.16-.88l2.83-2.83a1 1 0 1 0-1.42-1.41l-2.86 2.82a1 1 0 0 1-1.42 0l3.54-3.53a1.003 1.003 0 0 0-1.42-1.42l-3.53 3.54a1 1 0 0 1 0-1.41l2.83-2.83a1.003 1.003 0 0 0-1.42-1.42L13.3 5.09a3 3 0 0 0 0 4.24L12 10.62l-8.27-8.3-.1-.06a.7.7 0 0 0-.17-.11l-.18-.07L3.16 2h-.27a.6.6 0 0 0-.18 0 .7.7 0 0 0-.17.09l-.16.1h-.07l-.06.1a1 1 0 0 0-.11.17 1 1 0 0 0-.07.19v.11a11 11 0 0 0 3.11 9.34l2.64 2.63-5.41 5.4a1 1 0 0 0 .71 1.71 1 1 0 0 0 .71-.29l6.07-5.98 2.83-2.83 2-2a3 3 0 0 0 2.11.89m-7.65 1.82-2.63-2.64A9.06 9.06 0 0 1 4 5.4l6.61 6.6zm6.24.57A1.008 1.008 0 0 0 14 15.44l6.3 6.3a1 1 0 0 0 .7.26.998.998 0 0 0 .71-1.71z'
    />
  </svg>
);
export default SvgRestaurant;
