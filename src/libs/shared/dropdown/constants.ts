import { SortByGroups, SortByPosts } from '@services/api/types'

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
    text: '추억 많은 순',
  },
]

export const SORT_BY_POSTS_FILTERS = [
  {
    data: SortByPosts.mostLiked,
    text: '공감순',
  },
  {
    data: SortByPosts.latest,
    text: '최신순',
  },
  {
    data: SortByPosts.mostCommented,
    text: '댓글 많은 순',
  },
]
