import * as React from "react";
const SvgTvRetro = ({ title, titleId, ...props }) => (
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
      d='M18 6h-3.59l2.3-2.29A1.005 1.005 0 0 0 16 1.996c-.266 0-.522.106-.71.294L12 5.54l-1.17-2a1.004 1.004 0 0 0-1.74 1L10 6H6a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3v1a1 1 0 1 0 2 0v-1h8v1a1 1 0 1 0 2 0v-1a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3m1 11a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1z'
    />
  </svg>
);
export default SvgTvRetro;
