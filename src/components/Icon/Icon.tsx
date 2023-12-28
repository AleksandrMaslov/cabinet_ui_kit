import { FC, MouseEventHandler } from 'react'

import icons from '../../icons'

import classes from './Icon.module.css'

interface IconProps {
  icon:
    | 'appliances'
    | 'area'
    | 'arrow'
    | 'baby'
    | 'briefcase'
    | 'camera'
    | 'chat'
    | 'coffee'
    | 'cross'
    | 'crossedeye'
    | 'eye'
    | 'location'
    | 'lock'
    | 'mail'
    | 'meeting'
    | 'printer'
    | 'projector'
    | 'square'
    | 'telegram'
    | 'trash'
    | 'whatsapp'
    | 'wifi'
    | 'workspace'
    | 'yoga'
  color?:
    | 'green'
    | 'orange'
    | 'lightgreen'
    | 'blue'
    | 'milk'
    | 'white'
    | 'lightgrey'
    | 'grey'
  size?: string
  href?: string
  target?: '_blank' | '_self' | '_parent' | '_top'
  onClick?: MouseEventHandler<HTMLAnchorElement>
  className?: string
}

const Icon: FC<IconProps> = ({
  icon,
  color,
  size = '10rem',
  className,
  ...restProps
}) => {
  const rootClasses = [classes.icon]
  if (color) rootClasses.push(classes[`icon_${color}`])

  const { href, onClick } = restProps
  if (href || onClick) rootClasses.push(classes.icon_pointer)

  if (className) rootClasses.push(className)

  const { [icon]: Icon } = icons

  return (
    <a
      className={rootClasses.join(' ')}
      style={{ height: size, width: size }}
      {...restProps}
    >
      <Icon className={classes.svg} />
    </a>
  )
}

export default Icon
