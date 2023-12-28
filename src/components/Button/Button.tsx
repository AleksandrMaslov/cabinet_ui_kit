import { FC } from 'react'

import DotsLoader from '../DotsLoader/DotsLoader'

import classes from './Button.module.css'

interface ButtonProps {
  label: string
  color?: 'green' | 'lightgrey' | 'black'
  inverted?: boolean
  size?: 'small'
  type?: 'submit' | 'reset'
  onClick?: () => void
  isLoading?: boolean
  disabled?: boolean
  className?: string
}

const Button: FC<ButtonProps> = ({
  label,
  color,
  inverted,
  size,
  className,
  onClick,
  isLoading,
  disabled,
  ...props
}) => {
  const rootClasses = [classes.button]
  if (size) rootClasses.push(classes[`button_${size}`])
  if (color) rootClasses.push(classes[`button_${color}`])
  if (inverted) rootClasses.push(classes.button_inverted)
  if (isLoading) rootClasses.push(classes.button_loading)
  if (disabled) rootClasses.push(classes.button_disabled)
  if (className) rootClasses.push(className)

  const clickHandler = () => {
    if (isLoading) return
    if (onClick) onClick()
  }

  return (
    <button
      className={rootClasses.join(' ')}
      onClick={clickHandler}
      disabled={disabled}
      {...props}
    >
      {label}
      {isLoading && <DotsLoader className={classes.loader} />}
    </button>
  )
}

export default Button
