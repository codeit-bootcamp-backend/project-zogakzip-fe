'use client'

import classNames from 'classnames/bind'
import styles from './LikeButton.module.scss'
import Icon from '../icon/Icon'

const cx = classNames.bind(styles)

type LikeButtonProps = {

}

const LikeButton = ({ }: LikeButtonProps) => {
  // TODO: 내부에서 바로 API 처리하기
  // TODO: 꽃 날리는 애니메이션
  const handleSendLike = () => {
    console.log('좋아요 보내기')
  }

  return (
    <button onClick={handleSendLike} className={cx('container')}>
      <div className={cx('contentContainer')}>
        <Icon name='flower' width={22.88} height={22} alt='꽃' />
        <span className={cx('text')}>공감 보내기</span>
      </div>
    </button>
  )
}

export default LikeButton