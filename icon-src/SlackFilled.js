import * as React from "react";
const SvgSlackFilled = ({ title, titleId, ...props }) => (
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
      d='M2 14.67a2 2 0 0 0 4 0v-2H4a2 2 0 0 0-2 2Zm12.64-3.34a2 2 0 0 0 2-2V4a2 2 0 1 0-4 0v5.33a2.001 2.001 0 0 0 2.02 2h-.02Zm7.32-2a2 2 0 1 0-4 0v2h2a2.001 2.001 0 0 0 2.04-2h-.04ZM9.34 12.67a2 2 0 0 0-2 2V20a2 2 0 0 0 4 0v-5.33a2 2 0 0 0-2-2ZM14.66 18h-2v2a2 2 0 1 0 2-2ZM20 12.67h-5.34a2 2 0 0 0 0 4H20a2 2 0 0 0 0-4ZM9.34 7.33H4a2 2 0 1 0 0 4h5.34a2 2 0 1 0 0-4Zm0-5.33a2 2 0 1 0 0 4h2V4a2 2 0 0 0-2-2Z'
    />
  </svg>
);
export default SvgSlackFilled;
