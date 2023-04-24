import * as React from "react";
const SvgIconEditAlt = ({ title, titleId, ...props }) => (
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
      d='M5 18h4.24a.999.999 0 0 0 .71-.29l6.92-6.93L19.71 8a1.001 1.001 0 0 0 0-1.42l-4.24-4.29a1 1 0 0 0-1.42 0l-2.82 2.83-6.94 6.93a1.001 1.001 0 0 0-.29.71V17a1 1 0 0 0 1 1Zm9.76-13.59 2.83 2.83-1.42 1.42-2.83-2.83 1.42-1.42ZM6 13.17l5.93-5.93 2.83 2.83L8.83 16H6v-2.83ZM21 20H3a1 1 0 0 0 0 2h18a1 1 0 1 0 0-2Z'
    />
  </svg>
);
export default SvgIconEditAlt;
