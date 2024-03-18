import { PostsSearchParams } from '@services/api/types'
import UiPostsList from '../ui-posts/UiPostsList'
import getPosts from '../data-access-posts/getPosts'

type PostsListProps = {
  groupId: number
  searchParams: PostsSearchParams
}

const PostsList = async ({ groupId, searchParams }: PostsListProps) => {
  const { data: posts } = await getPosts(groupId, searchParams)
  return (
    <UiPostsList posts={posts} groupId={groupId} />
  )
}

export default PostsList
