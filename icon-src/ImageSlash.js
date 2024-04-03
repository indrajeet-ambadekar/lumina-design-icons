import * as React from "react";
const SvgImageSlash = ({ title, titleId, ...props }) => (
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
      d='M19.5 4H10a1 1 0 1 0 0 2h9.5a1 1 0 0 1 1 1v6.76l-1.88-1.88a3 3 0 0 0-1.14-.71 1.001 1.001 0 1 0-.64 1.9.8.8 0 0 1 .36.23l3.31 3.29a.7.7 0 0 0 0 .15 1 1 0 0 0 0 .15q.057.096.13.18.038.061.09.11.091.084.2.14a.91.91 0 0 0 .48.14 1 1 0 0 0 1-1V7a3 3 0 0 0-2.91-3M3.21 2.29a1.004 1.004 0 0 0-1.42 1.42L3.18 5.1A3 3 0 0 0 2.5 7v10a3 3 0 0 0 3 3h12.59l1.7 1.71a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM4.5 7a1 1 0 0 1 .12-.46l2.72 2.71a3 3 0 0 0-1 .63L4.5 11.76zm1 11a1 1 0 0 1-1-1v-2.42l3.3-3.29a1 1 0 0 1 1.4 0L15.91 18z'
    />
  </svg>
);
export default SvgImageSlash;
