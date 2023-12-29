import { ChangeEventHandler, FC } from 'react'

import classes from './Input.module.css'

type InputChangeHandler = ChangeEventHandler<HTMLInputElement> | undefined

interface InputProps {
  label?: string
  placeholder?: string
  id?: string
  type?: 'text' | 'email' | 'password' | 'tel'
  name?: 'text' | 'email' | 'password' | 'tel' | 'username'
  bordered?: boolean
  value?: string
  setValue?: (value: string) => void
  autoComplete?: 'off' | 'on'
  required?: boolean
  className?: string
}

const Input: FC<InputProps> = ({
  label,
  placeholder,
  id,
  name,
  value,
  setValue,
  className,
  autoComplete = 'off',
  type = 'text',
  required = false,
  bordered = false,
}) => {
  const rootClasses = [classes.input]
  if (className) rootClasses.push(className)

  const textClasses = [classes.text]
  if (bordered) textClasses.push(classes.text_bordered)

  const onChangeHandler: InputChangeHandler =
    setValue && (event => setValue(event.target.value))

  return (
    <label className={rootClasses.join(' ')} htmlFor={id}>
      {label && <span>{label}</span>}

      <input
        className={textClasses.join(' ')}
        onChange={onChangeHandler}
        {...{ id, name, type, placeholder, required, autoComplete, value }}
      />
    </label>
  )
}

export default Input
