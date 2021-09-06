import { createPortal } from 'react-dom'

import classes from './Modal.module.scss'

const Backdrop = props => {
  return <div className={classes.backdrop} onClick={props.onClose}/>
}

const ModalOverlay = props => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  )
}

const overlays = document.getElementById('overlays')

const Modal = props => {
  return (
    <>
      {createPortal(<Backdrop onClose={props.onClose} />, overlays)}
      {createPortal(<ModalOverlay >{props.children}</ModalOverlay>, overlays)}
    </>
  )
}

export default Modal
