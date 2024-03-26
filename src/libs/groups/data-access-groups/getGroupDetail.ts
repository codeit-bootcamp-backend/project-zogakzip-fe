'use server'

import { getRequest } from '@services/api/requests'
import { GroupDetail } from '@services/api/types'

const getGroupDetail = async (groupId: number) => {
  const response = await getRequest<GroupDetail>(`/groups/${groupId}`, { next: { tags: ['groupDetail'] } })
  return response
}

export default getGroupDetail
