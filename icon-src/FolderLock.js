import * as React from "react";
const SvgFolderLock = ({ title, titleId, ...props }) => (
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
      d='M4 4h4.56a1 1 0 0 1 .95.68l.54 1.64A1 1 0 0 0 11 7h7a1 1 0 0 1 1 1 1 1 0 0 0 2 0 3 3 0 0 0-3-3h-6.28l-.32-1a3 3 0 0 0-2.84-2H4a3 3 0 0 0-3 3v13a3 3 0 0 0 3 3h6a1 1 0 1 0 0-2H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1m17 11.18V14a3 3 0 0 0-6 0v1.18A3 3 0 0 0 13 18v2a3 3 0 0 0 3 3h4a3 3 0 0 0 3-3v-2a3 3 0 0 0-2-2.82M17 14a1 1 0 0 1 2 0v1h-2zm4 6a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1z'
    />
  </svg>
);
export default SvgFolderLock;
