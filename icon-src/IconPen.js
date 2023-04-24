import * as React from "react";
const SvgIconPen = ({ title, titleId, ...props }) => (
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
      d='M22 7.24a.999.999 0 0 0-.29-.71l-4.24-4.24a.999.999 0 0 0-.71-.29 1 1 0 0 0-.71.29l-2.83 2.83L2.29 16.05a1.001 1.001 0 0 0-.29.71V21a1 1 0 0 0 1 1h4.24a1.001 1.001 0 0 0 .76-.29l10.87-10.93L21.71 8c.091-.097.166-.208.22-.33.01-.08.01-.16 0-.24a.697.697 0 0 0 0-.14l.07-.05ZM6.83 20H4v-2.83l9.93-9.93 2.83 2.83L6.83 20ZM18.17 8.66l-2.83-2.83 1.42-1.41 2.82 2.82-1.41 1.42Z'
    />
  </svg>
);
export default SvgIconPen;
