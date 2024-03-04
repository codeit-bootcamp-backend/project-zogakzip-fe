import classNames from 'classnames/bind'
import styles from './page.module.scss'
import { META_GROUPS } from '@app/_meta'
import { SortBy } from '@services/api/types'
import Filters from '@libs/shared/filters/Filters'
import { SORT_BY_FILTERS } from '@libs/shared/dropdown/constants'
import GroupsList from '../../libs/groups/feature-groups/GroupsList'

const cx = classNames.bind(styles)

type GroupsPageProps = {
  searchParams: Partial<{
    isPublic: string
    sortBy: string
    keyword: string
  }>
}

const GroupsPage = ({ searchParams }: GroupsPageProps) => {
  const {
    sortBy: sortByParam,
    isPublic: isPublicParam,
    keyword = '',
  } = searchParams
  const sortBy = SortBy[sortByParam as keyof typeof SortBy] || SortBy.mostLiked
  const isPublic = !(isPublicParam === 'false')

  return (
    <main className={cx('container')}>
      <Filters
        placeholder='그룹명을 검색해 주세요'
        filters={SORT_BY_FILTERS}
        currentData={sortBy}
      />
      <GroupsList searchParams={{ sortBy, keyword, isPublic }} />
    </main>
  )
}

export const metadata = META_GROUPS
export default GroupsPage
