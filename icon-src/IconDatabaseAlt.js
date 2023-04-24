import * as React from "react";
const SvgIconDatabaseAlt = ({ title, titleId, ...props }) => (
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
      d='M8 17a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm0-6a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm8-9H8a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4Zm2 16a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-2.56A3.91 3.91 0 0 0 8 16h8a3.91 3.91 0 0 0 2-.56V18Zm0-6a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V9.44A3.91 3.91 0 0 0 8 10h8a3.91 3.91 0 0 0 2-.56V12Zm-2-4H8a2 2 0 1 1 0-4h8a2 2 0 0 1 0 4Z'
    />
  </svg>
);
export default SvgIconDatabaseAlt;
