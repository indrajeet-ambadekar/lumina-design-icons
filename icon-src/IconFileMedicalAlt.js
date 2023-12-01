import * as React from "react";
const SvgIconFileMedicalAlt = ({ title, titleId, ...props }) => (
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
      d='M18 18a1 1 0 0 0-1 1 1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h5v3a3 3 0 0 0 3 3h3v1a1 1 0 0 0 2 0V8.94a1.307 1.307 0 0 0-.06-.27.323.323 0 0 0 0-.09 1.07 1.07 0 0 0-.19-.28l-6-6a1.071 1.071 0 0 0-.28-.19h-.1a1.139 1.139 0 0 0-.3-.11H6a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3 1 1 0 0 0-1-1ZM13 5.41 15.59 8H14a1 1 0 0 1-1-1V5.41ZM20 14h-2.5a1 1 0 0 0-.71.29l-1.24 1.25-2.8-3.2a1 1 0 0 0-1.46-.05L9.59 14H8a1 1 0 0 0 0 2h2a1 1 0 0 0 .71-.29L12 14.46l2.8 3.2a.999.999 0 0 0 .72.34 1 1 0 0 0 .71-.29L17.91 16H20a1 1 0 0 0 0-2Z'
    />
  </svg>
);
export default SvgIconFileMedicalAlt;
