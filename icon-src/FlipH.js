import * as React from "react";
const SvgFlipH = ({ title, titleId, ...props }) => (
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
      d='M21 11H3a1 1 0 0 0 0 2h18a1 1 0 1 0 0-2M10.93 9h1.5a1 1 0 1 0 0-2h-1.5a1 1 0 1 0 0 2m4.5-1a1 1 0 0 0 1 1H17a1 1 0 0 0 .92-.62 1 1 0 0 0-.21-1.09l-.66-.65a1 1 0 0 0-1.6 1.15q-.018.105-.02.21m-3.78-3.23.35-.36.81.81a1 1 0 0 0 1.41 0 1 1 0 0 0 0-1.41l-1.06-1.06a.9.9 0 0 0-.26-.19 1 1 0 0 0-1.61-.27l-1.06 1.06a1.004 1.004 0 0 0 1.42 1.42M17 15H7a1 1 0 0 0-.92.62 1 1 0 0 0 .21 1.09l5 5a1 1 0 0 0 1.42 0l5-5a1 1 0 0 0 .21-1.09A1 1 0 0 0 17 15m-5 4.59L9.41 17h5.18zM7.05 9a1 1 0 0 0 .71-.29L8.82 7.6A1.004 1.004 0 0 0 7.4 6.18L6.34 7.24a1 1 0 0 0 0 1.42 1 1 0 0 0 .71.34'
    />
  </svg>
);
export default SvgFlipH;
