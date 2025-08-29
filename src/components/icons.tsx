import type { SVGProps } from "react";

export function OrcidIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      {...props}
    >
      <path
        fill="currentColor"
        d="M256 128c0 70.7-57.3 128-128 128S0 198.7 0 128 57.3 0 128 0s128 57.3 128 128zM88 64v128h29.1V92.3h1.1L155.1 192H180V64h-28.1v99.9h-1.1L114.9 64H88z"
      ></path>
    </svg>
  );
}

export const Icons = {
  orcid: OrcidIcon,
};
