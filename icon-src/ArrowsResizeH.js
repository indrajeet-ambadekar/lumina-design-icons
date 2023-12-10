import * as React from "react";
const SvgArrowsResizeH = ({ title, titleId, ...props }) => (
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
      d='M10 6a1 1 0 0 0-1 1v4H5.41l.8-.79a1.004 1.004 0 0 0-1.42-1.42l-2.5 2.5a1 1 0 0 0-.21.33 1 1 0 0 0 0 .76 1 1 0 0 0 .21.33l2.5 2.5a1 1 0 0 0 1.639-.325 1 1 0 0 0-.22-1.095l-.8-.79H9v4a1 1 0 1 0 2 0V7a1 1 0 0 0-1-1Zm11.92 5.62a1 1 0 0 0-.21-.33l-2.5-2.5a1.003 1.003 0 1 0-1.42 1.42l.8.79H15V7a1 1 0 0 0-2 0v10a1 1 0 0 0 2 0v-4h3.59l-.8.79a1.002 1.002 0 0 0 .325 1.639 1 1 0 0 0 1.095-.219l2.5-2.5a1 1 0 0 0 .21-.33 1 1 0 0 0 0-.76Z'
    />
  </svg>
);
export default SvgArrowsResizeH;
