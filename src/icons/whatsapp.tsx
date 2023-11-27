import { FC } from 'react'

type SvgWhatsappProps = {
  className?: string
}

const SvgWhatsapp: FC<SvgWhatsappProps> = ({ className }) => {
  return (
    <svg
      className={className}
      width="35"
      height="35"
      viewBox="0 -1 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1358_391)">
        <path
          d="M18.5938 32.8125C15.7682 32.8125 13.1136 32.1289 10.6299 30.7617L0 35L4.23828 24.3701C2.87109 21.8864 2.1875 19.2318 2.1875 16.4062C2.1875 14.1732 2.62044 12.0483 3.48633 10.0317C4.35221 8.01514 5.52002 6.27197 6.98975 4.80225C8.45947 3.33252 10.2026 2.16471 12.2192 1.29883C14.2358 0.432943 16.3607 0 18.5938 0C20.8268 0 22.9517 0.432943 24.9683 1.29883C26.9849 2.16471 28.728 3.33252 30.1978 4.80225C31.6675 6.27197 32.8353 8.01514 33.7012 10.0317C34.5671 12.0483 35 14.1732 35 16.4062C35 18.6393 34.5671 20.7642 33.7012 22.7808C32.8353 24.7974 31.6675 26.5405 30.1978 28.0103C28.728 29.48 26.9849 30.6478 24.9683 31.5137C22.9517 32.3796 20.8268 32.8125 18.5938 32.8125ZM24.0625 19.6875H21.875L20.6445 20.7812C19.6191 20.5078 18.3602 19.6248 16.8677 18.1323C15.3752 16.6398 14.4922 15.3809 14.2188 14.3555L15.3125 13.125V10.9375C15.3125 10.5501 15.1758 10.1628 14.9023 9.77539C14.6289 9.38802 14.327 9.10889 13.9966 8.93799C13.6662 8.76709 13.4326 8.75 13.2959 8.88672L11.6895 10.4932C10.8008 11.3818 10.6698 12.7661 11.2964 14.646C11.923 16.5259 13.1193 18.3488 14.8853 20.1147C16.6512 21.8807 18.4741 23.077 20.354 23.7036C22.2339 24.3302 23.6182 24.1992 24.5068 23.3105L26.1133 21.7041C26.25 21.5674 26.2329 21.3338 26.062 21.0034C25.8911 20.673 25.612 20.3711 25.2246 20.0977C24.8372 19.8242 24.4499 19.6875 24.0625 19.6875Z"
          fill="#1F1F1F"
          strokeWidth={0}
        />
      </g>
    </svg>
  )
}

export default SvgWhatsapp