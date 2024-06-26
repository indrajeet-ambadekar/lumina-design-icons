import * as React from "react";
const SvgImageAltSlash = ({ title, titleId, ...props }) => (
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
      d='m21.71 20.29-.93-.93-.09-.1-.06-.07-.5-.5-.13-.07-5.18-5.2-.09-.08-3.2-3.21-.1-.13-7.72-7.71a1.004 1.004 0 1 0-1.42 1.42l1 1A3 3 0 0 0 3 6v12a3 3 0 0 0 3 3h12a2.9 2.9 0 0 0 1.27-.31h.05l.95 1a1 1 0 0 0 1.42 0 1 1 0 0 0 .02-1.4M5 6.41l3.24 3.24a2.8 2.8 0 0 0-.67.48L5 12.71zM6 19a1 1 0 0 1-1-1v-2.46l4-4a.81.81 0 0 1 1.1 0L17.59 19zM9.66 5H18a1 1 0 0 1 1 1v5.94a1.005 1.005 0 0 0-1.714.71 1 1 0 0 0 .294.71l1.74 1.74a1 1 0 0 0 1.71-.72V6a3 3 0 0 0-3-3H9.66a1 1 0 1 0 0 2'
    />
  </svg>
);
export default SvgImageAltSlash;
