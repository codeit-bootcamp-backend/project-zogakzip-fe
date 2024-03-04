import { GroupsSearchParams } from '@services/api/types'
import getGroups from '../data-access-groups/getGroups'
import UiGroupsList from '../ui-groups/UiGroupsList'

type GroupsListProps = {
  searchParams: GroupsSearchParams
}

const GroupsList = async ({ searchParams }: GroupsListProps) => {
  const groups = await getGroups(searchParams)
  return (
    <UiGroupsList groups={groups} />
  )
}

export default GroupsList
