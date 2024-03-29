'use server'

import { PRIVATE_POSTS_PAGE_SIZE, PUBLIC_POSTS_PAGE_SIZE } from '@libs/shared/pagination/constants'
import { getRequest } from '@services/api/requests'
import { PostsSearchParams, Post, PaginationResponse } from '@services/api/types'

const getPosts = async (groupId: number, { sortBy, keyword, isPublic, page = 1 }: PostsSearchParams) => {
  const response = await getRequest<PaginationResponse<Post>>(`/groups/${groupId}/posts?keyword=${encodeURIComponent(keyword)}&sortBy=${sortBy}&isPublic=${isPublic}&page=${page}&pageSize=${isPublic ? PUBLIC_POSTS_PAGE_SIZE : PRIVATE_POSTS_PAGE_SIZE}`, { next: { tags: ['posts'] } })
  return response
}

export default getPosts
