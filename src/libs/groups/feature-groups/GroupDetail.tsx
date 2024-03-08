import LikeButton from '@libs/shared/button/LikeButton'
import getGroupDetail from '../data-access-groups/getGroupDetail'
import GroupDetailLayout from '../ui-groups/GroupDetailLayout'
import GroupOptionButtons from './GroupOptionButtons'
import dynamic from 'next/dynamic'

const BadgeCarousel = dynamic(() => import('../ui-groups/BadgeCarousel'), { ssr: false })

type GroupDetailProps = {
  groupId: number
}

const GroupDetail = async ({ groupId }: GroupDetailProps) => {
  const groupDetail = await getGroupDetail(groupId)
  return (
    <GroupDetailLayout
      groupDetail={groupDetail}
      optionButtons={<GroupOptionButtons groupId={groupId} groupDetail={groupDetail} />}
      likeButton={<LikeButton type='group' id={groupId} />}
      badgeCarousel={<BadgeCarousel badges={groupDetail.badges} />}
    />
  )
}

export default GroupDetail
