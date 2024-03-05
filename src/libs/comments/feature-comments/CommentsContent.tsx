import classNames from 'classnames/bind'
import styles from './CommentsContent.module.scss'
import { CommentType } from '@services/api/types'
import Comment from './Comment'
import Pagination from '@libs/shared/pagination/Pagination'
import Divider from '@libs/shared/layout/Divider'

const cx = classNames.bind(styles)

type CommentsContentProps = {
  comments: CommentType[]
}

const CommentsContent = ({ comments }: CommentsContentProps) => {
  return (
    <>
      <h3 className={cx('label')}>댓글 {comments.length}</h3>
      <Divider marginTop='10px' marginBottom='30px' color='black' />
      {comments.length > 0
        ? (
          <>
            <div className={cx('commentsContainer')}>
              {comments.map((comment) => (
                <Comment key={comment.id} comment={comment} />
              ))}
            </div>
            <div className={cx('paginationWrapper')}>
              <Pagination currentPage={1} totalPages={10} scroll={false} />
            </div>
          </>
        )
        : (
          <div className={cx('empty')}>
            <div className={cx('title')}>등록된 댓글이 없습니다.</div>
            <div className={cx('content')}>가장 먼저 댓글을 등록해 보세요!</div>
          </div>
        )}
    </>
  )
}

export default CommentsContent