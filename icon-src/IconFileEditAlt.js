import * as React from "react";
const SvgIconFileEditAlt = ({ title, titleId, ...props }) => (
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
      d='m20.71 16.71-2.42-2.42a1.002 1.002 0 0 0-1.42 0l-3.58 3.58a1 1 0 0 0-.29.71V21a1 1 0 0 0 1 1h2.42a1 1 0 0 0 .71-.29l3.58-3.58a1.002 1.002 0 0 0 0-1.42ZM16 20h-1v-1l2.58-2.58 1 1L16 20Zm-6 0H6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h5v3a3 3 0 0 0 3 3h3v1a1 1 0 0 0 2 0V8.94a1.307 1.307 0 0 0-.06-.27v-.09a1.07 1.07 0 0 0-.19-.28l-6-6a1.071 1.071 0 0 0-.28-.19.32.32 0 0 0-.09 0L12.06 2H6a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h4a1 1 0 0 0 0-2Zm3-14.59L15.59 8H14a1 1 0 0 1-1-1V5.41ZM8 14h6a1 1 0 0 0 0-2H8a1 1 0 0 0 0 2Zm0-4h1a1 1 0 0 0 0-2H8a1 1 0 0 0 0 2Zm2 6H8a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2Z'
    />
  </svg>
);
export default SvgIconFileEditAlt;
