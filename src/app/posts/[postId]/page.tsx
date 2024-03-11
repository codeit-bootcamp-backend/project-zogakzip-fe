import { META_POST_DETAIL } from '@app/_meta'
import convertIdParamToNumber from '@libs/shared/util-util/convertIdParamToNumber'
import PostDetail from '@libs/posts/feature-posts/PostDetail'
import Comments from '@libs/comments/feature-comments/Comments'
import PageLayout from '@libs/shared/layout/PageLayout'
import getIsPublicPost from '@libs/posts/data-access-posts/getIsPublicPost'
import PostVerifyPassword from '@libs/posts/feature-posts/PostVerifyPassword'

type PostDetailPageProps = {
  params: { postId: string }
}

const PostDetailPage = async ({ params }: PostDetailPageProps) => {

  const { postId: postIdParams } = params
  const postId = convertIdParamToNumber(postIdParams)

  const isPublicPost = await getIsPublicPost(postId)

  if (!isPublicPost.isPublic) {
    return (
      <PostVerifyPassword
        postId={postId}
      />
    )
  }

  return (
    <PageLayout paddingBlock='40px 120px'>
      <PostDetail postId={postId} />
      <Comments postId={postId} />
    </PageLayout>
  )
}

export const metadata = META_POST_DETAIL
export default PostDetailPage
