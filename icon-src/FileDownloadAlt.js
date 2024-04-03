import * as React from "react";
const SvgFileDownloadAlt = ({ title, titleId, ...props }) => (
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
      d='M8 8a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2zm5 12H6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h5v3a3 3 0 0 0 3 3h3v2a1 1 0 0 0 2 0V8.94a1.3 1.3 0 0 0-.06-.27v-.09a1 1 0 0 0-.19-.28l-6-6a1 1 0 0 0-.28-.19.3.3 0 0 0-.1 0 1.1 1.1 0 0 0-.31-.11H6a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h7a1 1 0 0 0 0-2m0-14.59L15.59 8H14a1 1 0 0 1-1-1zM14 12H8a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2m6.71 6.29a1 1 0 0 0-1.42 0l-.29.3V16a1 1 0 0 0-2 0v2.59l-.29-.3a1.004 1.004 0 1 0-1.42 1.42l2 2a1 1 0 0 0 .33.21.94.94 0 0 0 .76 0 1 1 0 0 0 .33-.21l2-2a1 1 0 0 0 0-1.42M12 18a1 1 0 0 0 0-2H8a1 1 0 0 0 0 2z'
    />
  </svg>
);
export default SvgFileDownloadAlt;
