import classNames from 'classnames/bind'
import styles from './page.module.scss'
import { META_POST_DETAIL } from '@app/_meta'
import convertIdParamToNumber from '@libs/shared/util-util/convertIdParamToNumber'
import PostDetail from '@libs/posts/feature-posts/PostDetail'
import Comments from '@libs/comments/feature-comments/Comments'

const cx = classNames.bind(styles)

type PostDetailPageProps = {
  params: { postId: string }
}

const PostDetailPage = ({ params }: PostDetailPageProps) => {

  const { postId: postIdParams } = params
  const postId = convertIdParamToNumber(postIdParams)

  return (
    <main className={cx('container')}>
      <PostDetail postId={postId} />
      <Comments postId={postId} />
    </main>
  )
}

export const metadata = META_POST_DETAIL
export default PostDetailPage
