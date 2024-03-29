'use client'

import AuthFormContent from '@libs/shared/form-field/AuthFormContent/AuthFormContent'
import VerifyPasswordPageLayout from '@libs/shared/layout/VerifyPasswordPageLayout'
import { GroupVerificationFormInput, PostsSearchParams } from '@services/api/types'
import { FormProvider, useForm } from 'react-hook-form'
import postVerifyGroupPassword from '../data-access-groups/postVerifyGroupPassword'
import { useState } from 'react'
import useConfirmModal from '@libs/shared/modal/useConfirmModal'
import PrivateGroupVerifiedPage from './PrivateGroupVerifiedPage'

type PrivateGroupVerificationProps = {
  groupId: number
  searchParams: PostsSearchParams
}

const PrivateGroupVerification = ({ groupId, searchParams }: PrivateGroupVerificationProps) => {
  const methods = useForm<GroupVerificationFormInput>()
  const { handleSubmit } = methods
  const { openConfirmModal, renderConfirmModal } = useConfirmModal()

  const [isVerified, setIsVerified] = useState(false)

  const handleVerifyGroupPassword = async (data: GroupVerificationFormInput) => {
    try {
      await postVerifyGroupPassword(groupId, data)
      setIsVerified(true)
    }
    catch (error) {
      openConfirmModal({
        title: '비공개 그룹 접근 실패',
        description: '비밀번호가 일치하지 않습니다.',
      })
    }
  }

  // 참고: 인증 전
  if (!isVerified)
    return (
      <>
        <VerifyPasswordPageLayout
          title='비공개 그룹'
          description='비공개 그룹에 접근하기 위해 권한 확인이 필요합니다.'
          formContent={(
            <FormProvider {...methods}>
              <form onSubmit={handleSubmit(handleVerifyGroupPassword)}>
                <AuthFormContent
                  label='비밀번호 입력'
                  buttonText='제출하기'
                  placeholder='그룹 비밀번호를 입력해 주세요'
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
    <PrivateGroupVerifiedPage
      groupId={groupId}
      searchParams={searchParams}
    />
  )
}

export default PrivateGroupVerification
