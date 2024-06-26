import * as React from "react";
const SvgFileExclamation = ({ title, titleId, ...props }) => (
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
      d='M12.92 16.62a.8.8 0 0 0-.09-.18 2 2 0 0 0-.12-.15 1 1 0 0 0-1.09-.21 1 1 0 0 0-.33.21 2 2 0 0 0-.12.15.8.8 0 0 0-.09.18.6.6 0 0 0-.06.18 2 2 0 0 0 0 .2.84.84 0 0 0 .08.38q.076.183.21.33A1 1 0 0 0 12 18a.84.84 0 0 0 .38-.08.9.9 0 0 0 .54-.54A.84.84 0 0 0 13 17a2 2 0 0 0 0-.2.6.6 0 0 0-.08-.18M20 8.94a1.3 1.3 0 0 0-.06-.27v-.09a1 1 0 0 0-.19-.28l-6-6a1 1 0 0 0-.28-.19h-.09a.9.9 0 0 0-.33-.11H7a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8.94m-6-3.53L16.59 8H15a1 1 0 0 1-1-1zM18 19a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h5v3a3 3 0 0 0 3 3h3zm-6-8a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-2a1 1 0 0 0-1-1'
    />
  </svg>
);
export default SvgFileExclamation;
