'use client'

import PageLayout from '@libs/shared/layout/PageLayout'
import Divider from '@libs/shared/layout/Divider'
import SectionLayout from '@libs/shared/layout/SectionLayout'
import PostCreateButton from '@libs/posts/feature-posts/PostCreateButton'
import Filters from '@libs/shared/filters/Filters'
import { PostsSearchParams } from '@services/api/types'
import { SORT_BY_POSTS_FILTERS } from '@libs/shared/dropdown/constants'
import useAsync from '@libs/shared/util-hook/useAsync'
import getPosts from '@libs/posts/data-access-posts/getPosts'
import getGroupDetail from '../data-access-groups/getGroupDetail'
import GroupOptionButtons from './GroupOptionButtons'
import LikeButton from '@libs/shared/button/LikeButton'
import BadgeCarousel from '../ui-groups/BadgeCarousel'
import GroupDetailLayout from '../ui-groups/GroupDetailLayout'
import PostsList from '@libs/posts/feature-posts/PostsList'

type PrivateGroupVerifiedPageProps = {
  groupId: number
  searchParams: PostsSearchParams
}

const PrivateGroupVerifiedPage = ({ groupId, searchParams }: PrivateGroupVerifiedPageProps) => {
  const { data: groupDetail, isLoading: isGroupDetailLoading, error: isGroupDetailError } = useAsync(() => getGroupDetail(groupId), [groupId])
  const { data: postsPagination } = useAsync(() => getPosts(groupId, searchParams), [groupId, searchParams])

  if (isGroupDetailLoading) return <div>Loading...</div>
  if (isGroupDetailError) return <div>Error</div>
  if (!groupDetail) return <div>group Detail not found</div>

  return (
    <PageLayout paddingBlock='40px 120px'>
      <GroupDetailLayout
        groupDetail={groupDetail}
        optionButtons={<GroupOptionButtons groupId={groupId} groupDetail={groupDetail} />}
        likeButton={<LikeButton type='group' id={groupId} />}
        // badgeCarousel={<BadgeCarousel badges={groupDetail.badges} />}
        badgeCarousel={<BadgeCarousel badges={[]} />}
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
              // TODO-3: 가능하다면 keepPreviousData
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
