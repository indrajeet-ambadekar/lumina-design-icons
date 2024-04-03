import * as React from "react";
const SvgMicrophoneSlash = ({ title, titleId, ...props }) => (
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
      d='M10.5 3.73a2 2 0 0 1 2.95-.14A2 2 0 0 1 14 5v3.41a1 1 0 1 0 2 0V5a4 4 0 0 0-7-2.53 1 1 0 1 0 1.5 1.26m8.22 9.54h.2a1 1 0 0 0 1-.81q.107-.726.08-1.46a1 1 0 0 0-2 0q0 .556-.11 1.1a1 1 0 0 0 .83 1.17m3 6.06-18-18A1 1 0 1 0 2.3 2.74L8 8.48V11a4 4 0 0 0 6 3.46l1.46 1.46A6 6 0 0 1 6 11a1 1 0 1 0-2 0 8 8 0 0 0 7 7.93V21H9a1 1 0 1 0 0 2h6a1 1 0 0 0 0-2h-2v-2.07a7.87 7.87 0 0 0 3.85-1.59l3.4 3.4a1 1 0 1 0 1.42-1.41zM12 13a2 2 0 0 1-2-2v-.52l2.45 2.46Q12.23 13 12 13'
    />
  </svg>
);
export default SvgMicrophoneSlash;
