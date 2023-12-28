import { FC } from 'react'

import classes from './DotsLoader.module.css'

interface DotsLoaderProps {
  color?:
    | 'green'
    | 'orange'
    | 'lightgreen'
    | 'blue'
    | 'milk'
    | 'white'
    | 'lightgrey'
    | 'grey'
  className?: string
}

const DotsLoader: FC<DotsLoaderProps> = ({ color, className }) => {
  const rootClasses = [classes.dotsLoader]
  if (color) rootClasses.push(classes[`dotsLoader_${color}`])
  if (className) rootClasses.push(className)

  return <span className={rootClasses.join(' ')}></span>
}

export default DotsLoader
