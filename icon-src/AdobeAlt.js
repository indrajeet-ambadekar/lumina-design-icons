import * as React from "react";
const SvgAdobeAlt = ({ title, titleId, ...props }) => (
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
      d='M10.247 2.403a1 1 0 0 0-.83-.444H1.991a1 1 0 0 0-1 1v18.082a1 1 0 0 0 1.925.38L10.342 3.34a1 1 0 0 0-.095-.936Zm-7.255 13.57V3.96h4.933L2.992 15.973Zm19-14.014h-7.518a1 1 0 0 0-.921 1.388l7.517 17.85a1 1 0 0 0 1.922-.388V2.959a1 1 0 0 0-1-1Zm-1 13.899L15.98 3.959h5.012v11.899ZM12.949 9.52a1 1 0 0 0-.926-.646h-.01a1 1 0 0 0-.928.627l-3.059 7.631a1 1 0 0 0 .929 1.372h2.254l1.523 2.99a.999.999 0 0 0 .89.547h2.613a1 1 0 0 0 .936-1.353L12.949 9.52Zm1.287 10.521-1.523-2.99a1 1 0 0 0-.89-.547h-1.39l1.553-3.875 2.802 7.412h-.552Z'
    />
  </svg>
);
export default SvgAdobeAlt;
