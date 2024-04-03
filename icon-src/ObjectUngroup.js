import * as React from "react";
const SvgObjectUngroup = ({ title, titleId, ...props }) => (
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
      d='M21 18.28v-6.56a2.001 2.001 0 0 0-.337-3.644A2 2 0 0 0 18.28 9H15V5.72A2 2 0 1 0 12.28 3H5.72A2 2 0 1 0 3 5.72v6.56A2 2 0 1 0 5.72 15H9v3.28A2 2 0 1 0 11.72 21h6.56A2 2 0 1 0 21 18.28M8 10a2 2 0 0 0 1 1.72V13H5.72c-.17-.3-.42-.55-.72-.72V5.72c.3-.17.55-.42.72-.72h6.56c.17.3.42.55.72.72V9h-1.28A2 2 0 0 0 8 10m5 1v1.28c-.3.17-.55.42-.72.72H11v-1.28c.3-.17.55-.42.72-.72zm6 7.28c-.3.17-.55.42-.72.72h-6.56c-.17-.3-.42-.55-.72-.72V15h1.28A2 2 0 1 0 15 12.28V11h3.28c.17.3.42.55.72.72z'
    />
  </svg>
);
export default SvgObjectUngroup;
