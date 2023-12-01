import * as React from "react";
const SvgIconMapAlt = ({ title, titleId, ...props }) => (
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
      d='m21.32 5.05-6-2h-.07a.701.701 0 0 0-.14 0h-.43L9 5 3.32 3.05a1 1 0 0 0-.9.14A1 1 0 0 0 2 4v14a1 1 0 0 0 .68.95l6 2a1 1 0 0 0 .62 0l5.7-1.9L20.68 21c.106.014.214.014.32 0a.94.94 0 0 0 .58-.19A1.001 1.001 0 0 0 22 20V6a1 1 0 0 0-.68-.95ZM8 18.61l-4-1.33V5.39l4 1.33v11.89Zm6-1.33-4 1.33V6.72l4-1.33v11.89Zm6 1.33-4-1.33V5.39l4 1.33v11.89Z'
    />
  </svg>
);
export default SvgIconMapAlt;
