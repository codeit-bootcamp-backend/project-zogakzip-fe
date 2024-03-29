'use client'

import Button from '@libs/shared/button/Button'
import useModal from '@libs/shared/modal/useModal'
import PostCreateModal from './PostCreateModal'
import { PostCreateFormInput } from '@services/api/types'
import postPost from '../data-access-posts/postPost'
import useConfirmModal from '@libs/shared/modal/useConfirmModal'

type PostCreateButtonProps = {
  groupId: number
  size?: 'medium' | 'large'
}

const PostCreateButton = ({ groupId, size = 'medium' }: PostCreateButtonProps) => {
  const postCreateFormModal = useModal()
  const authCheckFormModal = useModal()
  const { renderConfirmModal, openConfirmModal } = useConfirmModal()

  const handleCreatePost = async (data: PostCreateFormInput) => {
    try {
      await postPost(groupId, data)
      postCreateFormModal.closeModal()
      authCheckFormModal.closeModal()
      openConfirmModal({
        title: '추억 올리기 성공',
        description: '추억이 성공적으로 등록되었습니다.',
      })
    } catch (error) {
      openConfirmModal({
        title: '추억 올리기 실패',
        description: '추억 등록에 실패했습니다.',
      })
    }
  }

  return (
    <>
      <Button size={size} onClick={() => postCreateFormModal.openModal()}>추억 올리기</Button>
      <PostCreateModal
        postCreateFormModal={postCreateFormModal}
        authCheckFormModal={authCheckFormModal}
        onSubmit={handleCreatePost}
      />
      {renderConfirmModal()}
    </>
  )
}

export default PostCreateButton
