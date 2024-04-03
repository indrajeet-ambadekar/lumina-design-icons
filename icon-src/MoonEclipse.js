import * as React from "react";
const SvgMoonEclipse = ({ title, titleId, ...props }) => (
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
      d='M12 2a10 10 0 0 0-2.14.24h-.12a10 10 0 0 0-.1 19.44h.14c.725.193 1.47.3 2.22.32a10 10 0 0 0 0-20m-2 17.74a8 8 0 0 1 0-15.48 8 8 0 0 1 0 15.48m4.53-.16a10 10 0 0 0 0-15.16 8 8 0 0 1 0 15.16'
    />
  </svg>
);
export default SvgMoonEclipse;
