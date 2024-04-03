import * as React from "react";
const SvgServerCloumn = ({ title, titleId, ...props }) => (
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
      d='M15 17a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-6 0H6a1 1 0 0 0 0 2h3a1 1 0 0 0 0-2m9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-3-6a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-6 0H6a1 1 0 0 0 0 2h3a1 1 0 0 0 0-2m9-6a1 1 0 1 0 0 2 1 1 0 0 0 0-2m0 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2m4-6a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v2a3 3 0 0 0 .78 2A3 3 0 0 0 2 11v2a3 3 0 0 0 .78 2A3 3 0 0 0 2 17v2a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-2a3 3 0 0 0-.78-2 3 3 0 0 0 .78-2v-2a3 3 0 0 0-.78-2A3 3 0 0 0 22 7zm-2 14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1zm0-6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1zm0-6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1zm-5-2a1 1 0 1 0 0 2 1 1 0 0 0 0-2M9 5H6a1 1 0 0 0 0 2h3a1 1 0 0 0 0-2'
    />
  </svg>
);
export default SvgServerCloumn;
