import { FC } from 'react'

type SvgSquareProps = {
  className?: string
}

const SvgSquare: FC<SvgSquareProps> = ({ className }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="50"
      height="50"
      viewBox="0 0 50 50"
    >
      <rect fill="#111" strokeWidth="0" />
    </svg>
  )
}

export default SvgSquare
