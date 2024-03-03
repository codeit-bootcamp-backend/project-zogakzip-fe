import classNames from 'classnames/bind'
import styles from './Hint.module.scss'

const cx = classNames.bind(styles)

type HintProps = {
  message: string
}

const Hint = ({ message }: HintProps) => {
  return (
    <div className={cx('container')}>
      {message}
    </div>
  )
}

export default Hint
