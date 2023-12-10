import * as React from "react";
const SvgImageRedo = ({ title, titleId, ...props }) => (
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
      d='M21.5 1.5a1 1 0 0 0-1 1 5 5 0 1 0 .3 7.75 1.003 1.003 0 0 0-1.32-1.51 3 3 0 1 1 .25-4.25H18.5a1 1 0 1 0 0 2h3a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-.99Zm-3 12a1 1 0 0 0-1 1v.39L16 13.41a2.77 2.77 0 0 0-3.93 0l-.7.7-2.46-2.49a2.79 2.79 0 0 0-3.93 0L3.5 13.1V7.5a1 1 0 0 1 1-1h5a1 1 0 1 0 0-2h-5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-5a1 1 0 0 0-1-1Zm-14 7a1 1 0 0 1-1-1v-3.57L6.4 13a.79.79 0 0 1 1.09 0l3.17 3.17L15 20.5H4.5Zm13-1a1 1 0 0 1-.18.53l-4.51-4.51.7-.7a.78.78 0 0 1 1.1 0l2.89 2.9v1.78Z'
    />
  </svg>
);
export default SvgImageRedo;
