import * as React from "react";
const SvgCameraChange = ({ title, titleId, ...props }) => (
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
      d='m12.29 5.21 1.5 1.5a1 1 0 0 0 1.42 0 1 1 0 0 0 .13-1.21H19a1 1 0 1 0 0-2h-3.66a1 1 0 0 0-.13-1.21 1 1 0 0 0-1.42 0l-1.5 1.5a1 1 0 0 0-.21.33 1 1 0 0 0 0 .76 1 1 0 0 0 .21.33m10.63 3.91a1 1 0 0 0-.21-.33l-1.5-1.5a1 1 0 0 0-1.42 0 1 1 0 0 0-.13 1.21H16a1 1 0 1 0 0 2h3.66a1 1 0 0 0 .13 1.21 1 1 0 0 0 1.42 0l1.5-1.5a1 1 0 0 0 .21-.33 1 1 0 0 0 0-.76M11 10a4 4 0 1 0 0 7.999 4 4 0 0 0 0-8m0 6a2 2 0 1 1 0-4.001 2 2 0 0 1 0 4m9-3a1 1 0 0 0-1 1v5a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h2a1 1 0 0 0 1-.69l.54-1.62a1 1 0 0 1 .9-.69H10a1 1 0 1 0 0-2H8.44a3 3 0 0 0-2.85 2.06L5.28 8H4a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-5a1 1 0 0 0-1-1'
    />
  </svg>
);
export default SvgCameraChange;
