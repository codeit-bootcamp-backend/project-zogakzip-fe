import classNames from 'classnames/bind'
import styles from './CommentsLayout.module.scss'

const cx = classNames.bind(styles)

type CommentsLayoutProps = {
  createCommentButton: React.ReactNode
  contents: React.ReactNode
}

const CommentsLayout = ({ contents, createCommentButton }: CommentsLayoutProps) => {
  return (
    <>
      <div className={cx('buttonWrapper')}>{createCommentButton}</div>
      {contents}
    </>
  )
}

export default CommentsLayout
