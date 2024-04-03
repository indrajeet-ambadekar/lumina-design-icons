import * as React from "react";
const SvgImageV = ({ title, titleId, ...props }) => (
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
      d='M19 2H5a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14q.247-.003.49-.05l.3-.07h.12l.37-.14.13-.07c.1-.06.21-.11.31-.18a4 4 0 0 0 .38-.32l.07-.09q.147-.15.27-.32l.09-.13q.105-.167.18-.35.04-.072.07-.15c.05-.12.08-.25.12-.38v-.15q.085-.294.1-.6V5a3 3 0 0 0-3-3M5 20a1 1 0 0 1-1-1v-4.31l3.29-3.3a1 1 0 0 1 1.42 0l8.6 8.61zm15-1a1 1 0 0 1-.07.36q-.035.074-.08.14a1 1 0 0 1-.09.12l-5.35-5.35.88-.88a1 1 0 0 1 1.42 0l3.29 3.3zm0-5.14L18.12 12a3.08 3.08 0 0 0-4.24 0l-.88.88L10.12 10a3.08 3.08 0 0 0-4.24 0L4 11.86V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1z'
    />
  </svg>
);
export default SvgImageV;
