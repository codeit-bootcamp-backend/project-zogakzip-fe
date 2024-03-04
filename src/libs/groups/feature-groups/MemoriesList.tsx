import { MemoriesSearchParams } from '@services/api/types'
import UiMemoriesList from '../ui-groups/UiMemoriesList'
import getMemories from '../data-access-groups/getMemories'

type MemoriesListProps = {
  groupId: number
  searchParams: MemoriesSearchParams
}

const MemoriesList = async ({ groupId, searchParams }: MemoriesListProps) => {
  const memories = await getMemories(groupId, searchParams)
  return (
    <UiMemoriesList memories={memories} groupId={groupId} />
  )
}

export default MemoriesList
