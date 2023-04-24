import * as React from "react";
const SvgIconGooglePlay = ({ title, titleId, ...props }) => (
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
      d='M20.919 10.653c-.315-.17-3.011-1.734-4.023-2.323l-.003-.002L4.638 1.253a1.679 1.679 0 0 0-1.407-.16.953.953 0 0 0-.076.03c-.059.02-.117.043-.173.07a1.519 1.519 0 0 0-.738 1.364v18.986a1.435 1.435 0 0 0 .692 1.27c.05.025.102.046.155.064a1.38 1.38 0 0 0 .533.118c.292-.003.579-.083.83-.232l12.44-7.182 4.02-2.322a1.525 1.525 0 0 0 .842-1.334 1.49 1.49 0 0 0-.837-1.272ZM4.244 19.839V4.102l7.94 7.859-7.94 7.878Zm5.018-2.162 4.343-4.31 1.15 1.139-5.493 3.171Zm4.342-7.125L9.206 6.2l5.553 3.207-1.155 1.146Zm2.947 2.917-1.526-1.51 1.528-1.516c.72.419 1.843 1.07 2.616 1.515l-2.619 1.511Z'
    />
  </svg>
);
export default SvgIconGooglePlay;
