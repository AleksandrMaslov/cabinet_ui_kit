import { FC, ReactNode } from 'react'
import ReactDOM from 'react-dom'

import Icon from '../Icon/Icon'

import classes from './Modal.module.css'

interface ModalProps {
  setVisible: (value: boolean) => void
  children?: ReactNode
  className?: string
}

const portal = document.getElementById('portal') as HTMLDivElement

const Modal: FC<ModalProps> = ({ setVisible, className, children }) => {
  const modalClasses = [classes.modal]
  if (className) modalClasses.push(className)

  const closeHandler = () => setVisible(false)

  const component = (
    <div className={classes.cover} onClick={closeHandler}>
      <div
        className={modalClasses.join(' ')}
        onClick={e => e.stopPropagation()}
      >
        <Icon className={classes.close} icon="cross" onClick={closeHandler} />

        <div className={classes.container}>{children}</div>
      </div>
    </div>
  )

  if (portal) return ReactDOM.createPortal(component, portal)
  return component
}

export default Modal
