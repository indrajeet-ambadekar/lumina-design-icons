import * as React from "react";
const SvgCloudRainSun = ({ title, titleId, ...props }) => (
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
      d='M21 7h-.8a4.3 4.3 0 0 0-.52-1.27l.56-.56a1 1 0 0 0-1.41-1.41l-.56.56A4.3 4.3 0 0 0 17 3.8V3a1 1 0 1 0-2 0v.8a4.1 4.1 0 0 0-1.26.52l-.57-.56a1 1 0 0 0-1.41 1.41l.56.57c-.09.15-.16.32-.24.48A5.9 5.9 0 0 0 10.5 6a6 6 0 0 0-5.94 5.13 3.5 3.5 0 0 0-.46 6.58q.193.076.4.08a1 1 0 0 0 .4-1.92A1.48 1.48 0 0 1 4 14.5 1.5 1.5 0 0 1 5.5 13a1 1 0 0 0 1-1 4 4 0 0 1 7.78-1.29 1 1 0 0 0 .78.67 2.32 2.32 0 0 1 .94 4.23 1.005 1.005 0 0 0 1.1 1.68 4.34 4.34 0 0 0 1.6-5.17l.13.12a1 1 0 0 0 1.41 0 1 1 0 0 0 0-1.41l-.56-.56A4.3 4.3 0 0 0 20.2 9h.8a1 1 0 1 0 0-2m-3.34 2.65a2.1 2.1 0 0 1-.6.42A4.2 4.2 0 0 0 16 9.54a6.1 6.1 0 0 0-2.09-2.49c.112-.258.267-.495.46-.7a2.43 2.43 0 0 1 3.3 0 2.37 2.37 0 0 1 0 3.3zM8.5 14a1 1 0 0 0-1 1v6a1 1 0 1 0 2 0v-6a1 1 0 0 0-1-1m4-1a1 1 0 0 0-1 1v6a1 1 0 0 0 2 0v-6a1 1 0 0 0-1-1'
    />
  </svg>
);
export default SvgCloudRainSun;
