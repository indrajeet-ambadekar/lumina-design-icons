import * as React from "react";
const SvgDiceThree = ({ title, titleId, ...props }) => (
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
      d='M12 11a1 1 0 1 0 0 2 1 1 0 0 0 0-2ZM8 7a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm9-5H7a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5V7a5 5 0 0 0-5-5Zm3 15a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v10Zm-4-2a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z'
    />
  </svg>
);
export default SvgDiceThree;
