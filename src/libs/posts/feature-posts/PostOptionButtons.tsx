'use client'

import OptionButtonsLayout from '@libs/shared/layout/OptionButtonsLayout'
import FormModal from '@libs/shared/modal/FormModal'
import useModal from '@libs/shared/modal/useModal'
import { PostDeleteFormInput, PostDetail, PostEditFormInput } from '@services/api/types'
import PostDeleteForm from './PostDeleteForm'
import PostEditForm from './PostEditForm'
import useConfirmModal from '@libs/shared/modal/useConfirmModal'
import putPost from '../data-access-posts/putPost'
import deletePost from '../data-access-posts/deletePost'
import { useRouter } from 'next/navigation'

type PostOptionButtonsProps = {
  postId: number
  postDetail: PostDetail
  onSuccessEdit?: (data: PostDetail) => void
}

const PostOptionButtons = ({ postId, postDetail, onSuccessEdit }: PostOptionButtonsProps) => {
  const postEditFormModal = useModal()
  const postDeleteFormModal = useModal()
  const { renderConfirmModal, openConfirmModal } = useConfirmModal()
  const router = useRouter()

  const handleEditPost = async (data: PostEditFormInput) => {
    try {
      const response = await putPost(postId, data)
      if (onSuccessEdit) onSuccessEdit(response)
      postEditFormModal.closeModal()
      openConfirmModal({
        title: '추억 수정 성공',
        description: '추억 정보 수정에 성공했습니다.',
      })
    } catch (error) {
      openConfirmModal({
        title: '추억 수정 실패',
        description: '추억 수정에 실패했습니다.',
      })
    }
  }

  const handleDeletePost = async (data: PostDeleteFormInput) => {
    try {
      await deletePost(postId, data)
      postDeleteFormModal.closeModal()
      openConfirmModal({
        title: '추억 삭제 성공',
        description: '추억 삭제에 성공했습니다. 그룹 상세 페이지로 이동합니다.',
        onClose: () => {
          router.push(`/groups/${postDetail.groupId}`)
          router.refresh()
        },
      })
    } catch (error) {
      openConfirmModal({
        title: '추억 삭제 실패',
        description: '추억 삭제에 실패했습니다.',
      })
    }
  }

  return (
    <>
      <OptionButtonsLayout
        editText='추억 수정하기'
        deleteText='추억 삭제하기'
        onClickEdit={() => { postEditFormModal.openModal() }}
        onClickDelete={() => { postDeleteFormModal.openModal() }}
      />
      <FormModal
        title='추억 수정'
        paddingInline='80px'
        onClose={postEditFormModal.closeModal}
        ref={postEditFormModal.modalRef}
        content={(
          <PostEditForm
            defaultValues={{
              nickname: postDetail.nickname,
              title: postDetail.title,
              content: postDetail.content,
              tags: postDetail.tags,
              location: postDetail.location!,
              moment: postDetail.moment!,
              isPublic: postDetail.isPublic,
              imageUrl: postDetail.imageUrl,
            }}
            onSubmit={handleEditPost}
          />
        )}
      />
      <FormModal
        title='추억 삭제'
        titleMarginBottom='40px'
        onClose={postDeleteFormModal.closeModal}
        ref={postDeleteFormModal.modalRef}
        content={(
          <PostDeleteForm
            onSubmit={handleDeletePost}
          />
        )}
      />
      {renderConfirmModal()}
    </>
  )
}

export default PostOptionButtons
