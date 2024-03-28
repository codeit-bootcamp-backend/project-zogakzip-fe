'use client'

import PageLayout from '@libs/shared/layout/PageLayout'
import Divider from '@libs/shared/layout/Divider'
import SectionLayout from '@libs/shared/layout/SectionLayout'
import PostCreateButton from '@libs/posts/feature-posts/PostCreateButton'
import Filters from '@libs/shared/filters/Filters'
import { GroupDetail, PostsSearchParams } from '@services/api/types'
import { SORT_BY_POSTS_FILTERS } from '@libs/shared/dropdown/constants'
import useAsync from '@libs/shared/util-hook/useAsync'
import getPosts from '@libs/posts/data-access-posts/getPosts'
import getGroupDetail from '../data-access-groups/getGroupDetail'
import GroupOptionButtons from './GroupOptionButtons'
import BadgeCarousel from '../ui-groups/BadgeCarousel'
import GroupDetailLayout from '../ui-groups/GroupDetailLayout'
import PostsList from '@libs/posts/feature-posts/PostsList'
import { useEffect, useState } from 'react'

type PrivateGroupVerifiedPageProps = {
  groupId: number
  searchParams: PostsSearchParams
}

const PrivateGroupVerifiedPage = ({ groupId, searchParams }: PrivateGroupVerifiedPageProps) => {
  const { data: groupDetailFetchData, isLoading } = useAsync(() => getGroupDetail(groupId), [groupId])
  const { data: postsPagination } = useAsync(() => getPosts(groupId, searchParams), [groupId, searchParams])
  const [groupDetail, setGroupDetail] = useState<GroupDetail>()

  useEffect(() => {
    if (groupDetailFetchData) setGroupDetail(groupDetailFetchData)
  }, [groupDetailFetchData])

  if (isLoading || !groupDetail) return null
  return (
    <PageLayout paddingBlock='40px 120px'>
      <GroupDetailLayout
        groupDetail={groupDetail}
        optionButtons={(
          <GroupOptionButtons
            groupId={groupId}
            groupDetail={groupDetail}
            // 참고: 그룹 정보 수정 성공 시, groupDetail을 업데이트하기 위함
            // posts의 경우에는 searchParams가 객체로 선언되며 내려와 변경되는 것으로 인식되기 때문에 getPosts에서 새로 fetch함
            onSuccessEdit={(response) => {
              setGroupDetail(response)
            }}
          />
        )}
        badgeCarousel={<BadgeCarousel badges={groupDetail.badges} />}
      />
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
              currentData={searchParams.sortBy}
            />
            {postsPagination && (
              <PostsList
                searchParams={searchParams}
                initialPosts={postsPagination.data}
                initialPage={postsPagination.currentPage}
                initialHasNext={postsPagination.currentPage < postsPagination.totalPages}
                groupId={groupId}
              />
            )}
          </>
        )}
      />
    </PageLayout>
  )
}

export default PrivateGroupVerifiedPage
