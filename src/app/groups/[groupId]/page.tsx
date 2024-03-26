import { META_GROUP_DETAIL } from '@app/_meta'
import { SortByPosts } from '@services/api/types'
import convertIdParamToNumber from '@libs/shared/util-util/convertIdParamToNumber'
import Divider from '@libs/shared/layout/Divider'
import SectionLayout from '@libs/shared/layout/SectionLayout'
import Filters from '@libs/shared/filters/Filters'
import { SORT_BY_POSTS_FILTERS } from '@libs/shared/dropdown/constants'
import PostsList from '@libs/posts/feature-posts/PostsList'
import PageLayout from '@libs/shared/layout/PageLayout'
import PostCreateButton from '@libs/posts/feature-posts/PostCreateButton'
import getIsPublicGroup from '@libs/groups/data-access-groups/getIsPublicGroup'
import PrivateGroupVerification from '@libs/groups/feature-groups/PrivateGroupVerification'
import getPosts from '@libs/posts/data-access-posts/getPosts'
import getGroupDetail from '@libs/groups/data-access-groups/getGroupDetail'
import GroupDetailLayout from '@libs/groups/ui-groups/GroupDetailLayout'
import GroupOptionButtons from '@libs/groups/feature-groups/GroupOptionButtons'
import BadgeCarousel from '@libs/groups/ui-groups/BadgeCarousel'

type GroupDetailPageProps = {
  params: { groupId: string }
  searchParams: Partial<{
    isPublic: string
    sortBy: string
    keyword: string
  }>
}

const GroupDetailPage = async ({ params, searchParams }: GroupDetailPageProps) => {
  const {
    sortBy: sortByParam,
    isPublic: isPublicParam,
    keyword = '',
  } = searchParams
  const sortBy = SortByPosts[sortByParam as keyof typeof SortByPosts] || SortByPosts.mostLiked
  const isPublic = !(isPublicParam === 'false')

  const { groupId: groupIdParams } = params
  const groupId = convertIdParamToNumber(groupIdParams)

  const isPublicGroup = await getIsPublicGroup(groupId)
  // 참고: 비공개 그룹
  if (!isPublicGroup.isPublic) return (
    <PrivateGroupVerification
      groupId={groupId}
      searchParams={{ sortBy, isPublic, keyword }}
    />
  )

  const [postspagination, groupDetail] = await Promise.all([
    getPosts(groupId, { sortBy, isPublic, keyword }),
    getGroupDetail(groupId),
  ])
  const { data, currentPage, totalPages } = postspagination
  // 참고: 공개 그룹
  return (
    <PageLayout paddingBlock='40px 120px'>
      <GroupDetailLayout
        groupDetail={groupDetail}
        optionButtons={<GroupOptionButtons groupId={groupId} groupDetail={groupDetail} />}
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
              currentData={sortBy}
            />
            <PostsList
              searchParams={{ sortBy, isPublic, keyword }}
              initialPosts={data}
              initialPage={currentPage}
              initialHasNext={currentPage < totalPages}
              groupId={groupId}
            />
          </>
        )}
      />
    </PageLayout>
  )
}

export const revalidate = 0
export const metadata = META_GROUP_DETAIL
export default GroupDetailPage
