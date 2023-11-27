import { FC } from 'react'

import classes from './Marker.module.css'

interface MarkerProps {
  size?: string
  tooltip?: string
  className?: string
}

const Marker: FC<MarkerProps> = ({ tooltip, className, size = '30px' }) => {
  const rootClasses = [classes.marker]
  if (tooltip) rootClasses.push(classes[`marker_tooltiped`])
  if (className) rootClasses.push(className)

  return (
    <div
      className={rootClasses.join(' ')}
      style={{ height: size, width: size }}
    >
      <span className={classes.tooltip}>{tooltip}</span>
    </div>
  )
}

export default Marker
