import { postRequest } from '@services/api/requests'
import { GroupVerifyPasswordFormInput } from '@services/api/types'

type GroupVerifyPasswordResponse = { message: string }

const postVerifyPasswordGroup = async (groupId: number, postData: GroupVerifyPasswordFormInput) => {
  const response = await postRequest<GroupVerifyPasswordResponse, GroupVerifyPasswordFormInput>(`/groups/${groupId}/verify-password`, postData)
  return response
}

export default postVerifyPasswordGroup
