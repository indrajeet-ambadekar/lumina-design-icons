import * as React from "react";
const SvgIconMicrophoneSlash = ({ title, titleId, ...props }) => (
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
      d='M10.5 3.73a2 2 0 0 1 2.95-.14A2 2 0 0 1 14 5v3.41a1 1 0 1 0 2 0V5a4 4 0 0 0-7-2.53 1 1 0 1 0 1.5 1.26Zm8.22 9.54h.2a1 1 0 0 0 1-.81c.072-.483.098-.972.08-1.46a1 1 0 0 0-2 0c0 .37-.037.738-.11 1.1a1 1 0 0 0 .83 1.17Zm3 6.06-18-18A1 1 0 1 0 2.3 2.74L8 8.48V11a4 4 0 0 0 6 3.46l1.46 1.46A6 6 0 0 1 6 11a1 1 0 1 0-2 0 8 8 0 0 0 7 7.93V21H9a1 1 0 1 0 0 2h6a1 1 0 0 0 0-2h-2v-2.07a7.871 7.871 0 0 0 3.85-1.59l3.4 3.4a1 1 0 1 0 1.42-1.41h.05ZM12 13a2 2 0 0 1-2-2v-.52l2.45 2.46c-.147.04-.298.06-.45.06Z'
    />
  </svg>
);
export default SvgIconMicrophoneSlash;
