import * as React from "react";
const SvgCloudLock = ({ title, titleId, ...props }) => (
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
      d='M18.42 6.72A7 7 0 0 0 5.06 8.61a4 4 0 0 0-.38 7.66q.155.048.32.05a1.013 1.013 0 0 0 .32-2A2 2 0 0 1 4 12.5a2 2 0 0 1 2-2 1 1 0 0 0 1-1 5 5 0 0 1 9.73-1.61 1 1 0 0 0 .78.67 3 3 0 0 1 1 5.53 1.003 1.003 0 1 0 1 1.74A5 5 0 0 0 22 11.5a5 5 0 0 0-3.58-4.78m-3.42 9V14.5a3 3 0 0 0-6 0v1.18a3 3 0 0 0 1 5.82h4a3 3 0 0 0 1-5.82zm-4-1.22a1 1 0 1 1 2 0v1h-2zm3 5h-4a1 1 0 0 1 0-2h4a1 1 0 1 1 0 2'
    />
  </svg>
);
export default SvgCloudLock;
