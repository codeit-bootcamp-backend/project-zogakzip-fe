import { getRequest } from '@services/api/requests'
import { CommentType, PaginationResponse } from '@services/api/types'

const getComments = async (postId: number) => {
  const response = await getRequest<PaginationResponse<CommentType>>(`/posts/${postId}/comments`)
  return response
}

export default getComments
