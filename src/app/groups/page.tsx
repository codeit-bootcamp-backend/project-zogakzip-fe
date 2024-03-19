import { META_GROUPS } from '@app/_meta'
import { SortByGroups } from '@services/api/types'
import Filters from '@libs/shared/filters/Filters'
import { SORT_BY_GROUPS_FILTERS } from '@libs/shared/dropdown/constants'
import GroupsList from '../../libs/groups/feature-groups/GroupsList'
import PageLayout from '@libs/shared/layout/PageLayout'
import getGroups from '@libs/groups/data-access-groups/getGroups'

type GroupsPageProps = {
  searchParams: Partial<{
    isPublic: string
    sortBy: string
    keyword: string
  }>
}

const GroupsPage = async ({ searchParams }: GroupsPageProps) => {
  const {
    sortBy: sortByParam,
    isPublic: isPublicParam,
    keyword = '',
  } = searchParams
  const sortBy = SortByGroups[sortByParam as keyof typeof SortByGroups] || SortByGroups.mostLiked
  const isPublic = !(isPublicParam === 'false')

  const { data, currentPage, totalPages } = await getGroups({ sortBy, keyword, isPublic })

  return (
    <PageLayout paddingBlock='40px 120px'>
      <Filters
        placeholder='그룹명을 검색해 주세요'
        filters={SORT_BY_GROUPS_FILTERS}
        currentData={sortBy}
      />
      <GroupsList
        searchParams={{ sortBy, keyword, isPublic }}
        initialGroups={data}
        initialPage={currentPage}
        initialHasNext={currentPage < totalPages}
      />
    </PageLayout>
  )
}

export const revalidate = 0
export const metadata = META_GROUPS
export default GroupsPage
