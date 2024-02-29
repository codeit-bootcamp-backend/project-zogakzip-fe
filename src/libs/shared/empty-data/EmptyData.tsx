import classNames from 'classnames/bind'
import styles from './EmptyData.module.scss'
import Icon from '../icon/Icon'

const cx = classNames.bind(styles)

type EmptyDataProps = {
  title: string
  content: string
}

const EmptyData = ({ title, content }: EmptyDataProps) => {
  return (
    <div className={cx('container')}>
      <div className={cx('iconWrapper')}>
        <Icon name='empty' width={100} height={100} alt='빈 데이터' />
      </div>
      <div className={cx('title')}>{title}</div>
      <div className={cx('content')}>{content}</div>
    </div>
  )
}

export default EmptyData
