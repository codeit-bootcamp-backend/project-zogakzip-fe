import { postRequest } from '@services/api/requests'

type LikeGroupResponse = { message: string }

const postLikeGroup = async (groupId: number) => {
  const response = await postRequest<LikeGroupResponse, undefined>(`/groups/${groupId}/like`)

  return response
}

export default postLikeGroup
