import { FC, MouseEventHandler } from 'react'

import classes from './Button.module.css'

interface ButtonProps {
  label: string
  color?: 'green' | 'lightgrey' | 'black'
  inverted?: boolean
  size?: 'small'
  type?: 'submit' | 'reset'
  onClick?: MouseEventHandler<HTMLButtonElement>
  className?: string
}

const Button: FC<ButtonProps> = ({
  label,
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
      {label}
    </button>
  )
}

export default Button
