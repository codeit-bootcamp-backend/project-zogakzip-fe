import classNames from 'classnames/bind'
import styles from './TextArea.module.scss'
import { forwardRef } from 'react'
import Hint from '../Hint/Hint'

const cx = classNames.bind(styles)

export type TextAreaProps = {
  height?: string
  error?: boolean
  helperText?: string
} & React.ComponentPropsWithoutRef<'textarea'>

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(({
  height = '120px',
  error = false,
  helperText,
  ...textAreaProps
}, ref) => {
  return (
    <div className={cx('container')}>
      <div className={cx('wrapper')}>
        <textarea
          ref={ref}
          className={cx('textarea', { error })}
          style={{ height }}
          {...textAreaProps}
        />
      </div>
      {helperText && (<Hint message={helperText} />)}
    </div>
  )
})

TextArea.displayName = 'TextArea'

export default TextArea
