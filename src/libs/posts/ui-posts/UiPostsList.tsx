import classNames from 'classnames/bind'
import styles from './UiPostsList.module.scss'
import { Post } from '@services/api/types'
import PostCard from '@libs/shared/post-card/PostCard'
import EmptyData from '@libs/shared/empty-data/EmptyData'

const cx = classNames.bind(styles)

type UiPostsListProps = {
  posts: Post[]
  moreButton: React.ReactNode
  createPostButton: React.ReactNode
}

const UiPostsList = ({ posts, moreButton, createPostButton }: UiPostsListProps) => {
  if (posts.length === 0) return (
    <div className={cx('emptyContainer')}>
      <EmptyData title='게시된 추억이 없습니다.' content='첫 번째 추억을 올려보세요!' />
      {createPostButton}
    </div>
  )

  return (
    <>
      <div className={cx('container')}>
        {posts.map((post) => (
          <PostCard key={post.id} card={post} />
        ))}
      </div>
      {moreButton}
    </>
  )
}

export default UiPostsList
