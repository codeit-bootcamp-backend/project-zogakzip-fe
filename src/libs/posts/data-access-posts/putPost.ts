'use server'

import { putRequest } from '@services/api/requests'
import { PostDetail, PostEditFormInput } from '@services/api/types'
import { revalidateTag } from 'next/cache'

type PutPostRequest = Omit<PostEditFormInput, 'tags'> & { tags: string }

const putPost = async (postId: number, data: PostEditFormInput) => {
  const { tags, ...rest } = data
  const body = { ...rest, tags: JSON.stringify(tags) }
  const response = await putRequest<PostDetail, PutPostRequest>(`/posts/${postId}`, body)

  revalidateTag('postDetail')
  revalidateTag('posts')

  return response
}

export default putPost
