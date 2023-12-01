import * as React from "react";
const SvgIconSignin = ({ title, titleId, ...props }) => (
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
      d='M20 12a1 1 0 0 0-1-1h-7.59l2.3-2.29A1.005 1.005 0 0 0 13 6.996a1.004 1.004 0 0 0-.71.294l-4 4a1 1 0 0 0-.21.33 1 1 0 0 0 0 .76 1 1 0 0 0 .21.33l4 4a1.002 1.002 0 0 0 1.639-.325 1 1 0 0 0-.219-1.095L11.41 13H19a1 1 0 0 0 1-1ZM17 2H7a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-3a1 1 0 0 0-2 0v3a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v3a1 1 0 0 0 2 0V5a3 3 0 0 0-3-3Z'
    />
  </svg>
);
export default SvgIconSignin;
