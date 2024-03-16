import { postRequest } from '@services/api/requests'
import { GroupVerifyPasswordFormInput } from '@services/api/types'

type GroupVerifyPasswordResponse = { message: string }

const postVerifyPasswordGroup = async (groupId: number, body: GroupVerifyPasswordFormInput) => {
  const response = await postRequest<GroupVerifyPasswordResponse, GroupVerifyPasswordFormInput>(`/groups/${groupId}/verify-password`, body)
  return response
}

export default postVerifyPasswordGroup
