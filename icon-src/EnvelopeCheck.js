import * as React from "react";
const SvgEnvelopeCheck = ({ title, titleId, ...props }) => (
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
      d='M16.29 8.71a1 1 0 0 0 1.42 0l4-4a1.004 1.004 0 1 0-1.42-1.42L17 6.59l-1.29-1.3a1.003 1.003 0 1 0-1.42 1.42zM21 8a1 1 0 0 0-1 1v9a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8.41l5.88 5.89a3 3 0 0 0 2.11.87 3.08 3.08 0 0 0 2.16-.9l1.72-1.72a1.004 1.004 0 1 0-1.42-1.42l-1.75 1.75a1 1 0 0 1-1.4 0L5.41 7H11a1 1 0 1 0 0-2H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V9a1 1 0 0 0-1-1'
    />
  </svg>
);
export default SvgEnvelopeCheck;
