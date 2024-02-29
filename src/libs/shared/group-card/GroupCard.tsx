import classNames from 'classnames/bind'
import styles from './GroupCard.module.scss'
import Image from 'next/image'
import { Group } from '@services/api/types'
import DiffDay from './DiffDay'
import Icon from '../icon/Icon'
import formatLikeCount from '../util-util/formatLikeCount'

const cx = classNames.bind(styles)

type GroupCardProps = {
  card: Group
}

const GroupCard = ({ card }: GroupCardProps) => {
  const { name, createdAt, introduction, imageUrl, isPublic, likeCount, badgeCount, postCount } = card

  return (
    <div className={cx('container')}>
      {isPublic && <Image className={cx('image')} src={imageUrl} width={335} height={335} alt='그룹 사진' />}
      <div className={cx('contentContainer')}>
        <div className={cx('header')}>
          <DiffDay createdAt={createdAt} />
          <span className={cx('verticalLine')}>|</span>
          <div className={cx('isPublic')}>{isPublic ? '공개' : '비공개'}</div>
        </div>
        <div className={cx('body')}>
          <h3 className={cx('name')}>{name}</h3>
          {isPublic && <p className={cx('introduction')}>{introduction}</p>}
        </div>
        <div className={cx('footer')}>
          {isPublic && (
            <div className={cx('countContainer')}>
              <h4 className={cx('label')}>획득 배지</h4>
              <div className={cx('count')}>{badgeCount}</div>
            </div>
          )}
          <div className={cx('countContainer')}>
            <h4 className={cx('label')}>추억</h4>
            <div className={cx('count')}>{postCount}</div>
          </div>
          <div className={cx('countContainer')}>
            <h4 className={cx('label')}>그룹 공감</h4>
            <div className={cx('count')}>
              <Icon name='flower' width={18} height={18} alt='꽃' />
              <span className={cx('likeCount')}>{formatLikeCount(likeCount)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GroupCard
