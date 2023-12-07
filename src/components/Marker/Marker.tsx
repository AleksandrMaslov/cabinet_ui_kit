import { FC } from 'react'

import classes from './Marker.module.css'

interface MarkerProps {
  size?: string
  tooltip?: string
  coords?: [string, string]
  className?: string
}

const Marker: FC<MarkerProps> = ({
  tooltip,
  className,
  coords,
  size = '3rem',
}) => {
  const rootClasses = [classes.marker]
  if (tooltip) rootClasses.push(classes.marker_tooltiped)
  if (className) rootClasses.push(className)

  let left, top
  if (coords) {
    rootClasses.push(classes.marker_positioned)
    left = coords[0]
    top = coords[1]
  }

  return (
    <div
      className={rootClasses.join(' ')}
      style={{ height: size, width: size, left, top }}
    >
      <span className={classes.tooltip}>{tooltip}</span>
    </div>
  )
}

export default Marker
