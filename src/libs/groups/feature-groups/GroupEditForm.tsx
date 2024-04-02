'use client'

import { GroupFormInput } from '@services/api/types'
import GroupForm from './GroupForm'

type GroupEditFormProps = {
  defaultValues: Omit<GroupFormInput, 'password'>
  onSubmit: (data: GroupFormInput) => void
}

const GroupEditForm = ({ defaultValues, onSubmit }: GroupEditFormProps) => {
  return (
    <GroupForm
      onSubmit={onSubmit}
      defaultValues={defaultValues}
    />
  )
}

export default GroupEditForm
