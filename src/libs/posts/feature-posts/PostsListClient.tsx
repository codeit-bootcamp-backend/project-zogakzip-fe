'use client'

import { PostsSearchParams } from '@services/api/types'
import UiPostsList from '../ui-posts/UiPostsList'
import getPosts from '../data-access-posts/getPosts'
import useAsync from '@libs/shared/util-hook/useAsync'

type PostsListClientProps = {
  groupId: number
  searchParams: PostsSearchParams
}

const PostsListClient = ({ groupId, searchParams }: PostsListClientProps) => {
  const { data: posts, isLoading, error } = useAsync(() => getPosts(groupId, searchParams), [groupId, searchParams])

  // TODO: 올바른 로딩, 에러, 데이터 없음
  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error</div>
  if (!posts) return <div>Post not found</div>
  return (
    <UiPostsList posts={posts} groupId={groupId} />
  )
}

export default PostsListClient
