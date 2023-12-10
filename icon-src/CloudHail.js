import * as React from "react";
const SvgCloudHail = ({ title, titleId, ...props }) => (
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
      d='M12 17a1 1 0 1 0 0 2.002A1 1 0 0 0 12 17Zm-4-6a1 1 0 1 0 0 2.001A1 1 0 0 0 8 11Zm4 2a1 1 0 1 0 0 2.002A1 1 0 0 0 12 13Zm-4 6a1 1 0 1 0 0 2.001A1 1 0 0 0 8 19Zm0-4a1 1 0 1 0 0 2.001A1 1 0 0 0 8 15Zm8 0a1 1 0 1 0 0 2.002A1 1 0 0 0 16 15Zm-4-6a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm4 2a1 1 0 1 0 0 2.002A1 1 0 0 0 16 11Zm2.42-4.78A7 7 0 0 0 5.06 8.11 4 4 0 0 0 2 12a4 4 0 0 0 1.34 3 1 1 0 1 0 1.32-1.5A1.999 1.999 0 0 1 4 12a2 2 0 0 1 2-2 1 1 0 0 0 1-1 5 5 0 0 1 9.73-1.61 1 1 0 0 0 .78.67A3 3 0 0 1 20 11a2.91 2.91 0 0 1-.74 2 1 1 0 0 0 1.48 1.34 5 5 0 0 0-2.32-8.08v-.04ZM16 19a1 1 0 1 0 0 2.002A1 1 0 0 0 16 19Z'
    />
  </svg>
);
export default SvgCloudHail;
