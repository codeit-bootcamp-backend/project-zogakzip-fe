'use server'

import { putRequest } from '@services/api/requests'
import { PostDetail, PostEditFormInput } from '@services/api/types'
import { revalidateTag } from 'next/cache'

const putPost = async (postId: number, body: PostEditFormInput) => {

  const response = await putRequest<PostDetail, PostEditFormInput>(`/posts/${postId}`, body)

  revalidateTag('postDetail')
  revalidateTag('posts')

  return response
}

export default putPost
