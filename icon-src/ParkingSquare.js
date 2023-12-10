import * as React from "react";
const SvgParkingSquare = ({ title, titleId, ...props }) => (
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
      d='M12 6H9a1 1 0 0 0-1 1v10a1 1 0 1 0 2 0v-3h2a4 4 0 1 0 0-8Zm0 6h-2V8h2a2 2 0 0 1 0 4Zm7-10H5a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3Zm1 17a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14Z'
    />
  </svg>
);
export default SvgParkingSquare;
