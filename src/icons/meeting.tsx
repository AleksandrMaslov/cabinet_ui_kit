import { FC } from 'react'

type SvgMeetingRoomProps = {
  className?: string
}

const SvgMeetingRoom: FC<SvgMeetingRoomProps> = ({ className }) => {
  return (
    <svg
      className={className}
      width="31"
      height="25"
      viewBox="0 0 31 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M30.025 9.18926L27.9396 1.89759C27.8548 1.59147 27.6719 1.32159 27.4191 1.12931C27.1662 0.937035 26.8573 0.832951 26.5396 0.833008H4.46047C3.80422 0.833008 3.23547 1.27051 3.06047 1.89759L0.975049 9.18926C0.712549 10.108 1.41255 11.0413 2.37505 11.0413H5.58338L3.83338 24.1663H6.75005L7.72713 16.8747H23.2875L24.25 24.1663H27.1667L25.4167 11.0413H28.625C29.5876 11.0413 30.2875 10.108 30.025 9.18926ZM8.1063 13.958L8.50005 11.0413H22.5L22.8938 13.958H8.1063ZM4.31463 8.12467L5.5688 3.74967H25.4459L26.7001 8.12467H4.31463Z"
        fill="white"
      />
    </svg>
  )
}

export default SvgMeetingRoom
