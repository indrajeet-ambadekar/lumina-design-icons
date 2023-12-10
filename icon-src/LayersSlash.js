import * as React from "react";
const SvgLayersSlash = ({ title, titleId, ...props }) => (
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
      d='m20.49 13.94-.34.2a1 1 0 0 0 1.02 1.72l.34-.2a1 1 0 0 0-1-1.72h-.02Zm-8.84-7.58.35-.21 7 4-1.76 1a1 1 0 0 0 .5 1.87 1 1 0 0 0 .5-.13L21.5 11a1 1 0 0 0 0-1.74l-9-5.19a1 1 0 0 0-1 0l-.85.49a1.004 1.004 0 0 0 1 1.74v.06ZM3.71 2.29a1.004 1.004 0 1 0-1.42 1.42l3.64 3.63-3.43 2a1 1 0 0 0 0 1.74l9 5.2c.154.083.325.127.5.13.175-.004.346-.049.5-.13l1.5-.88 1.45 1.46-3.44 2-8.51-4.93a1.003 1.003 0 0 0-1 1.74l9 5.2a1 1 0 0 0 1 0l4.41-2.55 3.38 3.39a1.002 1.002 0 0 0 1.639-.325 1 1 0 0 0-.219-1.095l-18-18Zm8.29 12-7-4.1 2.4-1.38 5.12 5.13-.52.35Z'
    />
  </svg>
);
export default SvgLayersSlash;
