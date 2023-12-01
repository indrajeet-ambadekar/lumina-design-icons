import * as React from "react";
const SvgIconAnnoyedAlt = ({ title, titleId, ...props }) => (
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
      d='m14.66 13.56-4.19 1.5A1 1 0 0 0 10.8 17c.116 0 .231-.02.34-.06l4.2-1.5a.999.999 0 1 0-.68-1.88Zm-4-5a1 1 0 0 0-1.41 0 1 1 0 0 1-1.42 0 1 1 0 1 0-1.41 1.42 3 3 0 0 0 4.24 0 1 1 0 0 0-.04-1.44l.04.02Zm7 0a1 1 0 0 0-1.41 0 1 1 0 0 1-1.42 0 1 1 0 1 0-1.41 1.42 3 3 0 0 0 4.24 0 1 1 0 0 0-.04-1.44l.04.02ZM12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 18a8 8 0 1 1 0-16.001A8 8 0 0 1 12 20Z'
    />
  </svg>
);
export default SvgIconAnnoyedAlt;
