import * as React from "react";
const SvgGlassMartiniAlt = ({ title, titleId, ...props }) => (
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
      d='M21.78 3.62A1 1 0 0 0 21 2H3a1 1 0 0 0-.78 1.62L11 14.6V20H5.25a1 1 0 0 0 0 2h13.5a1 1 0 0 0 0-2H13v-5.4zM5.08 4h13.84l-2.4 3h-9zM12 12.65 9.08 9h5.84z'
    />
  </svg>
);
export default SvgGlassMartiniAlt;
