import { FC, MouseEventHandler } from 'react'

import classes from './Button.module.css'

interface ButtonProps {
  children: string
  color?: 'green' | 'lightgrey' | 'black'
  inverted?: boolean
  size?: 'small'
  type?: 'submit' | 'reset'
  onClick?: MouseEventHandler<HTMLButtonElement>
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
  if (size) rootClasses.push(classes[`button_${size}`])
  if (color) rootClasses.push(classes[`button_${color}`])
  if (inverted) rootClasses.push(classes[`button_inverted`])
  if (className) rootClasses.push(className)

  return (
    <button className={rootClasses.join(' ')} {...props}>
      {children}
    </button>
  )
}

export default Button
