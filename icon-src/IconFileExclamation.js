import * as React from "react";
const SvgIconFileExclamation = ({ title, titleId, ...props }) => (
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
      d='M12.92 16.62a.762.762 0 0 0-.09-.18 1.573 1.573 0 0 0-.12-.15.999.999 0 0 0-1.09-.21 1 1 0 0 0-.33.21 1.573 1.573 0 0 0-.12.15.762.762 0 0 0-.09.18.64.64 0 0 0-.06.18 1.517 1.517 0 0 0 0 .2.84.84 0 0 0 .08.38c.05.121.122.233.21.33A1 1 0 0 0 12 18a.84.84 0 0 0 .38-.08.9.9 0 0 0 .54-.54A.84.84 0 0 0 13 17a1.517 1.517 0 0 0 0-.2.639.639 0 0 0-.08-.18ZM20 8.94a1.307 1.307 0 0 0-.06-.27v-.09a1.07 1.07 0 0 0-.19-.28l-6-6a1.071 1.071 0 0 0-.28-.19h-.09a.88.88 0 0 0-.33-.11H7a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8.94Zm-6-3.53L16.59 8H15a1 1 0 0 1-1-1V5.41ZM18 19a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h5v3a3 3 0 0 0 3 3h3v9Zm-6-8a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-2a1 1 0 0 0-1-1Z'
    />
  </svg>
);
export default SvgIconFileExclamation;
