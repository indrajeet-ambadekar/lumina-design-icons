import * as React from "react";
const SvgCopyLandscape = ({ title, titleId, ...props }) => (
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
      d='M18 19H6a3 3 0 0 1-3-3V8a1 1 0 0 0-2 0v8a5 5 0 0 0 5 5h12a1 1 0 0 0 0-2Zm5-9.06a1.307 1.307 0 0 0-.06-.27v-.09a1.07 1.07 0 0 0-.19-.28l-6-6a1.071 1.071 0 0 0-.28-.19h-.09L16.06 3H8a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V9.94Zm-6-3.53L19.59 9H18a1 1 0 0 1-1-1V6.41ZM21 14a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h7v3a3 3 0 0 0 3 3h3v3Z'
    />
  </svg>
);
export default SvgCopyLandscape;
