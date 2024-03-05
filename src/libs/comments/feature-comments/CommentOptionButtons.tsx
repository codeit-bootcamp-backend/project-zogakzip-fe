'use client'

import classNames from 'classnames/bind'
import styles from './CommentOptionButtons.module.scss'
import { CommentType } from '@services/api/types'
import Icon from '@libs/shared/icon/Icon'

const cx = classNames.bind(styles)

type CommentOptionButtonsProps = {
  comment: CommentType
}

const CommentOptionButtons = ({ comment }: CommentOptionButtonsProps) => {
  const handleEditComment = () => {
    console.log(`comment ${comment.id} is edited`)
  }

  const handleDeleteComment = () => {
    console.log(`comment ${comment.id} is deleted`)
  }
  return (
    <div className={cx('container')}>
      <button onClick={handleEditComment}>
        <Icon name='edit' width={20} height={20} alt='수정 아이콘' />
      </button>
      <button onClick={handleDeleteComment}>
        <Icon name='delete' width={20} height={20} alt='삭제 아이콘' />
      </button>
    </div>
  )
}

export default CommentOptionButtons
