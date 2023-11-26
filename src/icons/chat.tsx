import { FC } from 'react'

type SvgChatProps = {
  className?: string
}

const SvgChat: FC<SvgChatProps> = ({ className }) => {
  return (
    <svg
      className={className}
      width="98"
      height="98"
      viewBox="0 0 98 98"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M49.0312 0.214355C36.1064 0.229006 23.7152 5.36986 14.576 14.5091C5.43675 23.6483 0.2959 36.0395 0.28125 48.9644V91.7902C0.283132 93.3609 0.907954 94.8667 2.01865 95.9773C3.12934 97.0879 4.63521 97.7126 6.2059 97.7144H49.0312C61.9606 97.7144 74.3603 92.5782 83.5027 83.4358C92.6451 74.2934 97.7812 61.8937 97.7812 48.9644C97.7812 36.0351 92.6451 23.6353 83.5027 14.4929C74.3603 5.3505 61.9606 0.214355 49.0312 0.214355ZM49.0312 93.6519H6.2059C5.71224 93.6515 5.2389 93.4552 4.88979 93.1062C4.54067 92.7571 4.34429 92.2839 4.34375 91.7902V48.9644C4.34375 40.126 6.96463 31.4861 11.875 24.1373C16.7853 16.7885 23.7645 11.0608 31.9301 7.67849C40.0957 4.2962 49.0808 3.41124 57.7494 5.13551C66.4179 6.85979 74.3804 11.1159 80.6301 17.3655C86.8797 23.6152 91.1358 31.5777 92.8601 40.2463C94.5844 48.9148 93.6994 57.8999 90.3171 66.0655C86.9348 74.2311 81.2071 81.2103 73.8583 86.1207C66.5095 91.031 57.8696 93.6519 49.0312 93.6519ZM28.7182 50.9981C28.7182 51.8016 28.48 52.5871 28.0336 53.2551C27.5872 53.9232 26.9527 54.4439 26.2104 54.7514C25.4681 55.0589 24.6512 55.1393 23.8632 54.9826C23.0751 54.8258 22.3513 54.4389 21.7831 53.8708C21.215 53.3026 20.8281 52.5787 20.6713 51.7907C20.5145 51.0027 20.595 50.1858 20.9025 49.4435C21.21 48.7012 21.7307 48.0667 22.3987 47.6203C23.0668 47.1739 23.8523 46.9356 24.6557 46.9356C25.7328 46.937 26.7653 47.3654 27.5269 48.127C28.2885 48.8886 28.7169 49.9211 28.7182 50.9981ZM53.0932 50.9981C53.0932 51.8016 52.855 52.5871 52.4086 53.2551C51.9622 53.9232 51.3277 54.4439 50.5854 54.7514C49.8431 55.0589 49.0262 55.1393 48.2382 54.9826C47.4501 54.8258 46.7263 54.4389 46.1581 53.8708C45.59 53.3026 45.2031 52.5787 45.0463 51.7907C44.8895 51.0027 44.97 50.1858 45.2775 49.4435C45.585 48.7012 46.1057 48.0667 46.7737 47.6203C47.4418 47.1739 48.2273 46.9356 49.0307 46.9356C50.1078 46.937 51.1403 47.3654 51.9019 48.127C52.6635 48.8886 53.0919 49.9211 53.0932 50.9981ZM77.4682 50.9981C77.4682 51.8016 77.23 52.5871 76.7836 53.2551C76.3372 53.9232 75.7027 54.4439 74.9604 54.7514C74.2181 55.0589 73.4012 55.1393 72.6132 54.9826C71.8251 54.8258 71.1013 54.4389 70.5331 53.8708C69.965 53.3026 69.5781 52.5787 69.4213 51.7907C69.2646 51.0027 69.345 50.1858 69.6525 49.4435C69.96 48.7012 70.4807 48.0667 71.1487 47.6203C71.8168 47.1739 72.6022 46.9356 73.4057 46.9356C74.4828 46.937 75.5153 47.3654 76.2769 48.127C77.0385 48.8886 77.4669 49.9211 77.4682 50.9981Z"
        fill="black"
      />
    </svg>
  )
}

export default SvgChat
