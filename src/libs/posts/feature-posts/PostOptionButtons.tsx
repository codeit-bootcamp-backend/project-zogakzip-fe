'use client'

import OptionButtonsLayout from '@libs/shared/layout/OptionButtonsLayout'

type PostOptionButtonsProps = {
  postId: number
}

const PostOptionButtons = ({ postId }: PostOptionButtonsProps) => {
  return (
    <OptionButtonsLayout
      editText='추억 수정하기'
      deleteText='추억 삭제하기'
      onClickEdit={() => console.log(`${postId}번 추억 수정하기`)}
      onClickDelete={() => console.log(`${postId}번 추억 삭제하기`)}
    />
  )
}

export default PostOptionButtons
