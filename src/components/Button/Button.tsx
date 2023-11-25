import { FC } from 'react'

import classes from './Button.module.css'
export interface ButtonProps {
  children: string
  color?: '' | 'green' | 'lightgrey' | 'black'
  inverted?: boolean
  size?: '' | 'small'
  className?: string
}

const Button: FC<ButtonProps> = ({
  children,
  color,
  inverted,
  size,
  className,
  ...props
}) => {
  const rootClasses = [classes.button]
  if (className) rootClasses.push(className)
  if (size) rootClasses.push(classes[`button_${size}`])
  if (color) rootClasses.push(classes[`button_${color}`])
  if (inverted) rootClasses.push(classes[`button_inverted`])

  return (
    <button className={rootClasses.join(' ')} {...props}>
      {children}
    </button>
  )
}

export default Button
