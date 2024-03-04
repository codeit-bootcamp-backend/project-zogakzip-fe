// enum
export enum SortByGroups {
  mostPosted = 'mostPosted',
  latest = 'latest',
  mostLiked = 'mostLiked',
  mostBadge = 'mostBadge',
}

export enum SortByMemories {
  latest = 'latest',
  mostCommented = 'mostCommented',
  mostLiked = 'mostLiked',
}

// group
export type GroupsSearchParams = {
  sortBy: SortByGroups,
  keyword: string,
  isPublic: boolean
}

export type Group = {
  id: number,
  name: string,
  introduction: string | null,
  imageUrl: string | null,
  isPublic: boolean,
  likeCount: number,
  badgeCount: number | null,
  postCount: number,
  createdAt: string
}

export type GroupDetail = {
  id: number,
  name: string,
  imageUrl: string | null,
  isPublic: boolean,
  likeCount: number,
  badges: string[],
  postCount: number,
  createdAt: string,
  introduction: string
}

// post
export type MemoriesSearchParams = {
  sortBy: SortByMemories,
  keyword: string,
  isPublic: boolean
}

export type Memory = {
  id: number,
  nickname: string,
  title: string,
  imageUrl: string | null,
  tags: string[],
  location: string | null,
  moment: string | null,
  isPublic: boolean,
  likeCount: number,
  commentCount: number,
  createdAt: string
}

export type MemoryDetail = {
  content: string
} & Memory

// comments
export type Comment = {
  id: number,
  nickname: string,
  content: string,
  createdAt: string
}
