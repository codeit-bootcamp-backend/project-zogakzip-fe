'use server'

import { putRequest } from '@services/api/requests'
import { CommentFormInput, CommentType } from '@services/api/types'
import { revalidateTag } from 'next/cache'

const putComment = async (commentId: number, body: CommentFormInput) => {
  const response = await putRequest<CommentType, CommentFormInput>(`/comments/${commentId}`, body)

  revalidateTag('comments')

  return response
}

export default putComment
