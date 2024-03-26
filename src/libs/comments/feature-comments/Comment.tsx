import { CommentType } from '@services/api/types'
import CommentLayout from '../ui-comments/CommentLayout'
import CommentOptionButtons from './CommentOptionButtons'

type CommentProps = {
  comment: CommentType
  onSuccessEdit?: (data: CommentType) => void
  onSuccessDelete?: (commentId: number) => void
}

const Comment = ({ comment, onSuccessDelete, onSuccessEdit }: CommentProps) => {
  return (
    <CommentLayout
      comment={comment}
      optionButtons={(
        <CommentOptionButtons
          comment={comment}
          onSuccessEdit={onSuccessEdit}
          onSuccessDelete={onSuccessDelete}
        />
      )}
    />
  )
}

export default Comment
