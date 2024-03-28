'use server'

import { deleteRequest } from '@services/api/requests'
import { CommentDeleteFormInput } from '@services/api/types'
import { revalidateTag } from 'next/cache'

const deleteComment = async (commentId: number, body: CommentDeleteFormInput) => {
  const response = await deleteRequest(`/comments/${commentId}`, body)

  revalidateTag('comments')
  revalidateTag('postDetail')

  return response
}

export default deleteComment
