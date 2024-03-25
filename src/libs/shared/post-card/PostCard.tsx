import classNames from 'classnames/bind'
import styles from './PostCard.module.scss'
import { Post } from '@services/api/types'
import Image from 'next/image'
import Icon from '../icon/Icon'
import formatLikeCount from '../util-util/formatLikeCount'
import Link from 'next/link'
import { format } from 'date-fns/format'

const cx = classNames.bind(styles)

type PostCardProps = {
  card: Post
}

const PostCard = ({ card }: PostCardProps) => {
  const { id, nickname, isPublic, title, tags, location, moment, commentCount, likeCount, imageUrl } = card
  return (
    <div className={cx('container')}>
      {isPublic && (
        <Link href={`/posts/${id}`}>
          <Image
            className={cx('image')}
            src={imageUrl || '/images/default-image.svg'}
            width={335}
            height={335}
            alt='그룹 사진'
            priority
          />
        </Link>
      )}
      <div className={cx('contentContainer')}>
        <div className={cx('header')}>
          <div className={cx('nickname')}>{nickname}</div>
          <span className={cx('verticalLine')}>|</span>
          <div className={cx('isPublic')}>{isPublic ? '공개' : '비공개'}</div>
        </div>
        <div className={cx('body')}>
          <Link href={`/posts/${id}`}>
            <h3 className={cx('title')}>{title}</h3>
          </Link>
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
              <div className={cx('mapInfo')}>{`${location}  ·  ${format(new Date(moment ?? ''), 'yy.MM.dd')}`}</div>
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

export default PostCard
