import * as React from "react";
const SvgMeetingBoard = ({ title, titleId, ...props }) => (
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
      d='M7 10h2a1 1 0 0 0 0-2H7a1 1 0 0 0 0 2m14-6h-8V3a1 1 0 0 0-2 0v1H3a1 1 0 0 0-1 1v10a3 3 0 0 0 3 3h4.59l-2.3 2.29a1 1 0 0 0 .325 1.639 1 1 0 0 0 1.095-.219l2.29-2.3V21a1 1 0 0 0 2 0v-1.59l2.29 2.3a1.002 1.002 0 0 0 1.639-.325 1 1 0 0 0-.219-1.095L14.41 18H19a3 3 0 0 0 3-3V5a1 1 0 0 0-1-1m-1 11a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6h16zM7 14h6a1 1 0 0 0 0-2H7a1 1 0 0 0 0 2'
    />
  </svg>
);
export default SvgMeetingBoard;
