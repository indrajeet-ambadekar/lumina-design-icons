import * as React from "react";
const SvgBatteryBolt = ({ title, titleId, ...props }) => (
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
      d='M6.69 15H4V9h2.31a1 1 0 0 0 0-2H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2.69a1 1 0 0 0 0-2m7.2-2.56q.036-.088.06-.18a1.4 1.4 0 0 0 0-.2v-.18a.7.7 0 0 0-.05-.2 1 1 0 0 0-.08-.17 1 1 0 0 0-.1-.16l-.16-.13-.09-.09h-.06l-.18-.06h-3.5l1.45-2.5a1.003 1.003 0 0 0-1.74-1l-2.31 4v.06a1 1 0 0 0-.06.18 1.4 1.4 0 0 0 0 .2L7 12v.12a.7.7 0 0 0 .05.2q.03.09.08.17.04.085.1.16l.16.13a1 1 0 0 0 .09.09h.16A1 1 0 0 0 8 13h3.27l-1.45 2.5a1.003 1.003 0 1 0 1.74 1l2.31-4s.01-.04.02-.06M21 10a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-2a1 1 0 0 0-1-1m-4-3h-2.69a1 1 0 1 0 0 2H17v6h-2.31a1 1 0 0 0 0 2H17a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2'
    />
  </svg>
);
export default SvgBatteryBolt;
