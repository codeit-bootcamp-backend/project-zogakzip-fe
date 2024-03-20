'use server'

import { postRequest } from '@services/api/requests'
import { PostCreateFormInput, PostDetail } from '@services/api/types'
import { revalidateTag } from 'next/cache'

type PostPostRequest = Omit<PostCreateFormInput, 'tags'> & { tags: string }

const postPost = async (groupId: number, data: PostCreateFormInput) => {
  const { tags, ...rest } = data
  const body = { ...rest, tags: JSON.stringify(tags) }
  const response = await postRequest<PostDetail, PostPostRequest>(`/groups/${groupId}/posts`, body)

  revalidateTag('posts')

  return response
}

export default postPost
