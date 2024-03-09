'use client'

import classNames from 'classnames/bind'
import styles from './CommentOptionButtons.module.scss'
import { CommentDeleteFormInput, CommentFormInput, CommentType } from '@services/api/types'
import Icon from '@libs/shared/icon/Icon'
import useModal from '@libs/shared/modal/useModal'
import FormModal from '@libs/shared/modal/FormModal'
import CommentForm from './CommentForm'
import CommentDeleteForm from './CommentDeleteForm'

const cx = classNames.bind(styles)

type CommentOptionButtonsProps = {
  comment: CommentType
}

const CommentOptionButtons = ({ comment }: CommentOptionButtonsProps) => {
  const commentEditFormModal = useModal()
  const commentDeleteFormModal = useModal()

  const handleEditComment = (data: CommentFormInput) => {
    console.log(`edit post ${comment.id}번`)
    console.log(data)
    commentEditFormModal.closeModal()
  }

  const handleDeleteComment = (data: CommentDeleteFormInput) => {
    console.log(`delete post ${comment.id}번`)
    console.log(data)
    commentDeleteFormModal.closeModal()
  }

  return (
    <>
      <div className={cx('container')}>
        <button onClick={() => { commentEditFormModal.openModal() }}>
          <Icon name='edit' width={20} height={20} alt='수정 아이콘' />
        </button>
        <button onClick={() => { commentDeleteFormModal.openModal() }}>
          <Icon name='delete' width={20} height={20} alt='삭제 아이콘' />
        </button>
      </div>
      <FormModal
        title='댓글 수정'
        onClose={commentEditFormModal.closeModal}
        ref={commentEditFormModal.modalRef}
        content={(
          <CommentForm
            onSubmit={handleEditComment}
            defaultValues={{
              nickname: comment.nickname,
              content: comment.content,
            }}
          />
        )}
      />
      <FormModal
        title='댓글 삭제'
        titleMarginBottom='40px'
        onClose={commentDeleteFormModal.closeModal}
        ref={commentDeleteFormModal.modalRef}
        content={(
          <CommentDeleteForm
            onSubmit={handleDeleteComment}
          />
        )}
      />
    </>
  )
}

export default CommentOptionButtons
