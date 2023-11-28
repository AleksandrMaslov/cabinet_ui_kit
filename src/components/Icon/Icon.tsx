import { FC } from 'react'

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
  className?: string
}

const Icon: FC<IconProps> = ({ icon, color, size = '100px', className }) => {
  const rootClasses = [classes.icon]
  if (color) rootClasses.push(`icon_${color}`)
  if (className) rootClasses.push(className)

  const { [icon]: Icon } = icons

  return (
    <div
      className={rootClasses.join(' ')}
      style={{ height: size, width: size }}
    >
      <Icon className={classes.svg} />
    </div>
  )
}

export default Icon
