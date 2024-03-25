'use client'

import classNames from 'classnames/bind'
import styles from './GroupDetailLayout.module.scss'
import { GroupDetail } from '@services/api/types'
import Image from 'next/image'
import formatLikeCount from '@libs/shared/util-util/formatLikeCount'
import { differenceInDays } from 'date-fns/differenceInDays'
import { useEffect, useState } from 'react'
import LikeButton from '@libs/shared/button/LikeButton'

const cx = classNames.bind(styles)

type GroupDetailLayoutProps = {
  groupDetail: GroupDetail
  optionButtons: React.ReactNode
  badgeCarousel: React.ReactNode
}

const GroupDetailLayout = ({ groupDetail, optionButtons, badgeCarousel }: GroupDetailLayoutProps) => {
  const { id, badges, imageUrl, introduction, isPublic, likeCount: initialLikeCount, name, postCount, createdAt } = groupDetail
  const [likeCount, setLikeCount] = useState(initialLikeCount)

  useEffect(() => {
    setLikeCount(initialLikeCount)
  }, [initialLikeCount])

  return (
    <div className={cx('container')}>
      <Image
        src={imageUrl || '/images/default-image.svg'}
        width={262}
        height={273}
        alt='그룹 사진'
        className={cx('image')}
        priority
      />
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
          <div className={cx('badgesContainer')}>
            <div className={cx('label')}>획득 배지</div>
            {/* TODO-2: 캐러셀만 클라이언트 로딩 처리인 상태 개선 방법 생각해보기 */}
            <div className={cx('carouselWrapper')}>
              {badges?.length > 0 && badgeCarousel}
            </div>
          </div>
          <div className={cx('likeButtonWrapper')}>
            <LikeButton
              type='group'
              id={id}
              setLikeCount={setLikeCount}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default GroupDetailLayout
