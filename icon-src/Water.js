import * as React from "react";
const SvgWater = ({ title, titleId, ...props }) => (
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
      d='M2.72 7.65c.196.058.384.138.56.24a4 4 0 0 0 4.1 0 2.6 2.6 0 0 1 2.56 0 4.15 4.15 0 0 0 4.12 0 2.6 2.6 0 0 1 2.56 0 4.25 4.25 0 0 0 2.08.56 3.88 3.88 0 0 0 2-.56c.176-.102.364-.182.56-.24a1 1 0 0 0-.56-1.92 4.45 4.45 0 0 0-1 .45 2.08 2.08 0 0 1-2.1 0 4.64 4.64 0 0 0-4.54 0 2.11 2.11 0 0 1-2.12 0 4.64 4.64 0 0 0-4.54 0 2.08 2.08 0 0 1-2.1 0 4.45 4.45 0 0 0-1-.45 1 1 0 1 0-.56 1.92h-.02Zm18 8.08c-.35.108-.686.26-1 .45a2.08 2.08 0 0 1-2.1 0 4.64 4.64 0 0 0-4.54 0 2.11 2.11 0 0 1-2.12 0 4.64 4.64 0 0 0-4.54 0 2.08 2.08 0 0 1-2.1 0 4.448 4.448 0 0 0-1-.45 1 1 0 0 0-.56 1.92c.196.058.384.138.56.24a4 4 0 0 0 4.1 0 2.6 2.6 0 0 1 2.56 0 4.15 4.15 0 0 0 4.12 0 2.6 2.6 0 0 1 2.56 0c.634.362 1.35.555 2.08.56a3.881 3.881 0 0 0 2-.56c.176-.102.364-.183.56-.24a1 1 0 0 0-.56-1.92h-.02Zm0-5c-.35.108-.686.26-1 .45a2.08 2.08 0 0 1-2.1 0 4.64 4.64 0 0 0-4.54 0 2.11 2.11 0 0 1-2.12 0 4.64 4.64 0 0 0-4.54 0 2.08 2.08 0 0 1-2.1 0 4.448 4.448 0 0 0-1-.45 1 1 0 0 0-1.32.68 1 1 0 0 0 .68 1.24c.196.057.384.138.56.24a4 4 0 0 0 4.1 0 2.6 2.6 0 0 1 2.56 0 4.15 4.15 0 0 0 4.12 0 2.6 2.6 0 0 1 2.56 0c.634.362 1.35.555 2.08.56a3.881 3.881 0 0 0 2-.56c.176-.102.364-.183.56-.24a1 1 0 0 0-.56-1.92h.06Z'
    />
  </svg>
);
export default SvgWater;
