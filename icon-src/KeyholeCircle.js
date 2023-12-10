import * as React from "react";
const SvgKeyholeCircle = ({ title, titleId, ...props }) => (
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
      d='M12 8a2 2 0 0 0-2 2 2 2 0 0 0 1 1.72V15a1 1 0 0 0 2 0v-3.28A2 2 0 0 0 14 10a2 2 0 0 0-2-2Zm0-6a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 18a8 8 0 1 1 0-16.001A8 8 0 0 1 12 20Z'
    />
  </svg>
);
export default SvgKeyholeCircle;
