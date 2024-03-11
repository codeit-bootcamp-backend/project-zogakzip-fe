'use client'

import { GroupFormInput } from '@services/api/types'
import GroupForm from './GroupForm'

type GroupEditFormProps = {
  defaultValues: Omit<GroupFormInput, 'password'>
  onSubmit: (data: GroupFormInput) => void
}

const GroupEditForm = ({ defaultValues, onSubmit }: GroupEditFormProps) => {
  // TODO: 스크롤 시 화면 정중앙에서 벗어남
  return (
    <GroupForm
      onSubmit={onSubmit}
      defaultValues={defaultValues}
    />
  )
}

export default GroupEditForm
