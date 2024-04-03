import * as React from "react";
const SvgHeadphonesLean = ({ title, titleId, ...props }) => (
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
      d='M12 3A10 10 0 0 0 2 13v7a1 1 0 0 0 1 1h3a3 3 0 0 0 3-3v-2a3 3 0 0 0-3-3H4a8 8 0 0 1 16 0h-2a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h3a1 1 0 0 0 1-1v-7A10 10 0 0 0 12 3M6 15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H4v-4zm14 4h-2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h2z'
    />
  </svg>
);
export default SvgHeadphonesLean;
