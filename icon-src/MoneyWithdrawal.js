import * as React from "react";
const SvgMoneyWithdrawal = ({ title, titleId, ...props }) => (
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
      d='M22 2H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h3v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-9h3a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1M7 20v-2a2 2 0 0 1 2 2zm10 0h-2a2 2 0 0 1 2-2zm0-4a4 4 0 0 0-4 4h-2a4 4 0 0 0-4-4V8h10zm4-6h-2V7a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v3H3V4h18zm-9 5a3 3 0 1 0 0-5.999A3 3 0 0 0 12 15m0-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2'
    />
  </svg>
);
export default SvgMoneyWithdrawal;
