'use client'

import Button from '@libs/shared/button/Button'
import useModal from '@libs/shared/modal/useModal'
import PostCreateModal from './PostCreateModal'
import { PostCreateFormInput } from '@services/api/types'

type PostCreateButtonProps = {
  groupId: number
}

const PostCreateButton = ({ groupId }: PostCreateButtonProps) => {
  const postCreateFormModal = useModal()
  const authCheckFormModal = useModal()

  const handleCreatePost = (data: PostCreateFormInput) => {
    console.log(`group ${groupId}번 create post`)
    console.log(data)
    postCreateFormModal.closeModal()
    authCheckFormModal.closeModal()
  }

  return (
    <>
      <Button size="medium" onClick={() => postCreateFormModal.openModal()}>추억 올리기</Button>
      <PostCreateModal
        postCreateFormModal={postCreateFormModal}
        authCheckFormModal={authCheckFormModal}
        onSubmit={handleCreatePost}
      />
    </>
  )
}

export default PostCreateButton
