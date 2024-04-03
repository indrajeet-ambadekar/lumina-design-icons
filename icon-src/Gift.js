import * as React from "react";
const SvgGift = ({ title, titleId, ...props }) => (
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
      d='M20 12v10H4V12M22 7H2v5h20zM12 22V7M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7M12 7H7.5a2.5 2.5 0 1 1 0-5C11 2 12 7 12 7'
    />
  </svg>
);
export default SvgGift;
