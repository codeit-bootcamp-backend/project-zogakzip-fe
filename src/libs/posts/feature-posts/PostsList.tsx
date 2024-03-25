'use client'

import { Post, PostsSearchParams } from '@services/api/types'
import UiPostsList from '../ui-posts/UiPostsList'
import { useEffect, useState } from 'react'
import Button from '@libs/shared/button/Button'
import getPosts from '../data-access-posts/getPosts'
import PostCreateButton from './PostCreateButton'

type PostsListProps = {
  groupId: number
  initialPosts: Post[]
  initialPage: number
  initialHasNext: boolean
  searchParams: PostsSearchParams
}

const PostsList = ({ groupId, initialPosts, initialHasNext, initialPage, searchParams }: PostsListProps) => {
  const [posts, setPosts] = useState(initialPosts)
  const [page, setPage] = useState(initialPage)
  const [hasNext, setHasNext] = useState(initialHasNext)

  const handleClickMoreButton = async () => {
    const { data: morePosts, currentPage, totalPages } = await getPosts(groupId, { ...searchParams, page: page + 1 })
    setPosts([...posts, ...morePosts])
    setPage(currentPage)
    setHasNext(currentPage < totalPages)
  }

  useEffect(() => {
    setPosts(initialPosts)
    setPage(initialPage)
    setHasNext(initialHasNext)
  }, [initialPosts, initialPage, initialHasNext])

  return (
    <UiPostsList
      posts={posts}
      moreButton={(
        <Button
          size='extraLarge'
          color='bright'
          onClick={handleClickMoreButton}
          disabled={!hasNext}
        >더보기
        </Button>
      )}
      createPostButton={(
        <PostCreateButton
          groupId={groupId}
          size='large'
        />
      )}
    />
  )
}

export default PostsList
