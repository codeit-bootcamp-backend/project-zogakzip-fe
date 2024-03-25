'use client'

import { Group, GroupsSearchParams } from '@services/api/types'
import UiGroupsList from '../ui-groups/UiGroupsList'
import { useEffect, useState } from 'react'
import Button from '@libs/shared/button/Button'
import getGroups from '../data-access-groups/getGroups'

type GroupsListProps = {
  initialGroups: Group[]
  initialPage: number
  initialHasNext: boolean
  searchParams: GroupsSearchParams
}

const GroupsList = ({ initialGroups, initialPage, initialHasNext, searchParams }: GroupsListProps) => {
  const [groups, setGroups] = useState(initialGroups)
  const [page, setPage] = useState(initialPage)
  const [hasNext, setHasNext] = useState(initialHasNext)

  const handleClickMoreButton = async () => {
    const { data: moreGroups, currentPage, totalPages } = await getGroups({ ...searchParams, page: page + 1 })
    setGroups([...groups, ...moreGroups])
    setPage(currentPage)
    setHasNext(currentPage < totalPages)
  }

  useEffect(() => {
    setGroups(initialGroups)
    setPage(initialPage)
    setHasNext(initialHasNext)
  }, [initialGroups, initialPage, initialHasNext])

  return (
    <UiGroupsList
      groups={groups}
      moreButton={(
        <Button
          size='extraLarge'
          color='bright'
          onClick={handleClickMoreButton}
          disabled={!hasNext}
        >더보기
        </Button>
      )}
    />
  )
}

export default GroupsList
