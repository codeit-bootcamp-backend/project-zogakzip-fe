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
import { useRouter } from 'next/navigation'
import useUpdateQueryURL from '@libs/shared/util-hook/useUpdateQueryURL'

const cx = classNames.bind(styles)

type CommentOptionButtonsProps = {
  comment: CommentType
  onSuccessEdit?: (data: CommentType) => void
  onSuccessDelete?: (commentId: number) => void
}

const CommentOptionButtons = ({ comment, onSuccessEdit, onSuccessDelete }: CommentOptionButtonsProps) => {
  const commentEditFormModal = useModal()
  const commentDeleteFormModal = useModal()
  const { renderConfirmModal, openConfirmModal } = useConfirmModal()

  const router = useRouter()
  const { updateQueryURL } = useUpdateQueryURL()

  const handleEditComment = async (data: CommentFormInput) => {
    try {
      const response = await putComment(comment.id, data)
      if (onSuccessEdit) onSuccessEdit(response)
      commentEditFormModal.closeModal()
      openConfirmModal({
        title: '댓글 수정 성공',
        description: '댓글 정보 수정에 성공했습니다.',
      })
    } catch (error) {
      openConfirmModal({
        title: '댓글 수정 실패',
        description: '댓글 수정에 실패했습니다.',
      })
    }
  }

  const handleDeleteComment = async (data: CommentDeleteFormInput) => {
    try {
      await deleteComment(comment.id, data)
      router.push(updateQueryURL({ page: 1 }), { scroll: false })
      if (onSuccessDelete) onSuccessDelete(comment.id)
      commentDeleteFormModal.closeModal()
      openConfirmModal({
        title: '댓글 삭제 성공',
        description: '댓글 삭제에 성공했습니다.',
      })
    } catch (error) {
      openConfirmModal({
        title: '댓글 삭제 실패',
        description: '댓글 삭제에 실패했습니다.',
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
