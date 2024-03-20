'use server'

import { deleteRequest } from '@services/api/requests'
import { PostDeleteFormInput } from '@services/api/types'

const deletePost = async (postId: number, body: PostDeleteFormInput) => {
  const response = await deleteRequest(`/posts/${postId}`, body)
  // TODO: posts 페이지에 대한 revalidate 필요하나, posts/{postId}가 재렌더링되며 오류가 발생하여 revalidate를 실행 못함
  // revalidateTag('another')
  return response
}

export default deletePost
