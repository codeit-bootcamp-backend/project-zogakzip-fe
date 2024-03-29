'use client'

import { PostVerificationFormInput } from '@services/api/types'
import { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import postVerifyPostPassword from '../data-access-posts/postVerifyPasswordPost'
import VerifyPasswordPageLayout from '@libs/shared/layout/VerifyPasswordPageLayout'
import AuthFormContent from '@libs/shared/form-field/AuthFormContent/AuthFormContent'
import useConfirmModal from '@libs/shared/modal/useConfirmModal'
import PrivatePostVerifiedPage from './PrivatePostVerifiedPage'

type PrivatePostVerificationProps = {
  postId: number
  page: number
}

const PrivatePostVerification = ({ postId, page }: PrivatePostVerificationProps) => {
  const methods = useForm<PostVerificationFormInput>()
  const { handleSubmit } = methods
  const { openConfirmModal, renderConfirmModal } = useConfirmModal()

  const [isVerified, setIsVerified] = useState(false)

  const handleVerifyPostPassword = async (data: PostVerificationFormInput) => {
    try {
      await postVerifyPostPassword(postId, data)
      setIsVerified(true)
    }
    catch (error) {
      openConfirmModal({
        title: '비공개 추억 접근 실패',
        description: '비밀번호가 일치하지 않습니다.',
      })
    }
  }

  // 참고: 인증 전
  if (!isVerified)
    return (
      <>
        <VerifyPasswordPageLayout
          title='비공개 추억'
          description='비공개 추억에 접근하기 위해 권한 확인이 필요합니다.'
          formContent={(
            <FormProvider {...methods}>
              <form onSubmit={handleSubmit(handleVerifyPostPassword)}>
                <AuthFormContent
                  label='비밀번호 입력'
                  buttonText='제출하기'
                  placeholder='추억 비밀번호를 입력해 주세요'
                />
              </form>
            </FormProvider>
          )}
        />
        {renderConfirmModal()}
      </>
    )

  // 참고: 인증 후
  return (
    <PrivatePostVerifiedPage
      postId={postId}
      page={page}
    />
  )
}

export default PrivatePostVerification
