import { postRequest } from '@services/api/requests'
import { GroupVerificationFormInput } from '@services/api/types'

type VerifyGroupPasswordResponse = { message: string }

const postVerifyGroupPassword = async (groupId: number, body: GroupVerificationFormInput) => {
  const response = await postRequest<VerifyGroupPasswordResponse, GroupVerificationFormInput>(`/groups/${groupId}/verify-password`, body)
  return response
}

export default postVerifyGroupPassword
