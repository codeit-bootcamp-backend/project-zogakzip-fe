import { getRequest } from '@services/api/requests'
import { PostsSearchParams, Post, PaginationResponse } from '@services/api/types'

const getPosts = async (groupId: number, { sortBy, keyword, isPublic }: PostsSearchParams) => {
  const response = await getRequest<PaginationResponse<Post>>(`/groups/${groupId}/posts?sortBy=${sortBy}&keyword=${keyword}&isPublic=${isPublic}`)
  return response
}

export default getPosts
