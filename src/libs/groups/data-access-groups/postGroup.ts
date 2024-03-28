'use server'

import { postRequest } from '@services/api/requests'
import { GroupDetail, GroupFormInput } from '@services/api/types'
import { revalidatePath } from 'next/cache'

const postGroup = async (body: GroupFormInput) => {
  const response = await postRequest<GroupDetail, GroupFormInput>('/groups', body)

  revalidatePath('/groups')

  return response
}

export default postGroup
