import { FC } from 'react'

type SvgMailProps = {
  className?: string
}

const SvgMail: FC<SvgMailProps> = ({ className }) => {
  return (
    <svg
      className={className}
      width="104"
      height="92"
      viewBox="0 0 104 92"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M64.1429 18H14.4286C11.1323 18 7.97105 19.3792 5.64024 21.8342C3.30943 24.2893 2 27.619 2 31.0909V76.9091C2 80.381 3.30943 83.7107 5.64024 86.1658C7.97105 88.6208 11.1323 90 14.4286 90H76.5714C79.8677 90 83.0289 88.6208 85.3598 86.1658C87.6906 83.7107 89 80.381 89 76.9091V44.1818"
        stroke="black"
        strokeWidth={5}
        strokeLinecap="round"
        strokeLinejoin="round"
        fillOpacity={0}
      />
      <path
        d="M14.8572 36.6191L45.8096 55.1906L76.7619 36.6191"
        stroke="black"
        strokeWidth={5}
        strokeLinecap="round"
        strokeLinejoin="round"
        fillOpacity={0}
      />
      <path
        d="M89.1428 2.6665V27.4284"
        stroke="black"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M76.762 15.0474H101.524"
        stroke="black"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default SvgMail
