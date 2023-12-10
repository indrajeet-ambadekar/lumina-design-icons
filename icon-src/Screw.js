import * as React from "react";
const SvgScrew = ({ title, titleId, ...props }) => (
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
      d='m21.71 10.12-7.83-7.83a1 1 0 0 0-1.7.57L11.45 8l-2 2-.33-.19A1 1 0 0 0 8 11.44l-1.15 1.17-.33-.19a1 1 0 0 0-1.11 1.63l-1.17 1.16-.32-.21a.999.999 0 0 0-1.37.37 1 1 0 0 0 .25 1.26l-.51.51a.93.93 0 0 0-.21.33 1 1 0 0 0-.08.38V21a1 1 0 0 0 1 1h3.13a.997.997 0 0 0 .38-.08.93.93 0 0 0 .33-.21L8.54 20l.33.19a1 1 0 0 0 1.37-.36 1 1 0 0 0-.24-1.27l1.17-1.16.33.19c.15.085.318.13.49.13a1 1 0 0 0 .6-1.72l1.17-1.16.33.19c.15.085.318.13.49.13a1 1 0 0 0 .62-1.77l.79-.79 5.15-.73a1 1 0 0 0 .81-.68.999.999 0 0 0-.24-1.07ZM5.72 20H4v-1.72l.57-.57L6.75 19l-1.03 1Zm2.49-2.5L6 16.25l1.14-1.14 2.17 1.25-1.1 1.14Zm2.61-2.6-2.18-1.26 1.15-1.14L12 13.75l-1.18 1.15Zm2.61-2.61L11.25 11l1.14-1.14 1.72 1.72-.68.71Zm2.45-1.74-2.43-2.43.43-3 5 5-3 .43Z'
    />
  </svg>
);
export default SvgScrew;
