import classNames from 'classnames/bind'
import styles from './Badge.module.scss'

const cx = classNames.bind(styles)

type BadgeProps = {
  text: string
}

const Badge = ({ text }: BadgeProps) => {
  return (
    <div className={cx('container')}>
      {text}
    </div>
  )
}

export default Badge
