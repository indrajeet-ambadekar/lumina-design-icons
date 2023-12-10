import * as React from "react";
const SvgWebcam = ({ title, titleId, ...props }) => (
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
      d='M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm0-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm9.59 9.16A10 10 0 0 0 19 13.89a8 8 0 1 0-14 0 9.9 9.9 0 0 0-2.6 4.27A3 3 0 0 0 5.3 22h13.4a3 3 0 0 0 2.964-2.47 2.999 2.999 0 0 0-.074-1.37ZM12 4a6 6 0 1 1 0 12 6 6 0 0 1 0-12Zm7.52 15.59a1 1 0 0 1-.82.41H5.3a1 1 0 0 1-.996-.828 1 1 0 0 1 .026-.452 7.85 7.85 0 0 1 1.88-3.22 8.001 8.001 0 0 0 11.58 0 7.85 7.85 0 0 1 1.88 3.22 1 1 0 0 1-.15.87Z'
    />
  </svg>
);
export default SvgWebcam;
