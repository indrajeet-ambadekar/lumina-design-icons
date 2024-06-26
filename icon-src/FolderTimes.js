import * as React from "react";
const SvgFolderTimes = ({ title, titleId, ...props }) => (
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
      d='M14.71 10.79a1 1 0 0 0-1.42 0L12 12.09l-1.29-1.3a1.004 1.004 0 1 0-1.42 1.42l1.3 1.29-1.3 1.29a1 1 0 0 0 .325 1.639 1 1 0 0 0 1.095-.219l1.29-1.3 1.29 1.3a1.002 1.002 0 0 0 1.639-.325 1 1 0 0 0-.219-1.095l-1.3-1.29 1.3-1.29a1 1 0 0 0 0-1.42M19 5.5h-6.28l-.32-1a3 3 0 0 0-2.84-2H5a3 3 0 0 0-3 3v13a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-10a3 3 0 0 0-3-3m1 13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-13a1 1 0 0 1 1-1h4.56a1 1 0 0 1 .95.68l.54 1.64a1 1 0 0 0 .95.68h7a1 1 0 0 1 1 1z'
    />
  </svg>
);
export default SvgFolderTimes;
