import getComments from '../data-access-comments/getComments'
import CommentsLayout from '../ui-comments/CommentsLayout'
import CommentsContent from './CommentsContent'
import CommentCreateButton from './CommentCreateButton'

type CommentsProps = {
  postId: number
}

const Comments = async ({ postId }: CommentsProps) => {
  const { data: comments, currentPage, totalPages } = await getComments(postId)

  return (
    <CommentsLayout
      createCommentButton={(<CommentCreateButton postId={postId} />)}
      contents={<CommentsContent comments={comments} currentPage={currentPage} totalPages={totalPages} />}
    />
  )
}

export default Comments
