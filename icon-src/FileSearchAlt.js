import * as React from "react";
const SvgFileSearchAlt = ({ title, titleId, ...props }) => (
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
      d='M12 20H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h5v3a3 3 0 0 0 3 3h3v1a1 1 0 0 0 2 0V8.94a1.307 1.307 0 0 0-.06-.27v-.09a1.07 1.07 0 0 0-.19-.28l-6-6a1.071 1.071 0 0 0-.28-.19.32.32 0 0 0-.09 0 .88.88 0 0 0-.33-.11H5a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h7a1 1 0 0 0 0-2Zm0-14.59L14.59 8H13a1 1 0 0 1-1-1V5.41ZM7 8a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2H7Zm14.71 12.29-1.17-1.16A3.44 3.44 0 0 0 20 15a3.49 3.49 0 0 0-6 2.49 3.46 3.46 0 0 0 5.13 3.05l1.16 1.17a1.002 1.002 0 0 0 1.639-.325 1 1 0 0 0-.219-1.095Zm-3.17-1.75a1.54 1.54 0 0 1-2.11 0 1.5 1.5 0 0 1 .01-2.11 1.48 1.48 0 0 1 1-.43A1.472 1.472 0 0 1 19 17.49a1.5 1.5 0 0 1-.46 1.05ZM13 12H7a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2Zm-2 6a1 1 0 0 0 0-2H7a1 1 0 0 0 0 2h4Z'
    />
  </svg>
);
export default SvgFileSearchAlt;
