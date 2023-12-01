import * as React from "react";
const SvgIconHtml3 = ({ title, titleId, ...props }) => (
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
      d='m3.195 2 1.602 17.994L11.99 22l7.211-2.013L20.805 2H3.195Zm14.281 4.123-.534 5.994.002.033-.002.074-.38 4.19-.041.373-4.52 1.25-.005.004-4.512-1.258-.306-3.465h2.213l.157 1.762 2.453.665 2.46-.674.26-2.869H9.577l-.044-.485-.101-1.136-.052-.61h5.539l.201-2.232H6.682l-.044-.485-.1-1.137-.053-.61h11.044l-.053.616Z'
    />
  </svg>
);
export default SvgIconHtml3;
