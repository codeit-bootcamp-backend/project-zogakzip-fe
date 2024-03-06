'use client'

import { GroupFormInput } from '@services/api/types'
import GroupForm from './GroupForm'

type GroupEditFormProps = {
  defaultValues: GroupFormInput
  defaultImageUrl?: string
}

const GroupEditForm = ({ defaultValues, defaultImageUrl }: GroupEditFormProps) => {
  const handleEditGroup = (data: GroupFormInput) => {
    console.log('create group')
    console.log(data)
  }

  return (
    <GroupForm
      onSubmit={handleEditGroup}
      defaultValues={defaultValues}
      defaultImageUrl={defaultImageUrl}
    />
  )
}

export default GroupEditForm
