import * as React from "react";
const SvgIconCloudShield = ({ title, titleId, ...props }) => (
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
      d='M18.42 7.22A7 7 0 0 0 5.06 9.11a4 4 0 0 0-.38 7.66c.103.032.211.049.32.05a1.013 1.013 0 1 0 .32-2A2 2 0 0 1 4 13a2 2 0 0 1 2-2 1 1 0 0 0 1-1 5 5 0 0 1 9.73-1.61 1 1 0 0 0 .78.67 3 3 0 0 1 1 5.53 1.003 1.003 0 1 0 1 1.74A5 5 0 0 0 22 12a5 5 0 0 0-3.58-4.78Zm-3.63 4.44a2.73 2.73 0 0 1-2.2-.47 1 1 0 0 0-1.18 0 2.72 2.72 0 0 1-2.2.47 1 1 0 0 0-1.21.97V16a4.63 4.63 0 0 0 1.84 3.7l1.57 1.15a1 1 0 0 0 1.18 0l1.57-1.16A4.601 4.601 0 0 0 16 16v-3.37a1 1 0 0 0-1.21-.97ZM14 16a2.62 2.62 0 0 1-1 2l-1 .72-1-.72a2.62 2.62 0 0 1-1-2v-2.28a4.68 4.68 0 0 0 2-.55c.617.33 1.3.519 2 .55V16Z'
    />
  </svg>
);
export default SvgIconCloudShield;
