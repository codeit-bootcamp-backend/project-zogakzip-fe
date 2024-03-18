import { getRequest } from '@services/api/requests'
import { GroupsSearchParams, Group, PaginationResponse } from '@services/api/types'

const getGroups = async ({ sortBy, keyword, isPublic }: GroupsSearchParams) => {
  const response = await getRequest<PaginationResponse<Group>>(`/groups?sortBy=${sortBy}&keyword=${keyword}&isPublic=${isPublic}`, { next: { tags: ['groups'] } })
  return response
}

export default getGroups
