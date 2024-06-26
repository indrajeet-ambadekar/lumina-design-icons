import * as React from "react";
const SvgGiftAlt = ({ title, titleId, ...props }) => (
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
      d='M18 7h-.35A3.45 3.45 0 0 0 18 5.5a3.49 3.49 0 0 0-6-2.44A3.49 3.49 0 0 0 6 5.5 3.45 3.45 0 0 0 6.35 7H6a3 3 0 0 0-3 3v2a1 1 0 0 0 1 1h1v6a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-6h1a1 1 0 0 0 1-1v-2a3 3 0 0 0-3-3m-7 13H8a1 1 0 0 1-1-1v-6h4zm0-9H5v-1a1 1 0 0 1 1-1h5zm0-4H9.5A1.5 1.5 0 1 1 11 5.5zm2-1.5A1.5 1.5 0 1 1 14.5 7H13zM17 19a1 1 0 0 1-1 1h-3v-7h4zm2-8h-6V9h5a1 1 0 0 1 1 1z'
    />
  </svg>
);
export default SvgGiftAlt;
