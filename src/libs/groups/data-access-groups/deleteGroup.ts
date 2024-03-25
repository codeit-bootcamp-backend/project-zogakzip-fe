'use server'

import { deleteRequest } from '@services/api/requests'
import { GroupDeleteFormInput } from '@services/api/types'

const deleteGroup = async (groupId: number, body: GroupDeleteFormInput) => {
  const response = await deleteRequest(`/groups/${groupId}`, body)
  // TODO-1: groups 페이지에 대한 revalidate 필요하나, groups/{groupId}가 재렌더링되며 오류가 발생하여 revalidate를 실행 못함
  // revalidateTag('another')
  return response
}

export default deleteGroup
