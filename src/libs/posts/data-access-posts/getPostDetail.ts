import { getRequest } from '@services/api/requests'
import { PostDetail } from '@services/api/types'

const getPostDetail = async (postId: number) => {
  const response = await getRequest<PostDetail>(`/posts/${postId}`)
  return response
}

export default getPostDetail
