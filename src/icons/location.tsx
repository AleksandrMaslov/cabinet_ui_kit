import { FC } from 'react'

type SvgLocationProps = {
  className?: string
}

const SvgLocation: FC<SvgLocationProps> = ({ className }) => {
  return (
    <svg
      className={className}
      width="80"
      height="102"
      viewBox="0 0 80 102"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M40 99.47L43.9062 95.1706C48.3386 90.2121 52.3253 85.5075 55.8724 81.0327L58.8005 77.2594C71.0267 61.1683 77.1429 48.397 77.1429 38.9577C77.1429 18.809 60.5153 2.47607 40 2.47607C19.4848 2.47607 2.85718 18.809 2.85718 38.9577C2.85718 48.397 8.97337 61.1683 21.1996 77.2594L24.1277 81.0327C29.188 87.3663 34.4823 93.5181 40 99.4761V99.47Z"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
        fillOpacity={0}
        strokeWidth={5}
      />
      <path
        d="M40 53.8757C48.5473 53.8757 55.4762 47.1073 55.4762 38.7581C55.4762 30.409 48.5473 23.6406 40 23.6406C31.4527 23.6406 24.5238 30.409 24.5238 38.7581C24.5238 47.1073 31.4527 53.8757 40 53.8757Z"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
        fillOpacity={0}
        strokeWidth={5}
      />
    </svg>
  )
}

export default SvgLocation
