import { ChangeEventHandler, FC, useEffect, useRef, useState } from 'react'

import Icon from '../Icon/Icon'

import classes from './Input.module.css'

type InputChangeHandler = ChangeEventHandler<HTMLInputElement> | undefined

interface InputProps {
  label?: string
  placeholder?: string
  id?: string
  name?: 'text' | 'email' | 'password' | 'tel' | 'username' | 'comments'
  bordered?: boolean
  className?: string
  disabled?: boolean
  required?: boolean
  autoComplete?: 'off' | 'on'
  value?: string
  setValue?: (value: string) => void
  error?: string
  password?: boolean
  icon?: 'eye' | 'cross'
}

const Input: FC<InputProps> = ({
  label,
  placeholder,
  id,
  name,
  bordered = false,
  className,
  disabled = false,
  required = false,
  autoComplete = 'off',
  value,
  setValue,
  error,
  password,
  icon,
}) => {
  const rootClasses = [classes.input]
  if (className) rootClasses.push(className)

  const textClasses = [classes.text]
  if (bordered) textClasses.push(classes.text_bordered)
  if (icon) textClasses.push(classes.text_iconed)

  const iconClasses = [classes.icon]
  if (bordered) iconClasses.push(classes.icon_bordered)
  if (disabled) iconClasses.push(classes.icon_disabled)

  const [isDirty, setDirty] = useState<boolean>(false)

  const changeHandler: InputChangeHandler =
    setValue && (event => setValue(event.target.value))

  const blurHandler = () => {
    if (isDirty) return
    setDirty(true)
  }

  useEffect(() => {
    if (!value) setDirty(false)
  }, [value])

  const input = useRef<HTMLInputElement>(null)
  const iconClickHandler = () => {
    if (!icon) return
    if (icon === 'cross') {
      if (!setValue) return
      return setValue('')
    }

    if (!input || !password) return
    input.current!.type =
      input.current!.type === 'password' ? 'text' : 'password'
  }

  return (
    <label className={rootClasses.join(' ')} htmlFor={id}>
      {label && <span>{label}</span>}

      <input
        ref={input}
        className={textClasses.join(' ')}
        type={password ? 'password' : 'text'}
        onChange={changeHandler}
        onBlur={blurHandler}
        {...{
          id,
          name,
          placeholder,
          disabled,
          required,
          autoComplete,
          value,
        }}
      />

      {isDirty && <p className={classes.error}>{error}</p>}

      {icon && (
        <Icon
          className={iconClasses.join(' ')}
          icon={icon || 'baby'}
          onClick={iconClickHandler}
          size="1em"
        />
      )}
    </label>
  )
}

export default Input
