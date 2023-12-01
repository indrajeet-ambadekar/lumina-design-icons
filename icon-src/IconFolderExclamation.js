import * as React from "react";
const SvgIconFolderExclamation = ({ title, titleId, ...props }) => (
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
      d='M12.92 16.12a.764.764 0 0 0-.09-.18 1.573 1.573 0 0 0-.12-.15l-.15-.12-.18-.09a1.002 1.002 0 0 0-1.09.21l-.12.15a.764.764 0 0 0-.09.18.64.64 0 0 0-.06.18 1.362 1.362 0 0 0 0 .2c.002.13.029.26.08.38.05.121.122.233.21.33a1 1 0 0 0 1.09.22c.12-.058.23-.132.33-.22.088-.1.162-.21.22-.33a1 1 0 0 0 .05-.38 1.362 1.362 0 0 0 0-.2.64.64 0 0 0-.08-.18ZM12 10.5a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-2a1 1 0 0 0-1-1Zm7-5h-6.28l-.32-1a3 3 0 0 0-2.84-2H5a3 3 0 0 0-3 3v13a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-10a3 3 0 0 0-3-3Zm1 13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-13a1 1 0 0 1 1-1h4.56a1 1 0 0 1 .95.68l.54 1.64a1 1 0 0 0 .95.68h7a1 1 0 0 1 1 1v10Z'
    />
  </svg>
);
export default SvgIconFolderExclamation;
