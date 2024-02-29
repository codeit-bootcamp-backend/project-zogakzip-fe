import { SortBy } from '@services/api/types'

export const SORT_BY_FILTERS = [
  {
    data: SortBy.latest,
    text: '최신순',
  },
  {
    data: SortBy.mostLiked,
    text: '공감순',
  },
  {
    data: SortBy.mostBadge,
    text: '획득 배지 순',
  },
  {
    data: SortBy.mostPosted,
    text: '게시글 많은 순',
  },
]
