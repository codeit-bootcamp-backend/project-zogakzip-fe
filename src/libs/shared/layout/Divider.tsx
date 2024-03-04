import classNames from 'classnames/bind'
import styles from './Divider.module.scss'

const cx = classNames.bind(styles)

type DividerProps = {
  marginBlock: string
  color: 'black' | 'gray'
}

const Divider = ({ marginBlock, color }: DividerProps) => {
  return (
    <hr className={cx('line', color)} style={{ marginBlock }} />
  )
}

export default Divider
