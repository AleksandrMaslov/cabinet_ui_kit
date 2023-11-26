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
    >
      <rect width="50" height="50" fill="#111" stroke="#111" strokeWidth="1" />
    </svg>
  )
}

export default SvgSquare
