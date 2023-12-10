import * as React from "react";
const SvgFileBlockAlt = ({ title, titleId, ...props }) => (
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
      d='M7 8a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2H7Zm5 12H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h5v3a3 3 0 0 0 3 3h3v1a1 1 0 0 0 2 0V8.94a1.307 1.307 0 0 0-.06-.27v-.09a1.07 1.07 0 0 0-.19-.28l-6-6a1.071 1.071 0 0 0-.28-.19.32.32 0 0 0-.09 0L11.06 2H5a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h7a1 1 0 0 0 0-2Zm0-14.59L14.59 8H13a1 1 0 0 1-1-1V5.41Zm8.83 9.76a4.1 4.1 0 0 0-5.66 0 4 4 0 1 0 5.66 0ZM16 18a2 2 0 0 1 2-2c.172.002.343.026.51.07l-2.44 2.44A2.087 2.087 0 0 1 16 18Zm3.41 1.41a2 2 0 0 1-1.91.5l2.43-2.42c.044.167.068.338.07.51a2 2 0 0 1-.59 1.41ZM11 18a1 1 0 0 0 0-2H7a1 1 0 0 0 0 2h4Zm2-6H7a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2Z'
    />
  </svg>
);
export default SvgFileBlockAlt;
