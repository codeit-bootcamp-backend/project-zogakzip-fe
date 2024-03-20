import { COMMENTS_PAGE_SIZE } from '@libs/shared/pagination/constants'
import { getRequest } from '@services/api/requests'
import { CommentType, PaginationResponse } from '@services/api/types'

const getComments = async (postId: number, page: number = 1) => {
  const response = await getRequest<PaginationResponse<CommentType>>(`/posts/${postId}/comments?page=${page}&pageSize=${COMMENTS_PAGE_SIZE}`, { next: { tags: ['comments'] } })
  return response
}

export default getComments
