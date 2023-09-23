import * as React from "react";
const SvgStickyNote = ({ title, titleId, ...props }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 64 64'
    width='1em'
    height='1em'
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <defs>
      <linearGradient
        id='sticky-note_svg__a'
        x1={32}
        x2={32}
        y1={57.907}
        y2={6.093}
        gradientUnits='userSpaceOnUse'
      >
        <stop offset={0} stopColor='#ac81f7' />
        <stop offset={1} stopColor='#7049dd' />
      </linearGradient>
    </defs>
    <path
      fill='url(#sticky-note_svg__a)'
      d='m54.776 51.782-4.11-34.55a2.14 2.14 0 0 0-2.37-1.89l-3.14.37v-3.54a2.14 2.14 0 0 0-2.14-2.13h-18.34c-.09-5.26-7.77-5.27-7.88 0h-5.45a2.14 2.14 0 0 0-2.14 2.13v34.82a2.142 2.142 0 0 0 2.14 2.14h6.9l.82 6.89a2.152 2.152 0 0 0 2.37 1.87l31.46-3.73a2.16 2.16 0 0 0 1.88-2.38Zm-17.64-6.72v-5.18h4.55Zm-18.34-35.06a1.95 1.95 0 0 1 3.9.04h-3.9Zm-7.45 37.13a.143.143 0 0 1-.14-.14c.14-.18-.27-34.96.14-34.95h5.45v2.67a3.945 3.945 0 0 0 7.89 0 1 1 0 0 0-2 0 1.945 1.945 0 0 1-3.89 0v-2.67h24.22a.135.135 0 0 1 .14.13v25.71h-7.02a1.003 1.003 0 0 0-1 1v8.25Z'
    />
  </svg>
);
export default SvgStickyNote;
