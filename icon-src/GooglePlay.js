import * as React from "react";
const SvgGooglePlay = ({ title, titleId, ...props }) => (
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
      d='M20.919 10.653c-.315-.17-3.011-1.734-4.023-2.323l-.003-.002L4.638 1.253a1.68 1.68 0 0 0-1.407-.16l-.076.03q-.089.03-.173.07a1.52 1.52 0 0 0-.738 1.364v18.986a1.44 1.44 0 0 0 .692 1.27q.075.037.155.064a1.38 1.38 0 0 0 .533.118c.292-.003.579-.083.83-.232l12.44-7.182 4.02-2.322a1.53 1.53 0 0 0 .842-1.334 1.49 1.49 0 0 0-.837-1.272M4.244 19.839V4.102l7.94 7.859zm5.018-2.162 4.343-4.31 1.15 1.139zm4.342-7.125L9.206 6.2l5.554 3.207zm2.947 2.917-1.526-1.51 1.528-1.516c.72.419 1.843 1.07 2.616 1.515z'
    />
  </svg>
);
export default SvgGooglePlay;
