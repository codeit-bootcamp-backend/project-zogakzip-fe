// enum
export enum SortBy {
  latest = 'latest',
  mostPosted = 'mostPosted',
  mostLiked = 'mostLiked',
  mostBadge = 'mostBadge',
}

export type Group = {
  id: number,
  name: string,
  introduction: string,
  imageUrl: string,
  isPublic: boolean,
  likeCount: number,
  badgeCount: number,
  postCount: number,
  createdAt: string
}

export type Memory = {
  id: number,
  nickname: string,
  title: string,
  imageUrl: string,
  tags: string[],
  location: string,
  moment: string,
  isPublic: boolean,
  likeCount: number,
  commentCount: number,
  createdAt: string
}
