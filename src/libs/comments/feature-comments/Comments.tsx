import getComments from '../data-access-comments/getComments'
import CommentsLayout from '../ui-comments/CommentsLayout'
import CommentsContent from './CommentsContent'
import CommentCreateButton from './CommentCreateButton'

type CommentsProps = {
  postId: number
}

const Comments = async ({ postId }: CommentsProps) => {
  const comments = await getComments(postId)

  return (
    <CommentsLayout
      createCommentButton={(<CommentCreateButton postId={postId} />)}
      contents={<CommentsContent comments={comments} />}
    />
  )
}

export default Comments
