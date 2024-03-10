import { getRequest } from '@services/api/requests'
import { IsPublicGroup } from '@services/api/types'

const getIsPublicGroup = async (groupId: number) => {
  const response = await getRequest<IsPublicGroup>(`/groups/${groupId}/is-public`)
  return response
}

export default getIsPublicGroup
