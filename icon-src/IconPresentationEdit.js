import * as React from "react";
const SvgIconPresentationEdit = ({ title, titleId, ...props }) => (
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
      d='M9.41 13h2.42a1 1 0 0 0 .71-.29l3.58-3.58a1 1 0 0 0 0-1.41l-2.42-2.4a1 1 0 0 0-1.41 0L8.71 8.9a1 1 0 0 0-.3.7V12a1 1 0 0 0 1 1Zm1-3L13 7.44l1 1L11.42 11h-1l-.01-1ZM21 14h-1V4h1a1 1 0 1 0 0-2H3a1 1 0 0 0 0 2h1v10H3a1 1 0 0 0 0 2h8v1.15l-4.55 3A1 1 0 0 0 7 22a.94.94 0 0 0 .55-.17L11 19.55V21a1 1 0 0 0 2 0v-1.45l3.45 2.28A.94.94 0 0 0 17 22a1 1 0 0 0 .55-1.83l-4.55-3V16h8a1 1 0 0 0 0-2Zm-3 0H6V4h12v10Z'
    />
  </svg>
);
export default SvgIconPresentationEdit;
