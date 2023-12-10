import * as React from "react";
const SvgFolderSlash = ({ title, titleId, ...props }) => (
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
      d='m21.71 20.29-1.6-1.6-16.4-16.4a1.004 1.004 0 1 0-1.42 1.42l1.4 1.39A3 3 0 0 0 3 7v11a3 3 0 0 0 3 3h12a2.999 2.999 0 0 0 1.29-.3l1 1a.997.997 0 0 0 1.095.219.999.999 0 0 0 .616-.924 1 1 0 0 0-.29-.705ZM6 19a1 1 0 0 1-1-1V7a1 1 0 0 1 .12-.46L17.59 19H6Zm4.62-13a1 1 0 0 1 .89.67l.54 1.64A1 1 0 0 0 13 9h5a1 1 0 0 1 1 1v4.34a1 1 0 1 0 2 0V10a3 3 0 0 0-3-3h-4.28l-.32-1a3 3 0 0 0-2.68-2 1.001 1.001 0 0 0-.1 2Z'
    />
  </svg>
);
export default SvgFolderSlash;
