import * as React from "react";
const SvgAmbulance = ({ title, titleId, ...props }) => (
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
      d='M10.5 9.5h-1v-1a1 1 0 0 0-2 0v1h-1a1 1 0 0 0 0 2h1v1a1 1 0 1 0 2 0v-1h1a1 1 0 0 0 0-2Zm12.43 2.15-.06-.11a.611.611 0 0 0-.07-.14l-2.4-3.2A3 3 0 0 0 18 7h-2V6a3 3 0 0 0-3-3H4a3 3 0 0 0-3 3v11a1 1 0 0 0 1 1h1a3 3 0 0 0 6 0h6a3 3 0 0 0 6 0h1a1 1 0 0 0 1-1v-5a1.002 1.002 0 0 0-.07-.35ZM6 19a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm8-3H8.22a3 3 0 0 0-4.44 0H3V6a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v10Zm2-7h2a1 1 0 0 1 .8.4L20 11h-4V9Zm2 10a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm3-3h-.78a3 3 0 0 0-4.22-.22V13h5v3Z'
    />
  </svg>
);
export default SvgAmbulance;
