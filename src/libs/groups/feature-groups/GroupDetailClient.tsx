'use client'

import LikeButton from '@libs/shared/button/LikeButton'
import getGroupDetail from '../data-access-groups/getGroupDetail'
import GroupDetailLayout from '../ui-groups/GroupDetailLayout'
import GroupOptionButtons from './GroupOptionButtons'
import dynamic from 'next/dynamic'
import useAsync from '@libs/shared/util-hook/useAsync'

const BadgeCarousel = dynamic(() => import('../ui-groups/BadgeCarousel'), { ssr: false })

type GroupDetailClientProps = {
  groupId: number
}

const GroupDetailClient = ({ groupId }: GroupDetailClientProps) => {
  const { data: groupDetail, isLoading, error } = useAsync(() => getGroupDetail(groupId), [groupId])

  // TODO: 올바른 로딩, 에러, 데이터 없음
  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error</div>
  if (!groupDetail) return <div>Group not found</div>
  return (
    <GroupDetailLayout
      groupDetail={groupDetail}
      optionButtons={<GroupOptionButtons groupId={groupId} groupDetail={groupDetail} />}
      likeButton={<LikeButton type='group' id={groupId} />}
      badgeCarousel={<BadgeCarousel badges={groupDetail.badges} />}
    />
  )
}

export default GroupDetailClient
