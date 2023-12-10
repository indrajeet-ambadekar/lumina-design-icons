import * as React from "react";
const SvgUserLocation = ({ title, titleId, ...props }) => (
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
      d='M14.49 10.86a3.09 3.09 0 1 0-5 0c-.425.27-.803.609-1.12 1A1.03 1.03 0 1 0 10 13.12a2.619 2.619 0 0 1 2.05-1 2.618 2.618 0 0 1 2.05 1 1 1 0 0 0 1.56-1.25c-.331-.4-.727-.74-1.17-1.01ZM12 10.13a1.09 1.09 0 1 1 .002-2.18A1.09 1.09 0 0 1 12 10.13Zm8.46-.5A8.5 8.5 0 0 0 7.3 3.36a8.56 8.56 0 0 0-3.76 6.27A8.46 8.46 0 0 0 6 16.46l5.3 5.31a1 1 0 0 0 1.42 0L18 16.46a8.46 8.46 0 0 0 2.46-6.83Zm-3.86 5.42-4.6 4.6-4.6-4.6a6.49 6.49 0 0 1-1.87-5.22A6.57 6.57 0 0 1 8.42 5a6.47 6.47 0 0 1 7.16 0 6.569 6.569 0 0 1 2.89 4.81 6.491 6.491 0 0 1-1.87 5.24Z'
    />
  </svg>
);
export default SvgUserLocation;
