import { CommentType } from '@services/api/types'
import CommentLayout from '../ui-comments/CommentLayout'
import CommentOptionButtons from './CommentOptionButtons'

type CommentProps = {
  comment: CommentType
}

const Comment = ({ comment }: CommentProps) => {
  return (
    <CommentLayout
      comment={comment}
      optionButtons={<CommentOptionButtons comment={comment} />}
    />
  )
}

export default Comment
