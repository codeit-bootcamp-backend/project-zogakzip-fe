'use server'

import { deleteRequest } from '@services/api/requests'
import { CommentDeleteFormInput } from '@services/api/types'

const deleteComment = async (commentId: number, body: CommentDeleteFormInput) => {
  const response = await deleteRequest(`/comments/${commentId}`, body)
  return response
}

export default deleteComment
