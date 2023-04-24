import * as React from "react";
const SvgIconAtSign = ({ title, titleId, ...props }) => (
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
      stroke='#000'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z'
    />
    <path
      stroke='#000'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94'
    />
  </svg>
);
export default SvgIconAtSign;
