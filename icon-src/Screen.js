import * as React from "react";
const SvgScreen = ({ title, titleId, ...props }) => (
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
      d='M19 2H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h2.64l-.58 1a2 2 0 0 0 1.75 3h6.46A2 2 0 0 0 17 19l-.59-1H19a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3M8.77 20 10 18h4l1.2 2zM20 15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-1h16zm0-3H4V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1z'
    />
  </svg>
);
export default SvgScreen;
