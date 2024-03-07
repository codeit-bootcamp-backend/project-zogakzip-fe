// enum
export enum SortByGroups {
  mostPosted = 'mostPosted',
  latest = 'latest',
  mostLiked = 'mostLiked',
  mostBadge = 'mostBadge',
}

export enum SortByPosts {
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

export type GroupFormInput = {
  name: string,
  introduction: string,
  // 참고: PUT에 patch를 사용하고, image는 dirty 상태일 때만 전송될 예정
  image?: File,
  isPublic: boolean
}

// post
export type PostsSearchParams = {
  sortBy: SortByPosts,
  keyword: string,
  isPublic: boolean
}

export type Post = {
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

export type PostDetail = {
  content: string
} & Post

// comments
export type CommentType = {
  id: number,
  nickname: string,
  content: string,
  createdAt: string
}
