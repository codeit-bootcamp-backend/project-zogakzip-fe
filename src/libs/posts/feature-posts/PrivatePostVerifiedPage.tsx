'use client'

import PageLayout from '@libs/shared/layout/PageLayout'
import useAsync from '@libs/shared/util-hook/useAsync'
import getPostDetail from '../data-access-posts/getPostDetail'
import getComments from '@libs/comments/data-access-comments/getComments'
import PostDetailLayout from '../ui-posts/PostDetailLayout'
import PostOptionButtons from './PostOptionButtons'
import CommentsLayout from '@libs/comments/ui-comments/CommentsLayout'
import CommentCreateButton from '@libs/comments/feature-comments/CommentCreateButton'
import CommentsList from '@libs/comments/feature-comments/CommentsList'

type PrivatePostVerifiedPageProps = {
  postId: number
  page: number
}

const PrivatePostVerifiedPage = ({ postId, page }: PrivatePostVerifiedPageProps) => {
  const { data: postDetail, isLoading: isPostDetailLoading, error: isPostDetailError } = useAsync(() => getPostDetail(postId), [postId])
  const { data: commentsPagination } = useAsync(() => getComments(postId, page), [postId, page])

  if (isPostDetailLoading) return <div>Loading...</div>
  if (isPostDetailError) return <div>Error</div>
  if (!postDetail) return <div>group Detail not found</div>

  return (
    <PageLayout paddingBlock='40px 120px'>
      <PostDetailLayout
        postDetail={postDetail}
        optionButtons={<PostOptionButtons postId={postId} postDetail={postDetail} />}
      />
      {commentsPagination && (
        <CommentsLayout
          createCommentButton={(<CommentCreateButton postId={postId} />)}
          contents={(
            <CommentsList
              comments={commentsPagination.data}
              currentPage={commentsPagination.currentPage}
              totalPages={commentsPagination.totalPages}
              totalItemCount={commentsPagination.totalItemCount}
            />
          )}
        />
      )}
    </PageLayout>
  )
}

export default PrivatePostVerifiedPage
