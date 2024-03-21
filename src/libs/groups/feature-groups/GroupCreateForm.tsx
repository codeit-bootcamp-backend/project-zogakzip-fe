'use client'

import { GroupFormInput } from '@services/api/types'
import GroupForm from './GroupForm'
import postGroup from '../data-access-groups/postGroup'
import { useRouter } from 'next/navigation'
import useConfirmModal from '@libs/shared/modal/useConfirmModal'

type GroupCreateFormProps = {

}

const GroupCreateForm = ({ }: GroupCreateFormProps) => {
  const { renderConfirmModal, openConfirmModal } = useConfirmModal()
  const router = useRouter()

  const handleCreateGroup = async (data: GroupFormInput) => {
    // TODO: 비밀번호 유출 경고
    try {
      await postGroup(data)
      openConfirmModal({
        title: '그룹 만들기 성공',
        description: '그룹이 성공적으로 등록되었습니다.',
        onClose: () => {
          router.push('/groups')
        },
      })
    } catch (error) {
      openConfirmModal({
        title: '그룹 만들기 실패',
        ...((error instanceof Error) && { description: error.message }),
      })
    }
  }

  return (
    <>
      <GroupForm onSubmit={handleCreateGroup} />
      {renderConfirmModal()}
    </>
  )
}

export default GroupCreateForm
