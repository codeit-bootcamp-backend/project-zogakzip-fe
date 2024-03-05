import LikeButton from '@libs/shared/button/LikeButton'
import getPostDetail from '../data-access-posts/getPostDetail'
import PostDetailLayout from '../ui-posts/PostDetailLayout'
import PostOptionButtons from './PostOptionButtons'

type PostDetailProps = {
  postId: number
}

const PostDetail = async ({ postId }: PostDetailProps) => {
  const postDetail = await getPostDetail(postId)
  return (
    <PostDetailLayout
      postDetail={postDetail}
      optionButtons={<PostOptionButtons postId={postId} />}
      likeButton={<LikeButton type='post' id={postId} />}
    />
  )
}

export default PostDetail
