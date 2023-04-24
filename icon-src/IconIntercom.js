import * as React from "react";
const SvgIconIntercom = ({ title, titleId, ...props }) => (
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
      d='M19.5 2h-15A2.5 2.5 0 0 0 2 4.5v15A2.5 2.5 0 0 0 4.5 22h15a2.5 2.5 0 0 0 2.5-2.5v-15A2.5 2.5 0 0 0 19.5 2Zm-4.83 3.67a.66.66 0 0 1 .67-.67.68.68 0 0 1 .66.66v8.9a.67.67 0 0 1-1.33 0V5.67Zm-3.34-.34a.67.67 0 0 1 1.34 0V15a.67.67 0 0 1-1.34 0V5.33ZM8 5.67a.67.67 0 0 1 1.33 0v8.9a.66.66 0 0 1-1.131.461A.68.68 0 0 1 8 14.57v-8.9ZM4.67 7A.67.67 0 0 1 6 7v6a.67.67 0 0 1-.67.66.67.67 0 0 1-.66-.66V7ZM19.1 17.17a11.3 11.3 0 0 1-7.1 2.16 11.3 11.3 0 0 1-7.1-2.16.67.67 0 0 1 .87-1A10.2 10.2 0 0 0 12 18a10.15 10.15 0 0 0 6.23-1.84.67.67 0 0 1 .87 1v.01Zm.23-4.17A.67.67 0 0 1 18 13V7a.67.67 0 0 1 .67-.66.66.66 0 0 1 .66.66v6Z'
    />
  </svg>
);
export default SvgIconIntercom;
