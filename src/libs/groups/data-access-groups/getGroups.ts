import { PRIVATE_GROUPS_PAGE_SIZE, PUBLIC_GROUPS_PAGE_SIZE } from '@libs/shared/pagination/constants'
import { getRequest } from '@services/api/requests'
import { GroupsSearchParams, Group, PaginationResponse } from '@services/api/types'

const getGroups = async ({ sortBy, keyword, isPublic, page = 1 }: GroupsSearchParams) => {
  const response = await getRequest<PaginationResponse<Group>>(`/groups?&keyword=${encodeURIComponent(keyword)}&sortBy=${sortBy}&isPublic=${isPublic}&page=${page}&pageSize=${isPublic ? PUBLIC_GROUPS_PAGE_SIZE : PRIVATE_GROUPS_PAGE_SIZE}`, { next: { tags: ['groups'] } })
  return response
}

export default getGroups
