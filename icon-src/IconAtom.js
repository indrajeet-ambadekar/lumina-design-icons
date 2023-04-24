import * as React from "react";
const SvgIconAtom = ({ title, titleId, ...props }) => (
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
      d='M12 11a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm7.62 1 .11-.14C21.08 10 21.4 8.29 20.66 7c-.74-1.29-2.4-1.86-4.66-1.63h-.18C14.91 3.3 13.56 2 12 2S9.09 3.3 8.19 5.4L8 5.37C5.74 5.14 4.08 5.71 3.34 7c-.74 1.29-.42 3 .93 4.86l.11.14-.11.14C2.92 14 2.6 15.71 3.34 17 4 18.1 5.27 18.68 7 18.68c.31 0 .63 0 1-.05h.18C9.09 20.7 10.44 22 12 22s2.91-1.3 3.81-3.4h.18c.34 0 .66.05 1 .05 1.77 0 3.07-.58 3.7-1.68.74-1.29.42-3-.93-4.86l-.14-.11ZM5.07 8c.25-.44 1-.68 2-.68h.49c-.157.615-.274 1.24-.35 1.87a15 15 0 0 0-1.45 1.25C5 9.44 4.78 8.5 5.07 8Zm0 8c-.29-.5 0-1.44.67-2.47.456.447.94.865 1.45 1.25.076.634.193 1.261.35 1.88-1.24.08-2.18-.16-2.47-.66ZM12 4c.56 0 1.23.66 1.8 1.83-.611.177-1.212.388-1.8.63a17.596 17.596 0 0 0-1.8-.63C10.77 4.66 11.44 4 12 4Zm0 16c-.56 0-1.23-.66-1.8-1.83a17.588 17.588 0 0 0 1.8-.63c.588.242 1.189.453 1.8.63C13.23 19.34 12.56 20 12 20Zm2.93-6.31c-.46.32-.93.62-1.43.91-.5.29-1 .55-1.5.78-.5-.233-1-.493-1.5-.78-.5-.29-1-.59-1.43-.91C9 13.15 9 12.59 9 12c0-.59 0-1.15.07-1.69.46-.32.93-.62 1.43-.91.5-.29 1-.55 1.5-.78.5.233 1 .493 1.5.78.5.29 1 .59 1.43.91 0 .54.07 1.1.07 1.69 0 .59 0 1.15-.07 1.69Zm4 2.31c-.29.5-1.23.75-2.47.66.157-.619.273-1.246.35-1.88.51-.385.994-.803 1.45-1.25.74 1.03.96 1.97.67 2.47Zm-.67-5.53c-.456-.447-.94-.865-1.45-1.25a14.783 14.783 0 0 0-.35-1.87h.49c1 0 1.73.24 2 .68.27.44.05 1.41-.69 2.44Z'
    />
  </svg>
);
export default SvgIconAtom;
