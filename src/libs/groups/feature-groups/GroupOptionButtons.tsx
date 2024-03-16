'use client'

import OptionButtonsLayout from '@libs/shared/layout/OptionButtonsLayout'
import useModal from '@libs/shared/modal/useModal'
import FormModal from '@libs/shared/modal/FormModal'
import { GroupDeleteFormInput, GroupDetail, GroupFormInput } from '@services/api/types'
import GroupEditForm from './GroupEditForm'
import GroupDeleteForm from './GroupDeleteForm'
import putGroup from '../data-access-groups/putGroup'
import { useRouter } from 'next/navigation'
import useConfirmModal from '@libs/shared/modal/useConfirmModal'
import deleteGroup from '../data-access-groups/deleteGroup'

type GroupOptionButtonsProps = {
  groupId: number
  groupDetail: GroupDetail
}

const GroupOptionButtons = ({ groupId, groupDetail }: GroupOptionButtonsProps) => {
  const groupEditFormModal = useModal()
  const groupDeleteFormModal = useModal()
  const { renderConfirmModal, openConfirmModal } = useConfirmModal()
  const router = useRouter()

  const handleEditGroup = async (data: GroupFormInput) => {
    try {
      await putGroup(groupId, data)
      groupEditFormModal.closeModal()
      openConfirmModal({
        title: '그룹 수정 성공',
        description: '그룹 정보 수정에 성공했습니다.',
      })
    } catch (error) {
      openConfirmModal({
        title: '그룹 수정 실패',
        description: (error instanceof Error) ? error.message : '알 수 없는 오류가 발생했습니다.',
      })
    }
  }

  const handleDeleteGroup = async (data: GroupDeleteFormInput) => {
    try {
      await deleteGroup(groupId, data)
      groupDeleteFormModal.closeModal()
      openConfirmModal({
        title: '그룹 삭제 성공',
        description: '그룹 삭제에 성공했습니다. 그룹 목록 페이지로 이동합니다.',
        onClose: () => {
          router.push('/groups')
        },
      })
    } catch (error) {
      openConfirmModal({
        title: '그룹 삭제 실패',
        description: (error instanceof Error) ? error.message : '알 수 없는 오류가 발생했습니다.',
      })
    }
  }

  return (
    <>
      <OptionButtonsLayout
        editText='그룹 수정하기'
        deleteText='그룹 삭제하기'
        onClickEdit={() => { groupEditFormModal.openModal() }}
        onClickDelete={() => { groupDeleteFormModal.openModal() }}
      />
      <FormModal
        title='그룹 정보 수정'
        onClose={groupEditFormModal.closeModal}
        ref={groupEditFormModal.modalRef}
        content={(
          <GroupEditForm
            defaultValues={{
              name: groupDetail.name,
              introduction: groupDetail.introduction,
              isPublic: groupDetail.isPublic,
              imageUrl: groupDetail.imageUrl,
            }}
            onSubmit={handleEditGroup}
          />
        )}
      />
      <FormModal
        title='그룹 삭제'
        titleMarginBottom='40px'
        onClose={groupDeleteFormModal.closeModal}
        ref={groupDeleteFormModal.modalRef}
        content={(
          <GroupDeleteForm
            onSubmit={handleDeleteGroup}
          />
        )}
      />
      {renderConfirmModal()}
    </>
  )
}

export default GroupOptionButtons
