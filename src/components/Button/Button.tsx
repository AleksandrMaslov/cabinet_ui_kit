import { FC, ReactNode } from 'react'

import classes from './Button.module.css'
interface ButtonProps {
  children: ReactNode
  big?: boolean
  className?: string
}

const Button: FC<ButtonProps> = ({ children, className, big, ...props }) => {
  const rootClasses = [classes.button]
  if (className) rootClasses.push(className)
  if (big) rootClasses.push(classes.button_big)

  return (
    <button className={rootClasses.join(' ')} {...props}>
      {children}
    </button>
  )
}

export default Button
