import * as React from "react";
const SvgLayerGroup = ({ title, titleId, ...props }) => (
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
      d='m2.5 8.86 9 5.2a1 1 0 0 0 1 0l9-5.2a1 1 0 0 0 0-1.73l-9-5.19a1 1 0 0 0-1 0l-9 5.19a1 1 0 0 0 0 1.73M12 4l7 4-7 4-7-4zm8.5 7.17L12 16l-8.5-4.87a1 1 0 0 0-1.465 1.126 1 1 0 0 0 .465.604l9 5.2a1 1 0 0 0 1 0l9-5.2a1 1 0 1 0-1-1.73zm0 4L12 20l-8.5-4.87a1 1 0 0 0-1.465 1.126 1 1 0 0 0 .465.604l9 5.2a1 1 0 0 0 1 0l9-5.2a1 1 0 1 0-1-1.73z'
    />
  </svg>
);
export default SvgLayerGroup;
