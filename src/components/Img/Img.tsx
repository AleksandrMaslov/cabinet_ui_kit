import { FC, useEffect, useState } from 'react'

import classes from './Img.module.css'

interface ImgProps {
  src?: string
  className?: string
}

const Img: FC<ImgProps> = ({ src, className }) => {
  const [imgSrc, setImgSrc] = useState<string | undefined>(undefined)

  const rootClasses = [classes.img]
  if (!imgSrc) rootClasses.push(classes.img_loading)
  if (className) rootClasses.push(className)

  useEffect(() => {
    if (!src) return

    const img = new Image()
    img.src = src

    img.onload = () => setImgSrc(src)
  }, [])

  return <img src={imgSrc} className={rootClasses.join(' ')} />
}

export default Img
