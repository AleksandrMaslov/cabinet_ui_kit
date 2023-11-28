import { FC, MouseEventHandler, ReactNode } from 'react'
import ReactDOM from 'react-dom'

import classes from './Modal.module.css'

interface ModalProps {
  title: string
  setVisible: (value: boolean) => void
  children?: ReactNode
  width?: string
  className?: string
}

const portal = document.getElementById('portal') as HTMLDivElement

const Modal: FC<ModalProps> = ({
  title,
  setVisible,
  className,
  children,
  width,
}) => {
  const modalClasses = [classes.modal]
  if (className) modalClasses.push(className)

  const coverClickHandler = () => setVisible(false)

  const modalClickHandler: MouseEventHandler<HTMLDivElement> = e =>
    e.stopPropagation()

  const component = (
    <section className={classes.cover} onClick={coverClickHandler}>
      <div
        className={modalClasses.join(' ')}
        onClick={modalClickHandler}
        style={{ width }}
      >
        <header className={classes.title}>{title}</header>

        <main className={classes.content}>{children}</main>
      </div>
    </section>
  )

  if (portal) ReactDOM.createPortal(component, portal)
  return component
}

export default Modal
