import * as React from "react";
const SvgGlassMartini = ({ title, titleId, ...props }) => (
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
      d='M18 20h-5v-5.06A9 9 0 0 0 21 6a8.7 8.7 0 0 0-.67-3.39 1 1 0 0 0-.22-.32L20 2.21a1 1 0 0 0-.21-.13 1 1 0 0 0-.28-.08H4.5a1 1 0 0 0-.29.06q-.109.064-.21.14l-.12.09a1 1 0 0 0-.22.32A8.7 8.7 0 0 0 3 6a9 9 0 0 0 8 8.94V20H6a1 1 0 0 0 0 2h12a1 1 0 0 0 0-2M5 6a7 7 0 0 1 .29-2h13.42A7 7 0 1 1 5 6'
    />
  </svg>
);
export default SvgGlassMartini;
