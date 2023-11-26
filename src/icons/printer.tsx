import { FC } from 'react'

type SvgPrinterProps = {
  className?: string
}

const SvgPrinter: FC<SvgPrinterProps> = ({ className }) => {
  return (
    <svg
      className={className}
      width="106"
      height="96"
      viewBox="0 0 106 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M94.9793 20.5938H87.5312V2.3125C87.5312 1.77378 87.3172 1.25712 86.9363 0.87619C86.5554 0.495256 86.0387 0.28125 85.5 0.28125H20.5C19.9613 0.28125 19.4446 0.495256 19.0637 0.87619C18.6828 1.25712 18.4688 1.77378 18.4688 2.3125V20.5938H11.0212C5.04727 20.5938 0.1875 25.1498 0.1875 30.75V71.375C0.1875 71.9137 0.401506 72.4304 0.78244 72.8113C1.16337 73.1922 1.68003 73.4062 2.21875 73.4062H18.4688V93.7188C18.4688 94.2575 18.6828 94.7741 19.0637 95.1551C19.4446 95.536 19.9613 95.75 20.5 95.75H85.5C86.0387 95.75 86.5554 95.536 86.9363 95.1551C87.3172 94.7741 87.5312 94.2575 87.5312 93.7188V73.4062H103.781C104.32 73.4062 104.837 73.1922 105.218 72.8113C105.598 72.4304 105.812 71.9137 105.812 71.375V30.75C105.812 25.1498 100.953 20.5938 94.9793 20.5938ZM22.5312 4.34375H83.4688V20.5938H22.5312V4.34375ZM83.4688 91.6875H22.5312V61.2188H83.4688V91.6875ZM101.75 69.3438H87.5312V59.1875C87.5312 58.6488 87.3172 58.1321 86.9363 57.7512C86.5554 57.3703 86.0387 57.1562 85.5 57.1562H20.5C19.9613 57.1562 19.4446 57.3703 19.0637 57.7512C18.6828 58.1321 18.4688 58.6488 18.4688 59.1875V69.3438H4.25V30.75C4.25 27.3898 7.28723 24.6562 11.0212 24.6562H94.9788C98.7133 24.6562 101.75 27.3898 101.75 30.75V69.3438ZM87.5343 40.9062C87.5343 41.7097 87.296 42.4952 86.8496 43.1633C86.4033 43.8313 85.7688 44.352 85.0265 44.6595C84.2841 44.967 83.4673 45.0474 82.6792 44.8907C81.8912 44.7339 81.1673 44.347 80.5992 43.7789C80.031 43.2107 79.6441 42.4869 79.4874 41.6988C79.3306 40.9108 79.4111 40.0939 79.7185 39.3516C80.026 38.6093 80.5467 37.9748 81.2148 37.5284C81.8829 37.082 82.6683 36.8438 83.4718 36.8438C84.5488 36.8451 85.5814 37.2735 86.3429 38.0351C87.1045 38.7967 87.533 39.8292 87.5343 40.9062Z"
        fill="black"
      />
    </svg>
  )
}

export default SvgPrinter
