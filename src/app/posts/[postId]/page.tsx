import { META_POST_DETAIL } from '@app/_meta'
import convertIdParamToNumber from '@libs/shared/util-util/convertIdParamToNumber'
import PostDetail from '@libs/posts/feature-posts/PostDetail'
import Comments from '@libs/comments/feature-comments/Comments'
import PageLayout from '@libs/shared/layout/PageLayout'

type PostDetailPageProps = {
  params: { postId: string }
}

const PostDetailPage = ({ params }: PostDetailPageProps) => {

  const { postId: postIdParams } = params
  const postId = convertIdParamToNumber(postIdParams)

  return (
    <PageLayout paddingBlock='40px 120px'>
      <PostDetail postId={postId} />
      <Comments postId={postId} />
    </PageLayout>
  )
}

export const metadata = META_POST_DETAIL
export default PostDetailPage
