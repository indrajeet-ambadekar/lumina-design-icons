import * as React from "react";
const SvgIconVuejsAlt = ({ title, titleId, ...props }) => (
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
      d='M22.867 3.374a1 1 0 0 0-.866-.502l-4.97-.004H13.38a1.002 1.002 0 0 0-.818.425l-.559.796-.564-.798a.998.998 0 0 0-.816-.423H6.968l-4.973.027A1 1 0 0 0 1.137 4.4l10.02 17.106a1 1 0 0 0 .863.494 1 1 0 0 0 .864-.496l9.98-17.128a1.002 1.002 0 0 0 .003-1.002ZM10.105 4.868l1.085 1.533a.998.998 0 0 0 .816.423h.002a1.002 1.002 0 0 0 .817-.425L13.9 4.87l1.362-.002-3.244 5.454-3.275-5.454 1.362.001Zm1.912 14.15L3.74 4.885l2.67-.015 4.753 7.918a1.001 1.001 0 0 0 .857.486h.006a1 1 0 0 0 .858-.49l4.708-7.916 2.67.003-8.245 14.147Z'
    />
  </svg>
);
export default SvgIconVuejsAlt;
