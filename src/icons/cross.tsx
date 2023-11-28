import { FC } from 'react'

type SvgCrossProps = {
  className?: string
}

const SvgCross: FC<SvgCrossProps> = ({ className }) => {
  return (
    <svg
      className={className}
      width="21"
      height="21"
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.125 19.875L19.875 1.125M1.125 1.125L19.875 19.875L1.125 1.125Z"
        stroke="black"
        strokeWidth="2"
      />
    </svg>
  )
}

export default SvgCross
