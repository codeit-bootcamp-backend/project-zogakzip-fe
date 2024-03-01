import classNames from 'classnames/bind'
import styles from './ConfirmModal.module.scss'
import { forwardRef } from 'react'
import Button from '../button/Button'

const cx = classNames.bind(styles)

type ConfirmModalProps = {
  title: string
  description: string
  onClose: () => void
} & React.ComponentPropsWithoutRef<'dialog'>

const ConfirmModal = forwardRef<HTMLDialogElement, ConfirmModalProps>(({ title, description, onClose, ...restProps }, ref) => {
  return (
    <dialog
      className={cx('dialog')}
      ref={ref}
      onKeyDown={(e) => { if (e.key === 'Escape') onClose() }}
      {...restProps}
    >
      <div className={cx('title')}>{title}</div>
      <div className={cx('description')}>{description}</div>
      <Button type='button' size='large' onClick={() => onClose()}>확인</Button>
    </dialog>
  )
})

ConfirmModal.displayName = 'ConfirmModal'

export default ConfirmModal
