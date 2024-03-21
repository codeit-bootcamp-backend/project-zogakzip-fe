'use server'

import { postRequest } from '@services/api/requests'
import { CommentFormInput, CommentType } from '@services/api/types'
import { revalidateTag } from 'next/cache'

const postComment = async (postId: number, body: CommentFormInput) => {
  const response = await postRequest<CommentType, CommentFormInput>(`/posts/${postId}/comments`, body)

  revalidateTag('comments')

  return response
}

export default postComment
