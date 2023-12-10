import * as React from "react";
const SvgCompressV = ({ title, titleId, ...props }) => (
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
      d='M12.71 13.29a1.001 1.001 0 0 0-.33-.21 1 1 0 0 0-.76 0 1 1 0 0 0-.33.21l-2.5 2.5a1.004 1.004 0 1 0 1.42 1.42l.79-.8V21a1 1 0 1 0 2 0v-4.59l.79.8a1 1 0 0 0 1.42 0 1.002 1.002 0 0 0 0-1.42l-2.5-2.5Zm-1.42-2.58a1 1 0 0 0 .33.21.94.94 0 0 0 .76 0c.123-.048.235-.119.33-.21l2.5-2.5a1.004 1.004 0 0 0-1.42-1.42l-.79.8V3a1 1 0 0 0-2 0v4.59l-.79-.8a1.004 1.004 0 0 0-1.42 1.42l2.5 2.5Z'
    />
  </svg>
);
export default SvgCompressV;
