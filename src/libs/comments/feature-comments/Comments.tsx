import getComments from '../data-access-comments/getComments'
import CommentsLayout from '../ui-comments/CommentsLayout'
import CommentsContent from './CommentsContent'
import CreateCommentButton from './CreateCommentButton'

type CommentsProps = {
  postId: number
}

const Comments = async ({ postId }: CommentsProps) => {
  const comments = await getComments(postId)

  return (
    <CommentsLayout
      createCommentButton={(<CreateCommentButton postId={postId} />)}
      contents={<CommentsContent comments={comments} />}
    />
  )
}

export default Comments
