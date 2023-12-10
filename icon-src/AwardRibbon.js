import * as React from "react";
const SvgAwardRibbon = ({ title, titleId, ...props }) => (
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
      d='m20.87 17.25-2.71-4.68a7 7 0 1 0-12.32 0l-2.71 4.68a1 1 0 0 0 .87 1.5h2.87l1.46 2.46c.05.081.11.156.18.22a1 1 0 0 0 .69.28h.14a1 1 0 0 0 .73-.49L12 17.9l1.93 3.35a.999.999 0 0 0 .73.48h.14a1 1 0 0 0 .7-.28.872.872 0 0 0 .17-.21l1.46-2.46H20a1 1 0 0 0 .87-.5 1 1 0 0 0 0-1.03ZM9.19 18.78l-.89-1.49a1 1 0 0 0-.85-.49H5.72l1.43-2.48a7 7 0 0 0 3.57 1.84l-1.53 2.62ZM12 14.25a5 5 0 1 1 0-9.999 5 5 0 0 1 0 9.999Zm4.55 2.55a1 1 0 0 0-.85.49l-.89 1.49-1.52-2.65a7.06 7.06 0 0 0 3.56-1.84l1.43 2.48-1.73.03Z'
    />
  </svg>
);
export default SvgAwardRibbon;
