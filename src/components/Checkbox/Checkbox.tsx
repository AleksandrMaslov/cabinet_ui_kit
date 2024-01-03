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
  checked?: boolean
  onChange?: (value: boolean) => void
  className?: string
}

const Checkbox: FC<CheckboxProps> = ({
  id,
  name,
  label,
  color,
  className,
  checked,
  onChange,
  size = '1.1em',
}) => {
  const rootClasses = [classes.checkbox]
  if (color) rootClasses.push(classes[`checkbox_${color}`])
  if (className) rootClasses.push(className)

  const onChangeHandler: InputChangeHandler =
    onChange && (event => onChange(event.target.checked))

  return (
    <label className={rootClasses.join(' ')} htmlFor={id}>
      <input
        className={classes.input}
        style={{ height: size, width: size }}
        onChange={onChangeHandler}
        {...{ id, name, checked, type: 'checkbox' }}
      />

      {label && <span>{label}</span>}
    </label>
  )
}

export default Checkbox
