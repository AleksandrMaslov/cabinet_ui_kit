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
  onChange?: (value: string) => void
  autocomplete?: 'off' | 'on'
  required?: boolean
  className?: string
}

const Input: FC<InputProps> = ({
  label,
  placeholder,
  id,
  name,
  value,
  onChange,
  className,
  autocomplete = 'off',
  type = 'text',
  required = false,
  bordered = false,
}) => {
  const rootClasses = [classes.input]
  if (className) rootClasses.push(className)

  const textClasses = [classes.text]
  if (bordered) textClasses.push(classes.text_bordered)

  const onChangeHandler: InputChangeHandler =
    onChange && (event => onChange(event.target.value))

  return (
    <label className={rootClasses.join(' ')} htmlFor={id}>
      {label && <span>{label}</span>}

      <input
        className={textClasses.join(' ')}
        onChange={onChangeHandler}
        {...{ id, name, type, placeholder, required, autocomplete, value }}
      />
    </label>
  )
}

export default Input
