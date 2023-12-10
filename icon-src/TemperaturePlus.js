import * as React from "react";
const SvgTemperaturePlus = ({ title, titleId, ...props }) => (
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
      d='M10.5 15.28V5.5a1 1 0 0 0-2 0v9.78a2 2 0 0 0-1 1.72 2 2 0 0 0 4 0 2 2 0 0 0-1-1.72Zm9-12.78H19V2a1 1 0 0 0-2 0v.5h-.5a1 1 0 1 0 0 2h.5V5a1 1 0 1 0 2 0v-.5h.5a1 1 0 1 0 0-2Zm-5.5 3a4.5 4.5 0 1 0-9 0V13a6 6 0 0 0 3.21 9.83c.42.096.849.153 1.28.17A6 6 0 0 0 14 13V5.5Zm-2 14.61a4 4 0 0 1-5.32-5.96 1 1 0 0 0 .3-.71V5.5a2.5 2.5 0 0 1 5 0v7.94a1 1 0 0 0 .3.71 4.001 4.001 0 0 1-.28 6v-.04Z'
    />
  </svg>
);
export default SvgTemperaturePlus;
