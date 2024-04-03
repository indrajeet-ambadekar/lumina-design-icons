import * as React from "react";
const SvgEnvelopeSend = ({ title, titleId, ...props }) => (
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
      d='M16 10.5H8a3 3 0 0 0-3 3v5a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-5a3 3 0 0 0-3-3m-.42 2-2.88 2.88a1 1 0 0 1-1.4 0L8.42 12.5zm1.42 6a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-4.59l2.88 2.87a2.94 2.94 0 0 0 2.12.89 3 3 0 0 0 2.12-.88L17 13.91zm-8-12h3.59l-.3.29a1 1 0 0 0 .325 1.639 1 1 0 0 0 1.095-.22l2-2a1 1 0 0 0 .21-.33 1 1 0 0 0 0-.76 1 1 0 0 0-.21-.33l-2-2a1.004 1.004 0 0 0-1.42 1.42l.3.29H9a1 1 0 0 0 0 2'
    />
  </svg>
);
export default SvgEnvelopeSend;
