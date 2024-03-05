import classNames from 'classnames/bind'
import styles from './CommentLayout.module.scss'
import { CommentType } from '@services/api/types'
import Divider from '@libs/shared/layout/Divider'
import { format } from 'date-fns/format'

const cx = classNames.bind(styles)

type CommentLayoutProps = {
  comment: CommentType
  optionButtons: React.ReactNode
}

const CommentLayout = ({ comment, optionButtons }: CommentLayoutProps) => {
  const { content, createdAt, nickname } = comment
  return (
    <div className={cx('container')}>
      <div className={cx('header')}>
        <h4 className={cx('nickname')}>{nickname}</h4>
        <h4 className={cx('createdAt')}>{format(new Date(createdAt), 'yy.MM.dd HH:mm')}</h4>
      </div>
      <div className={cx('body')}>
        <p className={cx('content')}>{content}</p>
        {optionButtons}
      </div>
      <Divider color='gray' marginTop='20px' marginBottom='0' />
    </div>
  )
}

export default CommentLayout
