import * as React from "react";
const SvgMasterCard = ({ title, titleId, ...props }) => (
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
      d='M15.265 5.274a6.682 6.682 0 0 0-3.273.855 6.728 6.728 0 1 0 0 11.746 6.725 6.725 0 1 0 3.273-12.6Zm-5.028 11.183c-.487.174-1 .267-1.518.273a4.728 4.728 0 0 1 0-9.456c.518.006 1.03.099 1.518.273a6.687 6.687 0 0 0 0 8.91Zm1.755-1.057a4.697 4.697 0 0 1 0-6.796 4.695 4.695 0 0 1 0 6.796Zm3.273 1.33a4.668 4.668 0 0 1-1.519-.273 6.688 6.688 0 0 0 0-8.91c.488-.174 1.001-.267 1.519-.273a4.727 4.727 0 1 1 0 9.456Z'
    />
  </svg>
);
export default SvgMasterCard;
