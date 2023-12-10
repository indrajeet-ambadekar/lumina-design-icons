import * as React from "react";
const SvgBitcoinCircle = ({ title, titleId, ...props }) => (
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
      d='M12 1a11 11 0 1 0 0 22 11 11 0 0 0 0-22Zm0 20a9 9 0 1 1 0-18 9 9 0 0 1 0 18Zm2-14V6a1 1 0 0 0-2 0v1h-1V6a1 1 0 0 0-2 0v1H8a1 1 0 0 0 0 2h1v6H8a1 1 0 0 0 0 2h1v1a1 1 0 1 0 2 0v-1h1v1a1 1 0 0 0 2 0v-1a3 3 0 0 0 3-3 3 3 0 0 0-.77-2 3 3 0 0 0 .77-2 3 3 0 0 0-3-3Zm0 8h-3v-2h3a1 1 0 0 1 0 2Zm0-4h-3V9h3a1 1 0 1 1 0 2Z'
    />
  </svg>
);
export default SvgBitcoinCircle;
