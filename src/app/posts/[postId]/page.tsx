import { META_POST_DETAIL } from '@app/_meta'
import convertIdParamToNumber from '@libs/shared/util-util/convertIdParamToNumber'
import PageLayout from '@libs/shared/layout/PageLayout'
import getIsPublicPost from '@libs/posts/data-access-posts/getIsPublicPost'
import PrivatePostVerification from '@libs/posts/feature-posts/PrivatePostVerification'
import convertPageParamToNumber from '@libs/shared/util-util/convertPageParamToNumber'
import getPostDetail from '@libs/posts/data-access-posts/getPostDetail'
import getComments from '@libs/comments/data-access-comments/getComments'
import PostDetailLayout from '@libs/posts/ui-posts/PostDetailLayout'
import PostOptionButtons from '@libs/posts/feature-posts/PostOptionButtons'
import CommentsLayout from '@libs/comments/ui-comments/CommentsLayout'
import CommentCreateButton from '@libs/comments/feature-comments/CommentCreateButton'
import CommentsList from '@libs/comments/feature-comments/CommentsList'

type PostDetailPageProps = {
  params: { postId: string }
  searchParams: Partial<{
    page: string
  }>
}

const PostDetailPage = async ({ params, searchParams }: PostDetailPageProps) => {
  const { postId: postIdParams } = params
  const postId = convertIdParamToNumber(postIdParams)
  const { page: pageParams } = searchParams
  const page = convertPageParamToNumber(pageParams)

  const isPublicPost = await getIsPublicPost(postId)
  // 참고: 비공개 추억
  if (!isPublicPost.isPublic) return (
    <PrivatePostVerification
      postId={postId}
      page={page}
    />
  )
  const [postDetail, commentsPagination] = await Promise.all([
    getPostDetail(postId),
    getComments(postId, page),
  ])
  const { data, currentPage, totalPages, totalItemCount } = commentsPagination
  // 참고: 공개 추억
  return (
    <PageLayout paddingBlock='40px 120px'>
      <PostDetailLayout
        postDetail={postDetail}
        optionButtons={<PostOptionButtons postId={postId} postDetail={postDetail} />}
      />
      <CommentsLayout
        createCommentButton={(
          <CommentCreateButton
            postId={postId}
            totalItemCount={totalItemCount}
          />
        )}
        contents={(
          <CommentsList
            comments={data}
            currentPage={currentPage}
            totalPages={totalPages}
            totalItemCount={totalItemCount}
          />
        )}
      />
    </PageLayout>
  )
}

export const revalidate = 0
export const metadata = META_POST_DETAIL
export default PostDetailPage
