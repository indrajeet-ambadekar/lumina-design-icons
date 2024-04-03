import * as React from "react";
const SvgFileImport = ({ title, titleId, ...props }) => (
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
      d='M11 20H6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h5v3a3 3 0 0 0 3 3h3v2a1 1 0 0 0 2 0V8.94a1.3 1.3 0 0 0-.06-.27v-.09a1.3 1.3 0 0 0-.19-.29l-6-6a1.3 1.3 0 0 0-.29-.19.3.3 0 0 0-.09 0l-.31-.1H6a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h5a1 1 0 0 0 0-2m2-14.59L15.59 8H14a1 1 0 0 1-1-1zM19 15h-5.59l1.3-1.29a1.004 1.004 0 1 0-1.42-1.42l-3 3a1.2 1.2 0 0 0-.21.33 1 1 0 0 0 0 .76.9.9 0 0 0 .21.33l3 3a1.002 1.002 0 0 0 1.639-.325 1 1 0 0 0-.219-1.095L13.41 17H19a1 1 0 0 0 0-2'
    />
  </svg>
);
export default SvgFileImport;
