'use client'

import classNames from 'classnames/bind'
import styles from './PostDetailLayout.module.scss'
import { PostDetail } from '@services/api/types'
import Divider from '@libs/shared/layout/Divider'
import Image from 'next/image'
import { format } from 'date-fns/format'
import Icon from '@libs/shared/icon/Icon'
import formatLikeCount from '@libs/shared/util-util/formatLikeCount'
import LikeButton from '@libs/shared/button/LikeButton'
import { useEffect, useState } from 'react'

const cx = classNames.bind(styles)

type PostDetailLayoutProps = {
  postDetail: PostDetail
  optionButtons: React.ReactNode
}

const PostDetailLayout = ({ postDetail, optionButtons }: PostDetailLayoutProps) => {
  const { id, commentCount, content, imageUrl, isPublic, likeCount: initialLikeCount, location, moment, nickname, tags, title } = postDetail

  const [likeCount, setLikeCount] = useState(initialLikeCount)

  useEffect(() => {
    setLikeCount(initialLikeCount)
  }, [initialLikeCount])

  return (
    <>
      <div className={cx('titleContainer')}>
        <div className={cx('top')}>
          <div className={cx('header')}>
            <div className={cx('left')}>
              <h3 className={cx('nickname')}>{nickname}</h3>
              <span className={cx('verticalLine')}>|</span>
              <h3 className={cx('isPublic')}>{isPublic ? '공개' : '비공개'}</h3>
            </div>
            <div className={cx('right')}>{optionButtons}</div>
          </div>
          <h2 className={cx('title')}>{title}</h2>
          <div className={cx('tags')}>
            {tags.map((tag, idx) => <div key={idx} className={cx('tag')}>{`#${tag}`}</div>)}
          </div>
        </div>
        <div className={cx('bottom')}>
          <div className={cx('left')}>
            <h3 className={cx('mapInfo')}>{`${location}  ·  ${format(new Date(moment ?? ''), 'yy.MM.dd')}`}</h3>
            <h3 className={cx('countInfo')}>
              <div className={cx('countContainer')}>
                <Icon name='flower' width={24} height={24} alt='꽃' />
                <div className={cx('count')}>{formatLikeCount(likeCount)}</div>
              </div>
              <div className={cx('countContainer')}>
                <Icon name='bubble' width={24} height={24} alt='말풍선' />
                <div className={cx('count')}>{commentCount}</div>
              </div>
            </h3>
          </div>
          <div className={cx('right')}>
            <LikeButton
              type='post'
              id={id}
              setLikeCount={setLikeCount}
            />
          </div>
        </div>
      </div>
      <Divider color='gray' marginTop='60px' marginBottom='60px' />
      <div className={cx('contentContainer')}>
        <Image
          className={cx('image')}
          src={imageUrl || '/images/default-image.svg'}
          width={780}
          height={780}
          alt='추억 사진'
          priority
        />
        <p className={cx('content')}>{content}</p>
      </div>
    </>
  )
}

export default PostDetailLayout
