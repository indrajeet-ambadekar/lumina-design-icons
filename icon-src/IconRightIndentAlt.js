import * as React from "react";
const SvgIconRightIndentAlt = ({ title, titleId, ...props }) => (
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
      d='M3.64 9.56a1.001 1.001 0 0 0-1.28 1.54l1.08.9-1.08.9a.999.999 0 0 0 .173 1.656.998.998 0 0 0 1.107-.116l2-1.67a1 1 0 0 0 0-1.54l-2-1.67ZM9 5a1 1 0 0 0-1 1v12a1 1 0 1 0 2 0V6a1 1 0 0 0-1-1Zm4 2h8a1 1 0 1 0 0-2h-8a1 1 0 1 0 0 2Zm8 10h-8a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2Zm0-8h-8a1 1 0 1 0 0 2h8a1 1 0 0 0 0-2Zm0 4h-8a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2Z'
    />
  </svg>
);
export default SvgIconRightIndentAlt;
