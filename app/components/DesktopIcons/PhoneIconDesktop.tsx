import * as React from 'react'
import { SVGProps } from 'react'

const PhoneIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={22}
    viewBox="-2 -2 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M22 12A10.002 10.002 0 0 0 12 2v2a8.003 8.003 0 0 1 7.391 4.938A8 8 0 0 1 20 12h2ZM2 10V5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H6a8 8 0 0 0 8 8v-2a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-5C7.373 22 2 16.627 2 10Z"
      fill="currentColor"
    />
    <path
      d="M17.543 9.704c.302.728.457 1.508.457 2.296h-1.8A4.199 4.199 0 0 0 12 7.8V6a6 6 0 0 1 5.543 3.704Z"
      fill="currentColor"
    />
  </svg>
)

export default PhoneIcon