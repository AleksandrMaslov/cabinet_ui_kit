import { FC, ReactNode } from 'react'

import classes from './Anchor.module.css'

interface AnchorProps {
  children: ReactNode
  href?: string
  lineColor?: 'white' | 'orange'
  underlined?: boolean
  className?: string
}

const Anchor: FC<AnchorProps> = ({
  children,
  className,
  lineColor,
  underlined = false,
  ...restProps
}) => {
  const rootClasses = [classes.anchor]
  if (underlined) rootClasses.push(classes.anchor_underlined)
  if (lineColor) rootClasses.push(classes[`anchor_${lineColor}`])
  if (className) rootClasses.push(className)

  return (
    <a {...restProps} className={rootClasses.join(' ')}>
      {children}
    </a>
  )
}

export default Anchor
