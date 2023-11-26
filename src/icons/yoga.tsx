import { FC } from 'react'

type SvgYogaProps = {
  className?: string
}

const SvgYoga: FC<SvgYogaProps> = ({ className }) => {
  return (
    <svg
      className={className}
      width="102"
      height="102"
      viewBox="0 0 102 102"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M64.9263 67.2715L69.5738 77.2652C69.5738 77.2652 90.4659 81.7015 90.4659 92.2531C90.4659 99.7498 81.1709 99.7498 81.1709 99.7498H56.4167L44.2292 92.979"
        stroke="black"
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fillOpacity={0}
      />
      <path
        d="M37.0737 67.2715L32.4316 77.2652C32.4316 77.2652 11.5341 81.7015 11.5341 92.2531C11.5341 99.7498 20.8291 99.7498 20.8291 99.7498H32.0416L44.2291 92.979L59.1249 83.4998"
        stroke="black"
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fillOpacity={0}
      />
      <path
        d="M2.25 72.2654C2.25 72.2654 13.8579 69.7683 20.8237 67.2713C27.7842 32.2904 48.6708 34.7875 51 34.7875C53.3237 34.7875 74.2158 32.2904 81.1762 67.2713C88.1421 69.7629 99.75 72.2654 99.75 72.2654"
        stroke="black"
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fillOpacity={0}
      />
      <path
        d="M51 23.9167C53.8732 23.9167 56.6287 22.7753 58.6603 20.7437C60.692 18.712 61.8334 15.9565 61.8334 13.0833C61.8334 10.2102 60.692 7.45465 58.6603 5.42301C56.6287 3.39137 53.8732 2.25 51 2.25C48.1268 2.25 45.3713 3.39137 43.3397 5.42301C41.3081 7.45465 40.1667 10.2102 40.1667 13.0833C40.1667 15.9565 41.3081 18.712 43.3397 20.7437C45.3713 22.7753 48.1268 23.9167 51 23.9167Z"
        stroke="black"
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fillOpacity={0}
      />
    </svg>
  )
}

export default SvgYoga
