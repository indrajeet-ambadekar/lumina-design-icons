import * as React from "react";
const SvgIconFilterAlt = ({ title, titleId, ...props }) => (
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
      d='M19 2H5a3 3 0 0 0-3 3v1.17a3 3 0 0 0 .25 1.2v.06c.141.321.341.613.59.86L9 14.41V21a1 1 0 0 0 1 1 1 1 0 0 0 .45-.11l4-2A1 1 0 0 0 15 19v-4.59l6.12-6.12a2.81 2.81 0 0 0 .59-.86v-.06a3 3 0 0 0 .29-1.2V5a3 3 0 0 0-3-3Zm-5.71 11.29A1 1 0 0 0 13 14v4.38l-2 1V14a1 1 0 0 0-.29-.71L5.41 8h13.18l-5.3 5.29ZM20 6H4V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v1Z'
    />
  </svg>
);
export default SvgIconFilterAlt;
