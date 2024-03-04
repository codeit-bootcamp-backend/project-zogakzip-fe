import classNames from 'classnames/bind'
import styles from './GroupDetailLayout.module.scss'
import { GroupDetail } from '@services/api/types'
import Image from 'next/image'
import formatLikeCount from '@libs/shared/util-util/formatLikeCount'
import { differenceInDays } from 'date-fns/differenceInDays'

const cx = classNames.bind(styles)

type GroupDetailLayoutProps = {
  groupDetail: GroupDetail
  optionButtons: React.ReactNode
  likeButton: React.ReactNode
}

const GroupDetailLayout = ({ groupDetail, optionButtons, likeButton }: GroupDetailLayoutProps) => {
  const { badges, imageUrl, introduction, isPublic, likeCount, name, postCount, createdAt } = groupDetail
  return (
    <div className={cx('container')}>
      <Image src={imageUrl || '/images/default-image.svg'} width={262} height={273} alt='그룹 사진' className={cx('image')} />
      <div className={cx('detailContainer')}>
        <div className={cx('top')}>
          <div className={cx('header')}>
            <div className={cx('left')}>
              <h3 className={cx('diffDay')}>D+{differenceInDays(new Date(), createdAt)}</h3>
              <span className={cx('verticalLine')}>|</span>
              <h3 className={cx('isPublic')}>{isPublic ? '공개' : '비공개'}</h3>
            </div>
            <div className={cx('right')}>{optionButtons}</div>
          </div>
          <div className={cx('body')}>
            <h2 className={cx('name')}>{name}</h2>
            <div className={cx('countContainer')}>
              <h3 className={cx('countWrapper')}>추억<span className={cx('count')}>{postCount}</span></h3>
              <span className={cx('verticalLine')}>|</span>
              <h3 className={cx('countWrapper')}>그룹 공감<span className={cx('count')}>{formatLikeCount(likeCount)}</span></h3>
            </div>
          </div>
          <p className={cx('introduction')}>{introduction}</p>
        </div>
        <div className={cx('bottom')}>
          <div className={cx('badgesContainer')}>배지 캐러셀</div>
          <div className={cx('likeButtonWrapper')}>{likeButton}</div>
        </div>
      </div>
    </div>
  )
}

export default GroupDetailLayout
