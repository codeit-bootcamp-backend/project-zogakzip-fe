import { SortByGroups, SortByMemories } from '@services/api/types'

export const SORT_BY_GROUPS_FILTERS = [
  {
    data: SortByGroups.mostLiked,
    text: '공감순',
  },
  {
    data: SortByGroups.latest,
    text: '최신순',
  },
  {
    data: SortByGroups.mostBadge,
    text: '획득 배지 순',
  },
  {
    data: SortByGroups.mostPosted,
    text: '게시글 많은 순',
  },
]

export const SORT_BY_MEMORIES_FILTERS = [
  {
    data: SortByMemories.mostLiked,
    text: '공감순',
  },
  {
    data: SortByMemories.latest,
    text: '최신순',
  },
  {
    data: SortByMemories.mostCommented,
    text: '공감순',
  },
]
