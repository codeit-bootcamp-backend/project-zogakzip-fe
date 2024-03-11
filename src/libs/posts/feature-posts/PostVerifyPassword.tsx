'use client'

import useModal from '@libs/shared/modal/useModal'
import { PostVerifyPasswordFormInput } from '@services/api/types'
import { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import postVerifyPasswordPost from '../data-access-posts/postVerifyPasswordPost'
import VerifyPasswordPageLayout from '@libs/shared/layout/VerifyPasswordPageLayout'
import AuthFormContent from '@libs/shared/form-field/AuthFormContent/AuthFormContent'
import ConfirmModal from '@libs/shared/modal/ConfirmModal'
import PageLayout from '@libs/shared/layout/PageLayout'
import PostDetailClient from './PostDetailClient'
import CommentsClient from '@libs/comments/feature-comments/CommentsClient'

type PostVerifyPasswordProps = {
  postId: number
}

const PostVerifyPassword = ({ postId }: PostVerifyPasswordProps) => {
  const methods = useForm<PostVerifyPasswordFormInput>()
  const { handleSubmit } = methods

  const [isVerified, setIsVerified] = useState(false)
  const errorModal = useModal()

  const handleVerifyPasswordPost = async (data: PostVerifyPasswordFormInput) => {
    try {
      await postVerifyPasswordPost(postId, data)
      setIsVerified(true)
    }
    catch (error) {
      errorModal.openModal()
    }
  }

  if (!isVerified)
    return (
      <>
        <VerifyPasswordPageLayout
          title='비공개 추억'
          description='비공개 추억에 접근하기 위해 권한 확인이 필요합니다.'
          formContent={(
            <FormProvider {...methods}>
              <form onSubmit={handleSubmit(handleVerifyPasswordPost)}>
                <AuthFormContent
                  label='비밀번호 입력'
                  buttonText='제출하기'
                  placeholder='추억 비밀번호를 입력해 주세요'
                />
              </form>
            </FormProvider>
          )}
        />
        <ConfirmModal
          title='비공개 추억 접근 실패'
          description='비밀번호가 일치하지 않습니다'
          onClose={errorModal.closeModal}
          ref={errorModal.modalRef}
        />
      </>
    )

  return (
    <PageLayout paddingBlock='40px 120px'>
      <PostDetailClient postId={postId} />
      <CommentsClient postId={postId} />
    </PageLayout>
  )
}

export default PostVerifyPassword
