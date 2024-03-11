import { postRequest } from '@services/api/requests'
import { PostVerifyPasswordFormInput } from '@services/api/types'

type PostVerifyPasswordResponse = { message: string }

const postVerifyPasswordPost = async (postId: number, postData: PostVerifyPasswordFormInput) => {
  const response = await postRequest<PostVerifyPasswordResponse, PostVerifyPasswordFormInput>(`/posts/${postId}/verify-password`, postData)
  return response
}

export default postVerifyPasswordPost
