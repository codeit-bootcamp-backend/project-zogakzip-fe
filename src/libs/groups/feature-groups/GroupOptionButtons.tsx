'use client'

import OptionButtonsLayout from '@libs/shared/layout/OptionButtonsLayout'

type GroupOptionButtonsProps = {
  groupId: number
}

const GroupOptionButtons = ({ groupId }: GroupOptionButtonsProps) => {
  return (
    <OptionButtonsLayout
      editText='그룹 수정하기'
      deleteText='그룹 삭제하기'
      onClickEdit={() => console.log(`${groupId}번 그룹 수정하기`)}
      onClickDelete={() => console.log(`${groupId}번 그룹 삭제하기`)}
    />
  )
}

export default GroupOptionButtons
