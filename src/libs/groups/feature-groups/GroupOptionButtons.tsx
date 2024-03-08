'use client'

import OptionButtonsLayout from '@libs/shared/layout/OptionButtonsLayout'
import useModal from '@libs/shared/modal/useModal'
import FormModal from '@libs/shared/modal/FormModal'
import { GroupDeleteFormInput, GroupDetail, GroupFormInput } from '@services/api/types'
import GroupEditForm from './GroupEditForm'
import GroupDeleteForm from './GroupDeleteForm'

type GroupOptionButtonsProps = {
  groupId: number
  groupDetail: GroupDetail
}

const GroupOptionButtons = ({ groupId, groupDetail }: GroupOptionButtonsProps) => {
  const groupEditFormModal = useModal()
  const groupDeleteFormModal = useModal()

  const handleEditGroup = (data: GroupFormInput) => {
    console.log('create group')
    console.log(data)
    groupEditFormModal.closeModal()
  }

  const handleDeleteGroup = (data: GroupDeleteFormInput) => {
    console.log(`delete group ${groupId}번`)
    console.log(data)
    groupDeleteFormModal.closeModal()
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
            }}
            defaultImageUrl={groupDetail.imageUrl ?? undefined}
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
    </>
  )
}

export default GroupOptionButtons
