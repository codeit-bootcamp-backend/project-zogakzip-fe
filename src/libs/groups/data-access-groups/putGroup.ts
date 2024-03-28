'use server'

import { putRequest } from '@services/api/requests'
import { GroupDetail, GroupFormInput } from '@services/api/types'
import { revalidatePath, revalidateTag } from 'next/cache'

const putGroup = async (groupId: number, body: GroupFormInput) => {
  const response = await putRequest<GroupDetail, GroupFormInput>(`/groups/${groupId}`, body)

  revalidatePath('/groups')
  revalidateTag('groupDetail')

  return response
}

export default putGroup
