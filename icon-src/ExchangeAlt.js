import * as React from "react";
const SvgExchangeAlt = ({ title, titleId, ...props }) => (
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
      d='m21.71 9.29-4-4a1.004 1.004 0 1 0-1.42 1.42L18.59 9H7a1 1 0 0 0 0 2h14a.999.999 0 0 0 .92-.62 1 1 0 0 0-.21-1.09ZM17 13H3a1 1 0 0 0-.92.62 1 1 0 0 0 .21 1.09l4 4a.998.998 0 0 0 1.42 0 .999.999 0 0 0 0-1.42L5.41 15H17a1 1 0 1 0 0-2Z'
    />
  </svg>
);
export default SvgExchangeAlt;
