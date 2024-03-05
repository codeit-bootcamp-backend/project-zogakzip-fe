import classNames from 'classnames/bind'
import styles from './Divider.module.scss'

const cx = classNames.bind(styles)

type DividerProps = {
  marginTop: string
  marginBottom: string
  color: 'black' | 'gray'
}

const Divider = ({ marginTop, marginBottom, color }: DividerProps) => {
  return (
    <hr className={cx('line', color)} style={{ marginTop, marginBottom }} />
  )
}

export default Divider
