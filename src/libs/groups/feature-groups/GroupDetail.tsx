import LikeButton from '@libs/shared/button/LikeButton'
import getGroupDetail from '../data-access-groups/getGroupDetail'
import GroupDetailLayout from '../ui-groups/GroupDetailLayout'
import GroupOptionButtons from './GroupOptionButtons'

type GroupDetailProps = {
  groupId: number
}

const GroupDetail = async ({ groupId }: GroupDetailProps) => {
  const groupDetail = await getGroupDetail(groupId)
  return (
    <GroupDetailLayout
      groupDetail={groupDetail}
      optionButtons={<GroupOptionButtons groupId={groupId} />}
      likeButton={<LikeButton type='group' id={groupId} />}
    />
  )
}

export default GroupDetail
