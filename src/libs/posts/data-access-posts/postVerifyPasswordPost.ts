import { postRequest } from '@services/api/requests'
import { PostVerificationFormInput } from '@services/api/types'

type VerifyPostPasswordResponse = { message: string }

const postVerifyPostPassword = async (postId: number, body: PostVerificationFormInput) => {
  const response = await postRequest<VerifyPostPasswordResponse, PostVerificationFormInput>(`/posts/${postId}/verify-password`, body)
  return response
}

export default postVerifyPostPassword
