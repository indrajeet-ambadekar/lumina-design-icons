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
      d='M9 12H7a1 1 0 0 0 0 2h2a1 1 0 1 0 0-2Zm-1-2h4a1 1 0 1 0 0-2H8a1 1 0 1 0 0 2Zm1 6H7a1 1 0 0 0 0 2h2a1 1 0 1 0 0-2Zm12-4h-3V3a1 1 0 0 0-1.5-.87l-3 1.72-3-1.72a1 1 0 0 0-1 0l-3 1.72-3-1.72A1 1 0 0 0 2 3v16a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-6a1 1 0 0 0-1-1ZM5 20a1 1 0 0 1-1-1V4.73l2 1.14a1.08 1.08 0 0 0 1 0l3-1.72 3 1.72a1.08 1.08 0 0 0 1 0l2-1.14V19a3 3 0 0 0 .18 1H5Zm15-1a1 1 0 1 1-2 0v-5h2v5Zm-6.44-2.83a.762.762 0 0 0-.18-.09 1 1 0 0 0-1.09.21A1.05 1.05 0 0 0 12 17a1 1 0 0 0 .07.38c.054.122.129.233.22.33.097.088.209.16.33.21a.938.938 0 0 0 .76 0c.121-.05.233-.122.33-.21A1 1 0 0 0 14 17a1.05 1.05 0 0 0-.29-.71 1.59 1.59 0 0 0-.15-.12Zm.14-3.88a1 1 0 0 0-1.62.33A1 1 0 0 0 13 14a1 1 0 0 0 1-1 1.002 1.002 0 0 0-.08-.38.91.91 0 0 0-.22-.33Z'
    />
  </svg>
);
export default SvgReceipt;
