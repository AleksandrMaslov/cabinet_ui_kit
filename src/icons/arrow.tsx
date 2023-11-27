import { FC } from 'react'

type SvgArrowProps = {
  className?: string
}

const SvgArrow: FC<SvgArrowProps> = ({ className }) => {
  return (
    <svg
      className={className}
      width="35"
      height="29"
      viewBox="0 0 35 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.3125 0.4375L18.3016 2.39641L28.9609 13.0938H0.625V15.9062H28.9609L18.3016 26.5558L20.3125 28.5625L34.375 14.5L20.3125 0.4375Z"
        fill="#1F1F1F"
      />
    </svg>
  )
}

export default SvgArrow
