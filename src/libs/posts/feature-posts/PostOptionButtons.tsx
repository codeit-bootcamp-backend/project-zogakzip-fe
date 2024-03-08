'use client'

import OptionButtonsLayout from '@libs/shared/layout/OptionButtonsLayout'
import FormModal from '@libs/shared/modal/FormModal'
import useModal from '@libs/shared/modal/useModal'
import { PostDeleteFormInput, PostDetail, PostEditFormInput } from '@services/api/types'
import PostDeleteForm from './PostDeleteForm'
import PostEditForm from './PostEditForm'

type PostOptionButtonsProps = {
  postId: number
  postDetail: PostDetail
}

const PostOptionButtons = ({ postId, postDetail }: PostOptionButtonsProps) => {
  const postEditFormModal = useModal()
  const postDeleteFormModal = useModal()

  const handleEditPost = (data: PostEditFormInput) => {
    console.log(`edit post ${postId}번`)
    console.log(data)
    postEditFormModal.closeModal()
  }

  const handleDeletePost = (data: PostDeleteFormInput) => {
    console.log(`delete post ${postId}번`)
    console.log(data)
    postDeleteFormModal.closeModal()
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
            }}
            defaultImageUrl={postDetail.imageUrl ?? undefined}
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
    </>
  )
}

export default PostOptionButtons
