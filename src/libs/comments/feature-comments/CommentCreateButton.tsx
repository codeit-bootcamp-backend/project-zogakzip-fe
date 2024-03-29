'use client'

import Button from '@libs/shared/button/Button'
import FormModal from '@libs/shared/modal/FormModal'
import useModal from '@libs/shared/modal/useModal'
import CommentForm from './CommentForm'
import { CommentFormInput, CommentType } from '@services/api/types'
import useConfirmModal from '@libs/shared/modal/useConfirmModal'
import postComment from '../data-access-comments/postComment'
import { useRouter } from 'next/navigation'
import useUpdateQueryURL from '@libs/shared/util-hook/useUpdateQueryURL'
import { COMMENTS_PAGE_SIZE } from '@libs/shared/pagination/constants'

type CommentCreateButtonProps = {
  postId: number
  totalItemCount: number
  onSuccessCreate?: (data: CommentType) => void
}

const CommentCreateButton = ({ postId, totalItemCount, onSuccessCreate }: CommentCreateButtonProps) => {
  const { openModal, closeModal, modalRef } = useModal()
  const { renderConfirmModal, openConfirmModal } = useConfirmModal()

  const router = useRouter()
  const { updateQueryURL } = useUpdateQueryURL()

  const handleCreateComment = async (data: CommentFormInput) => {
    try {
      const response = await postComment(postId, data)
      router.push(updateQueryURL({ page: Math.ceil((totalItemCount + 1) / COMMENTS_PAGE_SIZE) }), { scroll: false })
      if (onSuccessCreate) onSuccessCreate(response)
      closeModal()
      openConfirmModal({
        title: '댓글 등록 성공',
        description: '댓글이 성공적으로 등록되었습니다.',
      })
    } catch (error) {
      openConfirmModal({
        title: '댓글 등록 실패',
        description: '댓글 등록에 실패했습니다.',
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
