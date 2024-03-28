'use server'

import { postRequest } from '@services/api/requests'
import { CommentFormInput, CommentType } from '@services/api/types'
import { revalidatePath, revalidateTag } from 'next/cache'

const postComment = async (postId: number, body: CommentFormInput) => {
  const response = await postRequest<CommentType, CommentFormInput>(`/posts/${postId}/comments`, body)

  revalidatePath(`/posts/${postId}`)
  revalidateTag('posts')

  return response
}

export default postComment
