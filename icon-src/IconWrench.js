import * as React from "react";
const SvgIconWrench = ({ title, titleId, ...props }) => (
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
      d='m21.71 15.58-4.52-4.51c.095-.46.141-.93.14-1.4A7.671 7.671 0 0 0 6.42 2.72a1 1 0 0 0-.29 1.62l4.35 4.34-1.8 1.8-4.34-4.35a1 1 0 0 0-.88-.27 1 1 0 0 0-.74.56 7.67 7.67 0 0 0 7 10.91c.47.001.94-.045 1.4-.14l4.51 4.52a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-4.9-4.9a1 1 0 0 0-.95-.26c-.483.13-.98.196-1.48.2A5.671 5.671 0 0 1 4 9.67c-.001-.335.025-.67.08-1L8 12.6a1.001 1.001 0 0 0 1.42 0l3.18-3.21a1 1 0 0 0 0-1.39L8.71 4.08c.33-.054.665-.08 1-.08a5.67 5.67 0 0 1 5.66 5.67c-.003.5-.07.997-.2 1.48a.999.999 0 0 0 .26.95l4.9 4.9a1.004 1.004 0 1 0 1.42-1.42h-.04Z'
    />
  </svg>
);
export default SvgIconWrench;
