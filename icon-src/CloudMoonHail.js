import * as React from "react";
const SvgCloudMoonHail = ({ title, titleId, ...props }) => (
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
      d='M9.21 16.29a1 1 0 0 0-.33-.21 1 1 0 0 0-1.09.21 1.2 1.2 0 0 0-.21.33.84.84 0 0 0-.08.38 1 1 0 0 0 1.38.92q.183-.077.33-.21a1 1 0 0 0 .21-1.09 1.2 1.2 0 0 0-.21-.33m0 4a1.2 1.2 0 0 0-.33-.21 1 1 0 0 0-1.09.21 1.2 1.2 0 0 0-.21.33 1 1 0 1 0 1.84 0 1.2 1.2 0 0 0-.21-.33m3.85-6.12-.18-.09-.18-.08a1 1 0 0 0-.58.06.93.93 0 0 0-.546.536 1 1 0 0 0-.074.384 1 1 0 0 0 .29.71q.147.133.33.21a.94.94 0 0 0 .76 0q.183-.076.33-.21a1 1 0 0 0 .29-.69 1.05 1.05 0 0 0-.29-.71zm.15 4.12a1 1 0 0 0-1.09-.21.9.9 0 0 0-.54.54 1 1 0 0 0 .21 1.09q.147.133.33.21a.94.94 0 0 0 .76 0 1.2 1.2 0 0 0 .33-.21 1 1 0 0 0 .21-1.09 1.2 1.2 0 0 0-.21-.33M21.7 7.07a1 1 0 0 0-.94-.26q-.32.075-.65.08a3 3 0 0 1-3-3q.005-.33.08-.65A1 1 0 0 0 16 2a4.93 4.93 0 0 0-3.83 4.21A6.2 6.2 0 0 0 10.5 6a6 6 0 0 0-5.94 5.13 3.5 3.5 0 0 0-.46 6.58q.193.076.4.08a1 1 0 0 0 .4-1.92A1.48 1.48 0 0 1 4 14.5 1.5 1.5 0 0 1 5.5 13a1 1 0 0 0 1-1 4 4 0 0 1 4-4 4.06 4.06 0 0 1 2.19.66 4 4 0 0 1 1.58 2 1 1 0 0 0 .78.67 2.32 2.32 0 0 1 .95 4.28 1.005 1.005 0 0 0 1.1 1.68 4.34 4.34 0 0 0 1.9-3.62 4.2 4.2 0 0 0-.49-2A4.94 4.94 0 0 0 22 8a1 1 0 0 0-.3-.93m-4.59 2.82q-.21.015-.42 0a4.6 4.6 0 0 0-.69-.35 6.06 6.06 0 0 0-1.82-2.28v-.37a3 3 0 0 1 1.05-2.28 5 5 0 0 0 4.23 4.23 3 3 0 0 1-2.35 1.05'
    />
  </svg>
);
export default SvgCloudMoonHail;
