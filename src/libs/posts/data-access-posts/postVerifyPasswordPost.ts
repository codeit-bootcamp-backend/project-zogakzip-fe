import { postRequest } from '@services/api/requests'
import { PostVerifyPasswordFormInput } from '@services/api/types'

type PostVerifyPasswordResponse = { message: string }

const postVerifyPasswordPost = async (postId: number, body: PostVerifyPasswordFormInput) => {
  const response = await postRequest<PostVerifyPasswordResponse, PostVerifyPasswordFormInput>(`/posts/${postId}/verify-password`, body)
  return response
}

export default postVerifyPasswordPost
