import * as React from "react";
const SvgTruckAlt = ({ title, titleId, ...props }) => (
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
      d='M1 12.5v5a1 1 0 0 0 1 1h1a3 3 0 0 0 6 0h6a3 3 0 0 0 6 0h1a1 1 0 0 0 1-1v-12a3 3 0 0 0-3-3h-9a3 3 0 0 0-3 3v2H6a3 3 0 0 0-2.4 1.2l-2.4 3.2a.61.61 0 0 0-.07.14l-.06.11a1 1 0 0 0-.07.35Zm16 6a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm-7-13a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v11h-.78a3 3 0 0 0-4.44 0H10v-11Zm-2 6H4l1.2-1.6a1 1 0 0 1 .8-.4h2v2Zm-3 7a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm-2-5h5v2.78a3 3 0 0 0-4.22.22H3v-3Z'
    />
  </svg>
);
export default SvgTruckAlt;
