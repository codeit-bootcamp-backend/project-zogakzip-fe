'use client'

import PageLayout from '@libs/shared/layout/PageLayout'
import useAsync from '@libs/shared/util-hook/useAsync'
import getPostDetail from '../data-access-posts/getPostDetail'
import getComments from '@libs/comments/data-access-comments/getComments'
import PostDetailLayout from '../ui-posts/PostDetailLayout'
import PostOptionButtons from './PostOptionButtons'
import CommentsLayout from '@libs/comments/ui-comments/CommentsLayout'
import CommentCreateButton from '@libs/comments/feature-comments/CommentCreateButton'
import CommentsList from '@libs/comments/feature-comments/CommentsList'
import { CommentType, PaginationResponse, PostDetail } from '@services/api/types'
import { useEffect, useState } from 'react'
import { COMMENTS_PAGE_SIZE } from '@libs/shared/pagination/constants'

type PrivatePostVerifiedPageProps = {
  postId: number
  page: number
}

const PrivatePostVerifiedPage = ({ postId, page }: PrivatePostVerifiedPageProps) => {
  const { data: postDetailFetchData, isLoading } = useAsync(() => getPostDetail(postId), [postId])
  const { data: commentsPaginationFetchData } = useAsync(() => getComments(postId, page), [postId, page])
  const [postDetail, setPostDetail] = useState<PostDetail>()
  const [commentsPagination, setCommentsPagination] = useState<PaginationResponse<CommentType>>()

  useEffect(() => {
    if (postDetailFetchData) setPostDetail(postDetailFetchData)
  }, [postDetailFetchData])
  useEffect(() => {
    if (commentsPaginationFetchData) setCommentsPagination(commentsPaginationFetchData)
  }, [commentsPaginationFetchData])

  if (isLoading || !postDetail) return null
  return (
    <PageLayout paddingBlock='40px 120px'>
      <PostDetailLayout
        postDetail={postDetail}
        optionButtons={(
          <PostOptionButtons
            postId={postId}
            postDetail={postDetail}
            onSuccessEdit={(response) => {
              setPostDetail(response)
            }}
          />
        )}
      />
      {commentsPagination && (
        <CommentsLayout
          createCommentButton={(
            <CommentCreateButton
              postId={postId}
              totalItemCount={commentsPagination.totalItemCount}
              onSuccessCreate={(response) => {
                setCommentsPagination((prev) => {
                  if (!prev) return
                  return {
                    currentPage: 1,
                    totalPages: Math.ceil((prev.totalItemCount + 1) / COMMENTS_PAGE_SIZE),
                    totalItemCount: prev.totalItemCount + 1,
                    data: [...prev.data, response],
                  }
                })
              }}
            />
          )}
          contents={(
            <CommentsList
              comments={commentsPagination.data}
              currentPage={commentsPagination.currentPage}
              totalPages={commentsPagination.totalPages}
              totalItemCount={commentsPagination.totalItemCount}
              onSuccessEdit={(response) => {
                setCommentsPagination((prev) => {
                  if (!prev) return
                  return {
                    ...prev,
                    data: prev.data.map((comment) => (comment.id === response.id ? response : comment)),
                  }
                })
              }}
              onSuccessDelete={(commentId) => {
                setCommentsPagination((prev) => {
                  if (!prev) return
                  return {
                    currentPage: 1,
                    totalPages: Math.ceil((prev.totalItemCount - 1) / COMMENTS_PAGE_SIZE),
                    totalItemCount: prev.totalItemCount - 1,
                    data: prev.data.filter((comment) => comment.id !== commentId),
                  }
                })
              }}
            />
          )}
        />
      )}
    </PageLayout>
  )
}

export default PrivatePostVerifiedPage
