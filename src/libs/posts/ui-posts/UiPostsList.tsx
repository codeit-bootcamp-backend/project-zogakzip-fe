import classNames from 'classnames/bind'
import styles from './UiPostsList.module.scss'
import { Post } from '@services/api/types'
import PostCard from '@libs/shared/post-card/PostCard'
import Button from '@libs/shared/button/Button'
import EmptyData from '@libs/shared/empty-data/EmptyData'
import Link from 'next/link'

const cx = classNames.bind(styles)

type UiPostsListProps = {
  posts: Post[]
  groupId: number
}

const UiPostsList = ({ posts, groupId }: UiPostsListProps) => {
  if (posts.length === 0) return (
    <div className={cx('emptyContainer')}>
      <EmptyData title='게시된 추억이 없습니다.' content='첫 번째 추억을 올려보세요!' />
      <Link href={`groups/${groupId}/posts/create`}>
        <Button size='large'>추억 올리기</Button>
      </Link>
    </div>
  )

  return (
    <>
      <div className={cx('container')}>
        {posts.map((post) => (
          <PostCard key={post.id} card={post} />
        ))}
      </div>
      <Button size='extraLarge' color='bright'>더보기</Button>
    </>
  )
}

export default UiPostsList
