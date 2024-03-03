// enum
export enum SortBy {
  latest = 'latest',
  mostPosted = 'mostPosted',
  mostLiked = 'mostLiked',
  mostBadge = 'mostBadge',
}

// group
export type PublicGroup = {
  id: number,
  name: string,
  introduction: string,
  imageUrl: string | null,
  isPublic: true,
  likeCount: number,
  badgeCount: number,
  postCount: number,
  createdAt: string
}

export type PrivateGroup = {
  id: number,
  name: string,
  introduction: null,
  imageUrl: null,
  isPublic: false,
  likeCount: number,
  badgeCount: null,
  postCount: number,
  createdAt: string
}

export type GroupDetail = {
  id: number,
  name: string,
  imageUrl: string,
  isPublic: boolean,
  likeCount: number,
  badges: string[],
  postCount: number,
  createdAt: string,
  introduction: string
}

// post
export type PublicMemory = {
  id: number,
  nickname: string,
  title: string,
  imageUrl: string | null,
  tags: string[],
  location: string,
  moment: string,
  isPublic: true,
  likeCount: number,
  commentCount: number,
  createdAt: string
}

export type PrivateMemory = {
  id: number,
  nickname: string,
  title: string,
  imageUrl: null,
  tags: [],
  location: null,
  moment: null,
  isPublic: false,
  likeCount: number,
  commentCount: number,
  createdAt: string
}

export type MemoryDetail = {
  content: string
} & PublicMemory

// comments
export type Comment = {
  id: number,
  nickname: string,
  content: string,
  createdAt: string
}
