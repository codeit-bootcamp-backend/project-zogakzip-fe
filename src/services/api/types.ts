// 공통
export type PaginationResponse<T> = {
  currentPage: number,
  totalPages: number,
  totalItemCount: number
  data: T[],
}

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

// searchParams
export type GroupsSearchParams = {
  sortBy: SortByGroups,
  keyword: string,
  isPublic: boolean
  page?: number
}

export type PostsSearchParams = {
  sortBy: SortByPosts,
  keyword: string,
  isPublic: boolean
  page?: number
}

// group - data
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

export type IsPublicGroup = Pick<Group, 'isPublic' | 'id'>

// group - ipnput
export type GroupFormInput = {
  name: string,
  introduction: string,
  imageUrl: string | null,
  isPublic: boolean
  password: string
}

export type GroupDeleteFormInput = Pick<GroupFormInput, 'password'>

export type GroupVerificationFormInput = Pick<GroupFormInput, 'password'>

// post - data
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
  groupId: number
} & Post

export type IsPublicPost = Pick<Post, 'isPublic' | 'id'>

// post - input
export type PostCreateFormInput = {
  nickname: string,
  title: string,
  imageUrl: string | null,
  content: string,
  tags: string[],
  location: string,
  moment: string,
  isPublic: boolean,
  postPassword: string,
  groupPassword: string
}

export type PostEditFormInput = Omit<PostCreateFormInput, 'groupPassword'>

export type PostDeleteFormInput = Pick<PostCreateFormInput, 'postPassword'>

export type PostVerificationFormInput = {
  password: string
}

// comment - data
export type CommentType = {
  id: number,
  nickname: string,
  content: string,
  createdAt: string
}

// comment - input
export type CommentFormInput = {
  nickname: string,
  content: string,
  password: string
}

export type CommentDeleteFormInput = Pick<CommentFormInput, 'password'>
