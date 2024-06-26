import * as React from "react";
const SvgHtml3Alt = ({ title, titleId, ...props }) => (
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
      d='M7.952 8h6.987l-.178 2h-4.77a1 1 0 0 0 0 2h4.593l-.264 2.977-2.329.528-2.328-.529-.096-1.065a1 1 0 1 0-1.992.178l.16 1.79a1 1 0 0 0 .775.887l3.26.74c.146.033.297.033.443 0l3.26-.74a1 1 0 0 0 .775-.888l.432-4.868.002-.01-.001-.004.346-3.908A1 1 0 0 0 16.031 6H7.952a1 1 0 1 0 0 2m12.702-5.674A1 1 0 0 0 19.916 2H4.066a1 1 0 0 0-.996 1.09l1.444 16.194a1 1 0 0 0 .727.874l6.473 1.805a1 1 0 0 0 .537 0l6.49-1.812a1 1 0 0 0 .728-.874l1.443-16.188a1 1 0 0 0-.258-.763M17.538 18.41l-5.555 1.551-5.539-1.545L5.16 4h13.664z'
    />
  </svg>
);
export default SvgHtml3Alt;
