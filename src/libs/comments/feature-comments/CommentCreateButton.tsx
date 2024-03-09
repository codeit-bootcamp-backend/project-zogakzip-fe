'use client'

import Button from '@libs/shared/button/Button'
import FormModal from '@libs/shared/modal/FormModal'
import useModal from '@libs/shared/modal/useModal'
import CommentForm from './CommentForm'
import { CommentFormInput } from '@services/api/types'

type CommentCreateButtonProps = {
  postId: number
}

const CommentCreateButton = ({ postId }: CommentCreateButtonProps) => {
  const { openModal, closeModal, modalRef } = useModal()

  const handleCreateComment = (data: CommentFormInput) => {
    console.log(`추억 ${postId}번에 댓글 달기`)
    console.log(data)
    closeModal()
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
    </>
  )
}

export default CommentCreateButton
