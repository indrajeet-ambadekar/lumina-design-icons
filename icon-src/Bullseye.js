import * as React from "react";
const SvgBullseye = ({ title, titleId, ...props }) => (
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
      d='M12 5a7 7 0 1 0 0 14 7 7 0 0 0 0-14Zm0 12a5 5 0 1 1 0-9.999A5 5 0 0 1 12 17Zm0-8a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm0 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0-12a11 11 0 1 0 0 22 11 11 0 0 0 0-22Zm0 20a9 9 0 1 1 0-18 9 9 0 0 1 0 18Z'
    />
  </svg>
);
export default SvgBullseye;
