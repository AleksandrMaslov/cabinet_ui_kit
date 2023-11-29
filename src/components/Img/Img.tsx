import { FC, useEffect, useState } from 'react'

import classes from './Img.module.css'

interface ImgProps {
  src?: string
  loader?: boolean
  className?: string
}

const Img: FC<ImgProps> = ({ src, className, loader = false }) => {
  const [imgSrc, setImgSrc] = useState<string | undefined>(
    loader ? undefined : src,
  )

  const rootClasses = [classes.img]
  if (loader && !imgSrc) rootClasses.push(classes.img_loading)
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
