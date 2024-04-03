import * as React from "react";
const SvgRuler = ({ title, titleId, ...props }) => (
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
      d='M22.61 7.05 17 1.39a1 1 0 0 0-1.41 0L1.39 15.54a1 1 0 0 0 0 1.41l5.66 5.66a1 1 0 0 0 1.41 0l2.83-2.83 8.49-8.49 2.83-2.83a1 1 0 0 0 0-1.41m-3.54 2.12-.71-.71a1 1 0 1 0-1.41 1.42l.71.71L16.24 12l-2.12-2.12a1 1 0 0 0-1.41 1.41l2.12 2.12-1.42 1.42-.7-.71a1.004 1.004 0 1 0-1.42 1.42l.71.7-1.41 1.42-2.13-2.12a1 1 0 0 0-1.41 0 1 1 0 0 0 0 1.41l2.12 2.12-1.41 1.42-4.25-4.25L16.24 3.51l4.25 4.25z'
    />
  </svg>
);
export default SvgRuler;
