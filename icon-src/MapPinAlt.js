import * as React from "react";
const SvgMapPinAlt = ({ title, titleId, ...props }) => (
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
      d='M11 11.9V17a1 1 0 0 0 2 0v-5.1a5 5 0 1 0-2 0M12 4a3 3 0 1 1 0 6 3 3 0 0 1 0-6m4.21 10.42a1.021 1.021 0 1 0-.42 2C18.06 16.87 19 17.68 19 18c0 .58-2.45 2-7 2s-7-1.42-7-2c0-.32.94-1.13 3.21-1.62a1.021 1.021 0 1 0-.42-2C4.75 15.08 3 16.39 3 18c0 2.63 4.53 4 9 4s9-1.37 9-4c0-1.61-1.75-2.92-4.79-3.58'
    />
  </svg>
);
export default SvgMapPinAlt;
