'use client'

import classNames from 'classnames/bind'
import styles from './OptionButtonsLayout.module.scss'

const cx = classNames.bind(styles)

type OptionButtonsLayoutProps = {
  editText: string
  deleteText: string
  onClickEdit: () => void
  onClickDelete: () => void
}

const OptionButtonsLayout = ({ editText, deleteText, onClickEdit, onClickDelete }: OptionButtonsLayoutProps) => {
  return (
    <div className={cx('container')}>
      <button onClick={onClickEdit} className={cx('edit')}>{editText}</button>
      <button onClick={onClickDelete} className={cx('delete')}>{deleteText}</button>
    </div>
  )
}

export default OptionButtonsLayout
