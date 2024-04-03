import * as React from "react";
const SvgVoicemailAlt = ({ title, titleId, ...props }) => (
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
      d='M18 8a4 4 0 0 0-4 4 3.9 3.9 0 0 0 .56 2H9.44a3.9 3.9 0 0 0 .56-2 4 4 0 1 0-4 4h12a4 4 0 1 0 0-8M6 14a2 2 0 1 1 0-4 2 2 0 0 1 0 4m12 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4'
    />
  </svg>
);
export default SvgVoicemailAlt;
