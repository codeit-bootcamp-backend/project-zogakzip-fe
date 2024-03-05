import { getRequest } from '@services/api/requests'
import { CommentType } from '@services/api/types'

const getComments = async (postId: number) => {
  const response = await getRequest<CommentType[]>(`/posts/${postId}/comments`)
  return response
}

export default getComments
