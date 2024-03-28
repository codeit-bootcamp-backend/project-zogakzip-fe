'use server'

import { postRequest } from '@services/api/requests'
import { PostCreateFormInput, PostDetail } from '@services/api/types'
import { revalidatePath } from 'next/cache'

const postPost = async (groupId: number, body: PostCreateFormInput) => {
  const response = await postRequest<PostDetail, PostCreateFormInput>(`/groups/${groupId}/posts`, body)

  revalidatePath('/groups')
  revalidatePath(`/groups/${groupId}`)

  return response
}

export default postPost
