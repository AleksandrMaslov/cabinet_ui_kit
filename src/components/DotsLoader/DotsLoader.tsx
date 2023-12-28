import { FC } from 'react'

import classes from './DotsLoader.module.css'

interface DotsLoaderProps {
  className?: string
}

const DotsLoader: FC<DotsLoaderProps> = ({ className }) => {
  const rootClasses = [classes.dotsLoader]
  if (className) rootClasses.push(className)

  return <span className={rootClasses.join(' ')}></span>
}

export default DotsLoader
