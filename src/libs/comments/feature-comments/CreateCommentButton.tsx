'use client'

import Button from '@libs/shared/button/Button'

type CreateCommentButtonProps = {
  postId: number
}

const CreateCommentButton = ({ postId }: CreateCommentButtonProps) => {
  const handleCreateComment = () => {
    console.log(`추억 ${postId}번에 댓글 달기`)
  }
  return (
    <Button size='large' onClick={handleCreateComment}>댓글 등록하기</Button>
  )
}

export default CreateCommentButton
