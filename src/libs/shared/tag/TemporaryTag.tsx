'use client'

import classNames from 'classnames/bind'
import styles from './TemporaryTag.module.scss'
import Icon from '../icon/Icon'

const cx = classNames.bind(styles)

type TemporaryTagProps = {
  tag: string
  onRemove: (tag: string) => void
}

const TemporaryTag = ({ tag, onRemove }: TemporaryTagProps) => {
  return (
    <div className={cx('container')}>
      <span className={cx('text')}>
        {`#${tag}`}
      </span>
      <button
        type='button'
        onClick={(e) => { e.preventDefault(); onRemove(tag) }}
        className={cx('iconWrapper')}
        tabIndex={-1}
      >
        <Icon
          name='cancel-gray'
          width={16}
          height={16}
          alt='태그 취소 버튼'
        />
      </button>
    </div>
  )
}

export default TemporaryTag
