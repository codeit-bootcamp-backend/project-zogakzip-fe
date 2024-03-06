'use client'

import { GroupFormInput } from '@services/api/types'
import GroupForm from './GroupForm'

type GroupCreateFormProps = {

}

const GroupCreateForm = ({ }: GroupCreateFormProps) => {
  const handleCreateGroup = (data: GroupFormInput) => {
    console.log('create group')
    console.log(data)
  }

  return (
    <GroupForm onSubmit={handleCreateGroup} />
  )
}

export default GroupCreateForm
