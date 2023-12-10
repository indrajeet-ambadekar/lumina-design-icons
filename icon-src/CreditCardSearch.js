import * as React from "react";
const SvgCreditCardSearch = ({ title, titleId, ...props }) => (
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
      d='M20 17.57a4.3 4.3 0 1 0-3.67 2.06 4.37 4.37 0 0 0 2.24-.63l1.72 1.73a1.002 1.002 0 0 0 1.639-.325 1 1 0 0 0-.219-1.095L20 17.57ZM18 17a2.37 2.37 0 0 1-3.27 0 2.32 2.32 0 0 1 0-3.27 2.31 2.31 0 0 1 3.944 1.635c0 .613-.242 1.2-.674 1.635Zm1-14H5a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h4a1 1 0 0 0 0-2H5a1 1 0 0 1-1-1V9h16v1a1 1 0 0 0 2 0V6a3 3 0 0 0-3-3Zm1 4H4V6a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v1Zm-10 4H7a1 1 0 0 0 0 2h3a1 1 0 0 0 0-2Z'
    />
  </svg>
);
export default SvgCreditCardSearch;
