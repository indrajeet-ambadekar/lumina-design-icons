import * as React from "react";
const SvgEnvelopeShare = ({ title, titleId, ...props }) => (
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
      d='M20 14a1 1 0 0 0-1 1v4a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.41l5.88 5.89a3 3 0 0 0 2.11.87 3.08 3.08 0 0 0 2.16-.9l1.72-1.72a1.004 1.004 0 0 0-1.42-1.42l-1.75 1.75a1 1 0 0 1-1.4 0L4.41 8H10a1 1 0 1 0 0-2H4a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-4a1 1 0 0 0-1-1m0-6a2 2 0 0 0-1.18.39l-1.75-.8L19 6.71A2 2 0 0 0 20 7a2 2 0 1 0-2-2l-1.9.87A2 2 0 0 0 15 5.5a2 2 0 0 0 0 4c.322 0 .639-.082.92-.24l2.1 1A2 2 0 1 0 20 8'
    />
  </svg>
);
export default SvgEnvelopeShare;
