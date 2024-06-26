import * as React from "react";
const SvgStepBackwardCircle = ({ title, titleId, ...props }) => (
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
      d='M15.5 7.38a2 2 0 0 0-2 0l-4 2.31V8a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-1.69l4 2.31a2 2 0 0 0 3-1.73V9.11a2 2 0 0 0-1-1.73m-1 7.51L9.5 12l5-2.89zM12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20m0 18a8 8 0 1 1 0-16.001A8 8 0 0 1 12 20'
    />
  </svg>
);
export default SvgStepBackwardCircle;
