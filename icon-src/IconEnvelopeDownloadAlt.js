import * as React from "react";
const SvgIconEnvelopeDownloadAlt = ({ title, titleId, ...props }) => (
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
      d='M11.29 8.79a1 1 0 0 0 1.42 0l2-2a1 1 0 1 0-1.42-1.41l-.29.29V2.92a1 1 0 0 0-2 0v2.75l-.29-.29a1 1 0 1 0-1.42 1.41l2 2ZM16 11.08H8a3 3 0 0 0-3 3v5a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-5a3 3 0 0 0-3-3Zm-.42 2L12.7 16a1 1 0 0 1-1.4 0l-2.88-2.92h7.16Zm1.42 6a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-4.59l2.88 2.88a3 3 0 0 0 4.24 0L17 14.49v4.59Z'
    />
  </svg>
);
export default SvgIconEnvelopeDownloadAlt;
