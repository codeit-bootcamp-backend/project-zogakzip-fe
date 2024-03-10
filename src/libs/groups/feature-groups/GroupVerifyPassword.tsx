'use client'

import AuthFormContent from '@libs/shared/form-field/AuthFormContent/AuthFormContent'
import VerifyPasswordPageLayout from '@libs/shared/layout/VerifyPasswordPageLayout'
import { GroupVerifyPasswordFormInput, PostsSearchParams, SortByPosts } from '@services/api/types'
import { FormProvider, useForm } from 'react-hook-form'
import postVerifyPasswordGroup from '../data-access-groups/postVerifyPasswordGroup'
import { useState } from 'react'
import PageLayout from '@libs/shared/layout/PageLayout'
import Divider from '@libs/shared/layout/Divider'
import SectionLayout from '@libs/shared/layout/SectionLayout'
import PostCreateButton from '@libs/posts/feature-posts/PostCreateButton'
import Filters from '@libs/shared/filters/Filters'
import { SORT_BY_POSTS_FILTERS } from '@libs/shared/dropdown/constants'
import GroupDetailClient from './GroupDetailClient'
import PostsListClient from '@libs/posts/feature-posts/PostsListClient'
import useModal from '@libs/shared/modal/useModal'
import ConfirmModal from '@libs/shared/modal/ConfirmModal'

type GroupVerifyPasswordProps = {
  groupId: number
  sortBy: SortByPosts
  searchParams: PostsSearchParams
}

const GroupVerifyPassword = ({ groupId, sortBy, searchParams }: GroupVerifyPasswordProps) => {
  const methods = useForm<GroupVerifyPasswordFormInput>()
  const { handleSubmit } = methods

  const [isVerified, setIsVerified] = useState(false)
  const errorModal = useModal()

  const handleVerifyPasswordGroup = async (data: GroupVerifyPasswordFormInput) => {
    try {
      await postVerifyPasswordGroup(groupId, data)
      setIsVerified(true)
    }
    catch (error) {
      errorModal.openModal()
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
              <form onSubmit={handleSubmit(handleVerifyPasswordGroup)}>
                <AuthFormContent
                  label='비밀번호 입력'
                  buttonText='제출하기'
                  placeholder='그룹 비밀번호를 입력해 주세요'
                />
              </form>
            </FormProvider>
          )}
        />
        <ConfirmModal
          title='비공개 그룹 접근 실패'
          description='비밀번호가 일치하지 않습니다'
          onClose={errorModal.closeModal}
          ref={errorModal.modalRef}
        />
      </>
    )

  // 참고: 인증 후
  return (
    <PageLayout paddingBlock='40px 120px'>
      <GroupDetailClient groupId={groupId} />
      <Divider marginTop='120px' marginBottom='120px' color='gray' />
      <SectionLayout
        title='추억 목록'
        headerButton={(
          <PostCreateButton groupId={groupId} />
        )}
        content={(
          <>
            <Filters
              placeholder='태그 혹은 제목을 입력해 주세요'
              filters={SORT_BY_POSTS_FILTERS}
              currentData={sortBy}
            />
            <PostsListClient
              groupId={groupId}
              searchParams={searchParams}
            />
          </>
        )}
      />
    </PageLayout>
  )
}

export default GroupVerifyPassword
