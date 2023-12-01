import * as React from "react";
const SvgIconMoneyBillStack = ({ title, titleId, ...props }) => (
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
      d='M20 1H4a3 3 0 0 0-3 3v16a3 3 0 0 0 3 3h16a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3ZM8 21H4a1 1 0 0 1-1-1v-1.18A3 3 0 0 0 4 19h4v2Zm0-4H4a1 1 0 0 1-1-1v-1.18A3 3 0 0 0 4 15h4v2Zm0-4H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4v10Zm6 8h-4v-6h4v6Zm0-8h-4V3h4v10Zm7 7a1 1 0 0 1-1 1h-4v-2h4a3 3 0 0 0 1-.18V20Zm0-4a1 1 0 0 1-1 1h-4v-2h4a3 3 0 0 0 1-.18V16Zm0-4a1 1 0 0 1-1 1h-4V3h4a1 1 0 0 1 1 1v8Zm-3-5a1 1 0 1 0 0 2 1 1 0 0 0 0-2ZM6 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z'
    />
  </svg>
);
export default SvgIconMoneyBillStack;
