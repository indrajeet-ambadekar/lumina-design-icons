import * as React from "react";
const SvgIconTrademarkCircle = ({ title, titleId, ...props }) => (
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
      d='M10 9H7a1 1 0 0 0 0 2h.5v3a1 1 0 1 0 2 0v-3h.5a1 1 0 0 0 0-2Zm7.38.08a1 1 0 0 0-1.09.21L15 10.59l-1.29-1.3a1 1 0 0 0-1.09-.21A1 1 0 0 0 12 10v4a1 1 0 0 0 2 0v-1.59l.29.3a1.002 1.002 0 0 0 1.42 0l.29-.3V14a1 1 0 0 0 2 0v-4a1 1 0 0 0-.62-.92ZM12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 18a8 8 0 1 1 0-16.001A8 8 0 0 1 12 20Z'
    />
  </svg>
);
export default SvgIconTrademarkCircle;
