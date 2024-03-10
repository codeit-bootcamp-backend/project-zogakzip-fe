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
}

export type PostsSearchParams = {
  sortBy: SortByPosts,
  keyword: string,
  isPublic: boolean
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
  // 참고: PUT에 patch를 사용하고, image는 dirty 상태일 때만 전송될 예정
  image?: File,
  isPublic: boolean
  password: string
}

export type GroupDeleteFormInput = Pick<GroupFormInput, 'password'>

export type GroupVerifyPasswordFormInput = Pick<GroupFormInput, 'password'>

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
} & Post

// post - input
export type PostCreateFormInput = {
  nickname: string,
  title: string,
  image?: File,
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
