import { PRIVATE_GROUPS_PAGE_SIZE, PUBLIC_GROUPS_PAGE_SIZE } from '@libs/shared/pagination/constants'
import { getRequest } from '@services/api/requests'
import { GroupsSearchParams, Group, PaginationResponse } from '@services/api/types'

const getGroups = async ({ sortBy, keyword, isPublic, page = 1 }: GroupsSearchParams) => {
  // TODO: sortBy 백엔드 개발 완료 시 추가
  const response = await getRequest<PaginationResponse<Group>>(`/groups?&keyword=${keyword}&isPublic=${isPublic}&page=${page}&pageSize=${isPublic ? PUBLIC_GROUPS_PAGE_SIZE : PRIVATE_GROUPS_PAGE_SIZE}`, { next: { tags: ['groups'] } })
  return response
}

export default getGroups
