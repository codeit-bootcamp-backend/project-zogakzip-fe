import { Group, Memory } from '@services/api/types'

export const MOCK_GROUPS: Group[] = [
  {
    id: 1,
    name: '달봉이네 가족',
    introduction: '우리는 달봉이',
    imageUrl: '/images/image-example.png',
    isPublic: true,
    likeCount: 17589,
    badgeCount: 1,
    postCount: 1,
    createdAt: '2024-01-22T07:47:49.803Z',
  },
  {
    id: 2,
    name: '그룹2',
    introduction: '그룹2 소개',
    imageUrl: '/images/image-example.png',
    isPublic: false,
    likeCount: 2,
    badgeCount: 2,
    postCount: 2,
    createdAt: '2024-02-22T07:47:49.803Z',
  },
  {
    id: 3,
    name: '그룹3',
    introduction: '그룹3 소개',
    imageUrl: '/images/image-example.png',
    isPublic: true,
    likeCount: 3,
    badgeCount: 3,
    postCount: 3,
    createdAt: '2024-02-22T07:47:49.803Z',
  },
]

export const MOCK_MEMORIES: Memory[] = [
  {
    id: 1,
    nickname: '달봉이',
    title: '달봉이네 가족',
    imageUrl: '/images/image-example.png',
    tags: ['태그1'],
    location: '서울',
    moment: '2024-01-22',
    isPublic: true,
    likeCount: 17001,
    commentCount: 1,
    createdAt: '2024-01-22T07:47:49.803Z',
  },
  {
    id: 2,
    nickname: '달봉이',
    title: '달봉이네 가족',
    imageUrl: '/images/image-example.png',
    tags: ['태그1', '태그2'],
    location: '서울',
    moment: '2024-01-22',
    isPublic: false,
    likeCount: 17589,
    commentCount: 1,
    createdAt: '2024-01-22T07:47:49.803Z',
  },
  {
    id: 3,
    nickname: '달봉이',
    title: '달봉이네 가족',
    imageUrl: '/images/image-example.png',
    tags: ['태그1', '태그2'],
    location: '서울',
    moment: '2024-01-22',
    isPublic: true,
    likeCount: 17589,
    commentCount: 1,
    createdAt: '2024-01-22T07:47:49.803Z',
  },
]
