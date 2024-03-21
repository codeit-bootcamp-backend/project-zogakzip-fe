'use client'

import Button from '@libs/shared/button/Button'
import FormModal from '@libs/shared/modal/FormModal'
import useModal from '@libs/shared/modal/useModal'
import CommentForm from './CommentForm'
import { CommentFormInput } from '@services/api/types'
import useConfirmModal from '@libs/shared/modal/useConfirmModal'
import postComment from '../data-access-comments/postComment'

type CommentCreateButtonProps = {
  postId: number
}

const CommentCreateButton = ({ postId }: CommentCreateButtonProps) => {
  const { openModal, closeModal, modalRef } = useModal()
  const { renderConfirmModal, openConfirmModal } = useConfirmModal()

  const handleCreateComment = async (data: CommentFormInput) => {
    try {
      await postComment(postId, data)
      closeModal()
      openConfirmModal({
        title: '댓글 등록 성공',
        description: '댓글이 성공적으로 등록되었습니다.',
      })
    } catch (error) {
      openConfirmModal({
        title: '댓글 등록 실패',
        ...((error instanceof Error) && { description: error.message }),
      })
    }
  }

  return (
    <>
      <Button size='large' onClick={() => { openModal() }}>댓글 등록하기</Button>
      <FormModal
        title='댓글 등록'
        onClose={closeModal}
        ref={modalRef}
        content={<CommentForm onSubmit={handleCreateComment} />}
      />
      {renderConfirmModal()}
    </>
  )
}

export default CommentCreateButton
