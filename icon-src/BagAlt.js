import * as React from "react";
const SvgBagAlt = ({ title, titleId, ...props }) => (
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
      d='M19 6.5h-3v-1a3 3 0 0 0-3-3h-2a3 3 0 0 0-3 3v1H5a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-9a3 3 0 0 0-3-3m-9-1a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1h-4zm10 13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V13a21.7 21.7 0 0 0 8 1.53A21.8 21.8 0 0 0 20 13zm0-7.69a19.9 19.9 0 0 1-16 0V9.5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1z'
    />
  </svg>
);
export default SvgBagAlt;
