import * as React from "react";
const SvgIconAdjustCircle = ({ title, titleId, ...props }) => (
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
      d='M17 7A7.74 7.74 0 1 0 7 17 7.74 7.74 0 1 0 17 7Zm-1.6 1.6c.072.376.109.757.11 1.14-.002.451-.056.9-.16 1.34l-2.44-2.42a5.92 5.92 0 0 1 1.34-.16c.383 0 .764.038 1.14.11l.01-.01Zm-.94 4.4A6 6 0 0 1 13 14.46L9.54 11A6 6 0 0 1 11 9.54L14.46 13Zm-8 1.46a5.749 5.749 0 1 1 8-8h-.25a7.76 7.76 0 0 0-7.71 7.79c0 .08.01.17.01.25l-.05-.04Zm2.1.89a6.12 6.12 0 0 1-.11-1.14c.002-.451.056-.9.16-1.34l2.43 2.43c-.44.104-.889.158-1.34.16-.365.01-.73-.014-1.09-.07l-.05-.04ZM14.25 20a5.772 5.772 0 0 1-4.75-2.51h.25a7.76 7.76 0 0 0 7.75-7.74V9.5A5.75 5.75 0 0 1 14.25 20Z'
    />
  </svg>
);
export default SvgIconAdjustCircle;
