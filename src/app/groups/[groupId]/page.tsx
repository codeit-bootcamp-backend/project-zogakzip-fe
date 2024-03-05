import classNames from 'classnames/bind'
import styles from './page.module.scss'
import { META_POST_DETAIL } from '@app/_meta'
import { SortByPosts } from '@services/api/types'
import convertIdParamToNumber from '@libs/shared/util-util/convertIdParamToNumber'
import GroupDetail from '@libs/groups/feature-groups/GroupDetail'
import Divider from '@libs/shared/layout/Divider'
import SectionLayout from '@libs/shared/layout/SectionLayout'
import Button from '@libs/shared/button/Button'
import Filters from '@libs/shared/filters/Filters'
import { SORT_BY_POSTS_FILTERS } from '@libs/shared/dropdown/constants'
import Link from 'next/link'
import PostsList from '@libs/posts/feature-posts/PostsList'

const cx = classNames.bind(styles)

type GroupDetailPageProps = {
  params: { groupId: string }
  searchParams: Partial<{
    isPublic: string
    sortBy: string
    keyword: string
  }>
}

const GroupDetailPage = ({ params, searchParams }: GroupDetailPageProps) => {
  const {
    sortBy: sortByParam,
    isPublic: isPublicParam,
    keyword = '',
  } = searchParams
  const sortBy = SortByPosts[sortByParam as keyof typeof SortByPosts] || SortByPosts.mostLiked
  const isPublic = !(isPublicParam === 'false')

  const { groupId: groupIdParams } = params
  const groupId = convertIdParamToNumber(groupIdParams)

  return (
    <main className={cx('container')}>
      <GroupDetail groupId={groupId} />
      <Divider marginTop='120px' marginBottom='120px' color='gray' />
      <SectionLayout
        title='추억 목록'
        headerButton={(
          <Link href={`groups/${groupId}/posts/create`}>
            <Button size='medium'>추억 올리기</Button>
          </Link>
        )}
        content={(
          <>
            <Filters
              placeholder='태그 혹은 제목을 입력해 주세요'
              filters={SORT_BY_POSTS_FILTERS}
              currentData={sortBy}
            />
            <PostsList
              groupId={groupId}
              searchParams={{ sortBy, isPublic, keyword }}
            />
          </>
        )}
      />
    </main>
  )
}

export const metadata = META_POST_DETAIL
export default GroupDetailPage
