import * as React from "react";
const SvgReceipt = ({ title, titleId, ...props }) => (
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
      d='M9 12H7a1 1 0 0 0 0 2h2a1 1 0 1 0 0-2m-1-2h4a1 1 0 1 0 0-2H8a1 1 0 1 0 0 2m1 6H7a1 1 0 0 0 0 2h2a1 1 0 1 0 0-2m12-4h-3V3a1 1 0 0 0-1.5-.87l-3 1.72-3-1.72a1 1 0 0 0-1 0l-3 1.72-3-1.72A1 1 0 0 0 2 3v16a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-6a1 1 0 0 0-1-1M5 20a1 1 0 0 1-1-1V4.73l2 1.14a1.08 1.08 0 0 0 1 0l3-1.72 3 1.72a1.08 1.08 0 0 0 1 0l2-1.14V19a3 3 0 0 0 .18 1zm15-1a1 1 0 1 1-2 0v-5h2zm-6.44-2.83a.8.8 0 0 0-.18-.09 1 1 0 0 0-1.09.21A1.05 1.05 0 0 0 12 17a1 1 0 0 0 .07.38q.082.184.22.33.147.134.33.21a.94.94 0 0 0 .76 0q.183-.077.33-.21A1 1 0 0 0 14 17a1.05 1.05 0 0 0-.29-.71 2 2 0 0 0-.15-.12m.14-3.88a1 1 0 0 0-1.62.33A1 1 0 0 0 13 14a1 1 0 0 0 1-1 1 1 0 0 0-.08-.38.9.9 0 0 0-.22-.33'
    />
  </svg>
);
export default SvgReceipt;
