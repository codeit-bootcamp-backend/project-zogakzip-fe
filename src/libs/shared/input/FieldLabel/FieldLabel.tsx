import classNames from 'classnames/bind'
import styles from './FieldLabel.module.scss'

const cx = classNames.bind(styles)

type FieldLabelProps = {
  label: string
  marginBottom?: string
}

const FieldLabel = ({ label, marginBottom = '10px' }: FieldLabelProps) => {
  return (
    <div className={cx('container')} style={{ marginBottom }}>
      {label}
    </div>
  )
}

export default FieldLabel
