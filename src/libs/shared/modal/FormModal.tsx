import classNames from 'classnames/bind'
import styles from './FormModal.module.scss'
import { forwardRef } from 'react'
import Icon from '../icon/Icon'

const cx = classNames.bind(styles)

type FormModalProps = {
  title: string
  titleMarginBottom?: string
  paddingInline?: string
  content?: React.ReactNode
  onClose: () => void
} & Omit<React.ComponentPropsWithoutRef<'dialog'>, 'content'>

const FormModal = forwardRef<HTMLDialogElement, FormModalProps>(({
  title,
  titleMarginBottom = '60px',
  paddingInline,
  onClose,
  content,
  ...restProps
}, ref) => {
  return (
    <dialog
      ref={ref}
      onKeyDown={(e) => { if (e.key === 'Escape') onClose() }}
      className={cx('dialog')}
      style={{ paddingInline }}
      {...restProps}
    >
      <button
        type='button'
        className={cx('closeButton')}
        onClick={() => { onClose() }}
      >
        <Icon name='cancel' width={30} height={30} alt='닫기 아이콘' />
      </button>
      <div className={cx('title')} style={{ marginBottom: titleMarginBottom }}>{title}</div>
      {content}
    </dialog>
  )
})

FormModal.displayName = 'FormModal'

export default FormModal
