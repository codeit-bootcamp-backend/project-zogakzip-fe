'use client'

import classNames from 'classnames/bind'
import styles from './LikeButton.module.scss'
import Icon from '../icon/Icon'
import postLikeGroup from '@libs/groups/data-access-groups/PostLikeGroup'
import useConfirmModal from '../modal/useConfirmModal'
import postLikePost from '@libs/posts/data-access-posts/postLikePost'

const cx = classNames.bind(styles)

type LikeButtonProps = {
  type: 'group' | 'post'
  id: number
}

const LikeButton = ({ type, id }: LikeButtonProps) => {
  const { renderConfirmModal, openConfirmModal } = useConfirmModal()

  // TODO: 꽃 날리는 애니메이션
  // TODO: 그룹 공감 정보 업데이트
  const handleClickLikeButton = async () => {
    try {
      if (type === 'group') await postLikeGroup(id)
      else await postLikePost(id)
    } catch (error) {
      openConfirmModal({
        title: '공감하기 실패',
        description: (error instanceof Error) ? error.message : '알 수 없는 오류가 발생했습니다.',
      })
    }
  }

  return (
    <>
      <button onClick={handleClickLikeButton} className={cx('container')}>
        <div className={cx('contentContainer')}>
          <Icon name='flower' width={22.88} height={22} alt='꽃' />
          <span className={cx('text')}>공감 보내기</span>
        </div>
      </button>
      {renderConfirmModal()}
    </>
  )
}

export default LikeButton
