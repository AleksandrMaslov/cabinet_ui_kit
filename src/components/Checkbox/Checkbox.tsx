import { ChangeEventHandler, FC } from 'react'

import classes from './Checkbox.module.css'

type InputChangeHandler = ChangeEventHandler<HTMLInputElement> | undefined

interface CheckboxProps {
  id?: string
  name?: string
  label?: string
  size?: string
  color?:
    | 'green'
    | 'orange'
    | 'lightgreen'
    | 'blue'
    | 'milk'
    | 'white'
    | 'lightgrey'
    | 'grey'
  onChange?: (value: boolean) => void
  defaultChecked?: boolean
  className?: string
}

const Checkbox: FC<CheckboxProps> = ({
  id,
  name,
  label,
  color,
  className,
  onChange,
  size = '1.1em',
  defaultChecked = false,
}) => {
  const rootClasses = [classes.checkbox]
  if (color) rootClasses.push(`checkbox_${color}`)
  if (className) rootClasses.push(className)

  const onChangeHandler: InputChangeHandler =
    onChange && (event => onChange(event.target.checked))

  return (
    <label className={rootClasses.join(' ')} htmlFor={id}>
      <input
        className={classes.input}
        style={{ height: size, width: size }}
        onChange={onChangeHandler}
        {...{ id, name, defaultChecked, type: 'checkbox' }}
      />

      {label && <span>{label}</span>}
    </label>
  )
}

export default Checkbox
