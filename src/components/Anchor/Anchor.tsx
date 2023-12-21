import { FC, MouseEventHandler, ReactNode } from 'react'

import classes from './Anchor.module.css'

interface AnchorProps {
  children: ReactNode
  href?: string
  target?: '_blank' | '_self' | '_parent' | '_top'
  onClick?: MouseEventHandler<HTMLAnchorElement>
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
    <a className={rootClasses.join(' ')} {...restProps}>
      {children}
    </a>
  )
}

export default Anchor
