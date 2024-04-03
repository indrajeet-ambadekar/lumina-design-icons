import * as React from "react";
const SvgMoneyWithdraw = ({ title, titleId, ...props }) => (
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
      d='M12 12a3 3 0 1 0 0 5.999A3 3 0 0 0 12 12m0 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2m-.71-6.29a1 1 0 0 0 .33.21.94.94 0 0 0 .76 0 1 1 0 0 0 .33-.21L15 7.46A1.032 1.032 0 1 0 13.54 6l-.54.59V3a1 1 0 0 0-2 0v3.59L10.46 6A1.032 1.032 0 1 0 9 7.46zM19 15a1 1 0 1 0-2 0 1 1 0 0 0 2 0m1-7h-3a1 1 0 1 0 0 2h3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h3a1 1 0 0 0 0-2H4a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h16a3 3 0 0 0 3-3v-8a3 3 0 0 0-3-3M5 15a1 1 0 1 0 2 0 1 1 0 0 0-2 0'
    />
  </svg>
);
export default SvgMoneyWithdraw;
