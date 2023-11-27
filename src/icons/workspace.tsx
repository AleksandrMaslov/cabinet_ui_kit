import { FC } from 'react'

type SvgWorkspaceProps = {
  className?: string
}

const SvgWorkspace: FC<SvgWorkspaceProps> = ({ className }) => {
  return (
    <svg
      className={className}
      width="31"
      height="29"
      viewBox="0 0 31 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.83347 19.3333H27.1668V3.29167H3.83347V19.3333ZM16.9585 22.25V25.1667H22.7918V28.0833H8.20847V25.1667H14.0418V22.25H2.36347C2.17197 22.2489 1.98258 22.2099 1.80615 22.1355C1.62973 22.061 1.46973 21.9524 1.33534 21.816C1.20094 21.6796 1.09479 21.518 1.02298 21.3404C0.951156 21.1629 0.915077 20.973 0.916807 20.7815V1.84354C0.916807 1.03271 1.58035 0.375 2.36347 0.375H28.6368C29.436 0.375 30.0835 1.02979 30.0835 1.84354V20.7815C30.0835 21.5923 29.4199 22.25 28.6368 22.25H16.9585Z"
        fill="white"
      />
    </svg>
  )
}

export default SvgWorkspace
