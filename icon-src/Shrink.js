import * as React from "react";
const SvgShrink = ({ title, titleId, ...props }) => (
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
      d='m10.71 11.29-2.5-2.5a1.004 1.004 0 0 0-1.42 1.42l.8.79H3a1 1 0 0 0 0 2h4.59l-.8.79a1 1 0 0 0 0 1.42.998.998 0 0 0 1.42 0l2.5-2.5a1 1 0 0 0 .21-.33 1 1 0 0 0 0-.76 1.001 1.001 0 0 0-.21-.33ZM21 11h-4.59l.8-.79a1.005 1.005 0 0 0-1.42-1.42l-2.5 2.5a1.001 1.001 0 0 0-.21.33 1 1 0 0 0 0 .76 1 1 0 0 0 .21.33l2.5 2.5a.999.999 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.8-.79H21a1 1 0 1 0 0-2Z'
    />
  </svg>
);
export default SvgShrink;
