import { getRequest } from '@services/api/requests'
import { GroupsSearchParams, Group } from '@services/api/types'

const getGroups = async ({ sortBy, keyword, isPublic }: GroupsSearchParams) => {
  const response = await getRequest<Group[]>(`/groups?sortBy=${sortBy}&keyword=${keyword}&isPublic=${isPublic}`, { next: { tags: ['groups'] } })
  return response
}

export default getGroups
