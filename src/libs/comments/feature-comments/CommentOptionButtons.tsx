'use client'

import classNames from 'classnames/bind'
import styles from './CommentOptionButtons.module.scss'
import { CommentDeleteFormInput, CommentFormInput, CommentType } from '@services/api/types'
import Icon from '@libs/shared/icon/Icon'
import useModal from '@libs/shared/modal/useModal'
import FormModal from '@libs/shared/modal/FormModal'
import CommentForm from './CommentForm'
import CommentDeleteForm from './CommentDeleteForm'
import useConfirmModal from '@libs/shared/modal/useConfirmModal'
import putComment from '../data-access-comments/putComment'
import deleteComment from '../data-access-comments/deleteComment'

const cx = classNames.bind(styles)

type CommentOptionButtonsProps = {
  comment: CommentType
}

const CommentOptionButtons = ({ comment }: CommentOptionButtonsProps) => {
  const commentEditFormModal = useModal()
  const commentDeleteFormModal = useModal()
  const { renderConfirmModal, openConfirmModal } = useConfirmModal()

  // TODO: PUT, DELETE 백엔드 개발 완료 시 점검 필요
  const handleEditComment = async (data: CommentFormInput) => {
    try {
      await putComment(comment.id, data)
      commentEditFormModal.closeModal()
      openConfirmModal({
        title: '댓글 수정 성공',
        description: '댓글 정보 수정에 성공했습니다.',
      })
    } catch (error) {
      openConfirmModal({
        title: '댓글 수정 실패',
        description: (error instanceof Error) ? error.message : '알 수 없는 오류가 발생했습니다.',
      })
    }
  }

  const handleDeleteComment = async (data: CommentDeleteFormInput) => {
    try {
      await deleteComment(comment.id, data)
      commentDeleteFormModal.closeModal()
      openConfirmModal({
        title: '댓글 삭제 성공',
        description: '댓글 삭제에 성공했습니다.',
      })
    } catch (error) {
      openConfirmModal({
        title: '댓글 삭제 실패',
        description: (error instanceof Error) ? error.message : '알 수 없는 오류가 발생했습니다.',
      })
    }
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
      {renderConfirmModal()}
    </>
  )
}

export default CommentOptionButtons
