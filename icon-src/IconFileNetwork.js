import * as React from "react";
const SvgIconFileNetwork = ({ title, titleId, ...props }) => (
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
      d='M21 19h-6.18A3 3 0 0 0 13 17.18V15h3a3 3 0 0 0 3-3V7.94a1.307 1.307 0 0 0-.06-.27v-.09a1.07 1.07 0 0 0-.19-.28l-6-6a1.071 1.071 0 0 0-.28-.19.32.32 0 0 0-.09 0 .88.88 0 0 0-.33-.11H8a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h3v2.18A3 3 0 0 0 9.18 19H3a1 1 0 0 0 0 2h6.18a3 3 0 0 0 5.64 0H21a1 1 0 0 0 0-2ZM13 4.41 15.59 7H14a1 1 0 0 1-1-1V4.41ZM8 13a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h3v3a3 3 0 0 0 3 3h3v3a1 1 0 0 1-1 1H8Zm4 8a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z'
    />
  </svg>
);
export default SvgIconFileNetwork;
