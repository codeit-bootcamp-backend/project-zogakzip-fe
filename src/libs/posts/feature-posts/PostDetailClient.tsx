'use client'

import LikeButton from '@libs/shared/button/LikeButton'
import getPostDetail from '../data-access-posts/getPostDetail'
import PostDetailLayout from '../ui-posts/PostDetailLayout'
import PostOptionButtons from './PostOptionButtons'
import useAsync from '@libs/shared/util-hook/useAsync'

type PostDetailClientProps = {
  postId: number
}

const PostDetailClient = ({ postId }: PostDetailClientProps) => {
  const { data: postDetail, isLoading, error } = useAsync(() => getPostDetail(postId), [postId])

  // TODO: 올바른 로딩, 에러, 데이터 없음
  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error</div>
  if (!postDetail) return <div>Group not found</div>
  return (
    <PostDetailLayout
      postDetail={postDetail}
      optionButtons={<PostOptionButtons postId={postId} postDetail={postDetail} />}
      likeButton={<LikeButton type='post' id={postId} />}
    />
  )
}

export default PostDetailClient
