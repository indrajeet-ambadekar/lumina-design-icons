import * as React from "react";
const SvgIconTachometerFast = ({ title, titleId, ...props }) => (
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
      d='m15.29 10.29-2.78 2.78A2.086 2.086 0 0 0 12 13a2 2 0 0 0-2 2c.002.172.026.344.07.51l-.78.78a1 1 0 0 0 .325 1.639 1 1 0 0 0 1.095-.219l.78-.78c.166.044.338.068.51.07a2 2 0 0 0 2-2 2.087 2.087 0 0 0-.07-.51l2.78-2.78a1.004 1.004 0 1 0-1.42-1.42ZM12 4A10 10 0 0 0 2 14a9.91 9.91 0 0 0 1.69 5.56 1.002 1.002 0 0 0 1.66-1.12 8 8 0 1 1 13.3 0 1 1 0 0 0 1.3 1.444 1 1 0 0 0 .36-.324A9.91 9.91 0 0 0 22 14 10 10 0 0 0 12 4Z'
    />
  </svg>
);
export default SvgIconTachometerFast;
