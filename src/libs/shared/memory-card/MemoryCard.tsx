import classNames from 'classnames/bind'
import styles from './MemoryCard.module.scss'
import { Memory } from '@services/api/types'
import Image from 'next/image'
import Icon from '../icon/Icon'
import formatDate from '../util-util/formatDate'
import formatLikeCount from '../util-util/formatLikeCount'

const cx = classNames.bind(styles)

type MemoryCardProps = {
  card: Memory
}

const MemoryCard = ({ card }: MemoryCardProps) => {
  const { nickname, isPublic, title, tags, location, moment, commentCount, likeCount, imageUrl } = card
  return (
    <div className={cx('container')}>
      {isPublic && <Image className={cx('image')} src={imageUrl} width={335} height={335} alt='그룹 사진' />}
      <div className={cx('contentContainer')}>
        <div className={cx('header')}>
          <div className={cx('nickname')}>{nickname}</div>
          <span className={cx('verticalLine')}>|</span>
          <div className={cx('isPublic')}>{isPublic ? '공개' : '비공개'}</div>
        </div>
        <div className={cx('body')}>
          <h3 className={cx('title')}>{title}</h3>
          {isPublic
            && (
              <div className={cx('tagsContainer')}>
                {tags.map((tag, idx) => <div key={idx} className={cx('tag')}>{`#${tag}`}</div>)}
              </div>
            )}
        </div>
        <div className={cx('footer')}>
          {isPublic
            && (
              // suppressHydrationWarning: Date 함수가 hydration error를 발생시킬 것이 우려되어 추가함
              <div suppressHydrationWarning className={cx('mapInfo')}>{`${location}  ·  ${formatDate(moment)}`}</div>
            )}
          <div className={cx('countInfo')}>
            <div className={cx('countContainer')}>
              <Icon name='flower' width={18} height={18} alt='꽃' />
              <div className={cx('count')}>{formatLikeCount(likeCount)}</div>
            </div>
            <div className={cx('countContainer')}>
              <Icon name='bubble' width={18} height={18} alt='말풍선' />
              <div className={cx('count')}>{commentCount}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MemoryCard
