import { getRequest } from '@services/api/requests'
import { MemoriesSearchParams, Memory } from '@services/api/types'

const getMemories = async (groupId: number, { sortBy, keyword, isPublic }: MemoriesSearchParams) => {
  const response = await getRequest<Memory[]>(`/groups/${groupId}/posts?sortBy=${sortBy}&keyword=${keyword}&isPublic=${isPublic}`)
  return response
}

export default getMemories
