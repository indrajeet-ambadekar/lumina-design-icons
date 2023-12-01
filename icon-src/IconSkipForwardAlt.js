import * as React from "react";
const SvgIconSkipForwardAlt = ({ title, titleId, ...props }) => (
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
      d='M5 3a3 3 0 0 0-3 3v12a3 3 0 0 0 6 0V6a3 3 0 0 0-3-3Zm1 15a1 1 0 1 1-2 0V6a1 1 0 0 1 2 0v12Zm14.68-8.35L14 5.66a2.6 2.6 0 0 0-2.64 0A2.74 2.74 0 0 0 10 8v8a2.74 2.74 0 0 0 1.37 2.38 2.57 2.57 0 0 0 2.64 0l6.67-4a2.75 2.75 0 0 0 0-4.7v-.03Zm-1 3-6.66 4a.61.61 0 0 1-.63 0A.72.72 0 0 1 12 16V8a.72.72 0 0 1 .36-.64.63.63 0 0 1 .63.01l6.66 4a.76.76 0 0 1 0 1.28h.03Z'
    />
  </svg>
);
export default SvgIconSkipForwardAlt;
