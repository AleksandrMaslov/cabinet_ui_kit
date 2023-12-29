import {
  ChangeEventHandler,
  FC,
  FocusEventHandler,
  useEffect,
  useState,
} from 'react'

import classes from './Input.module.css'

type InputChangeHandler = ChangeEventHandler<HTMLInputElement> | undefined

interface InputProps {
  label?: string
  placeholder?: string
  id?: string
  type?: 'text' | 'email' | 'password' | 'tel'
  name?: 'text' | 'email' | 'password' | 'tel' | 'username' | 'comments'
  bordered?: boolean
  className?: string
  disabled?: boolean
  required?: boolean
  autoComplete?: 'off' | 'on'
  value?: string
  setValue?: (value: string) => void
  error?: string
}

const Input: FC<InputProps> = ({
  label,
  placeholder,
  id,
  name,
  type = 'text',
  bordered = false,
  className,
  disabled = false,
  required = false,
  autoComplete = 'off',
  value,
  setValue,
  error,
}) => {
  const rootClasses = [classes.input]
  if (className) rootClasses.push(className)

  const textClasses = [classes.text]
  if (bordered) textClasses.push(classes.text_bordered)

  const [isDirty, setDirty] = useState<boolean>(false)

  const changeHandler: InputChangeHandler =
    setValue && (event => setValue(event.target.value))

  const blurHandler: FocusEventHandler<HTMLInputElement> = () => {
    if (isDirty) return
    setDirty(true)
  }

  useEffect(() => {
    if (!value) setDirty(false)
  }, [value])

  return (
    <label className={rootClasses.join(' ')} htmlFor={id}>
      {label && <span>{label}</span>}

      <input
        className={textClasses.join(' ')}
        onChange={changeHandler}
        onBlur={blurHandler}
        {...{
          id,
          name,
          type,
          placeholder,
          disabled,
          required,
          autoComplete,
          value,
        }}
      />

      {isDirty && <p className={classes.error}>{error}</p>}
    </label>
  )
}

export default Input
