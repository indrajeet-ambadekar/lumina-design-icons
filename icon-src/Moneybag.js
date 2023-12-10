import * as React from "react";
const SvgMoneybag = ({ title, titleId, ...props }) => (
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
      d='M12 11a3 3 0 1 0 0 5.999A3 3 0 0 0 12 11Zm0 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm7-9h-3V5a3 3 0 0 0-3-3h-2a3 3 0 0 0-3 3v1H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3Zm-9-1a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1h-4V5ZM4 9a1 1 0 0 1 1-1h1a2 2 0 0 1-2 2V9Zm1 11a1 1 0 0 1-1-1v-1a2 2 0 0 1 2 2H5Zm15-1a1 1 0 0 1-1 1h-1a2 2 0 0 1 2-2v1Zm0-3a4 4 0 0 0-4 4H8a4 4 0 0 0-4-4v-4a4 4 0 0 0 4-4h8a4 4 0 0 0 4 4v4Zm0-6a2 2 0 0 1-2-2h1a1 1 0 0 1 1 1v1Z'
    />
  </svg>
);
export default SvgMoneybag;
