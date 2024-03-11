'use client'

import getComments from '../data-access-comments/getComments'
import CommentsLayout from '../ui-comments/CommentsLayout'
import CommentsContent from './CommentsContent'
import CommentCreateButton from './CommentCreateButton'
import useAsync from '@libs/shared/util-hook/useAsync'

type CommentsClientProps = {
  postId: number
}

const CommentsClient = ({ postId }: CommentsClientProps) => {
  const { data: comments, isLoading, error } = useAsync(() => getComments(postId), [postId])

  // TODO: 올바른 로딩, 에러, 데이터 없음
  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error</div>
  if (!comments) return <div>Group not found</div>
  return (
    <CommentsLayout
      createCommentButton={(<CommentCreateButton postId={postId} />)}
      contents={<CommentsContent comments={comments} />}
    />
  )
}

export default CommentsClient
