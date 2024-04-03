import * as React from "react";
const SvgMoneyStack = ({ title, titleId, ...props }) => (
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
      d='M22 17H2a1 1 0 0 0 0 2h20a1 1 0 0 0 0-2m0 4H2a1 1 0 0 0 0 2h20a1 1 0 0 0 0-2M6 7a1 1 0 1 0 0 2 1 1 0 0 0 0-2m14-6H4a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h16a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3m1 11a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1zm-9-7a3 3 0 1 0 0 6 3 3 0 0 0 0-6m0 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2m6-2a1 1 0 1 0 0 2 1 1 0 0 0 0-2'
    />
  </svg>
);
export default SvgMoneyStack;
