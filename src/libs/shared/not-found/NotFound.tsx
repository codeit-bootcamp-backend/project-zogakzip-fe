import classNames from 'classnames/bind'
import styles from './NotFound.module.scss'
import Icon from '../icon/Icon'

const cx = classNames.bind(styles)

type NotFoundProps = {

}

const NotFound = ({ }: NotFoundProps) => {
  return (
    <div className={cx('container')}>
      <div className={cx('iconWrapper')}>
        <Icon name='404' width={355} height={156} alt='not found' />
      </div>
      <div className={cx('title')}>찾을 수 없는 페이지입니다.</div>
      <div className={cx('content')}>요청하신 페이지가 사라졌거나, 잘못된 경로를 이용하셨어요.</div>
    </div>
  )
}

export default NotFound
