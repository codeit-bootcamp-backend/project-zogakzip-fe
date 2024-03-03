import classNames from 'classnames/bind'
import styles from './TextField.module.scss'
import { forwardRef } from 'react'
import Hint from '../Hint/Hint'

const cx = classNames.bind(styles)

export type TextFieldProps = {
  width?: string
  error?: boolean
  helperText?: string
  rightIcon?: React.ReactNode
  className?: string
} & React.ComponentPropsWithoutRef<'input'>

const TextField = forwardRef<HTMLInputElement, TextFieldProps>(({
  width,
  error = false,
  helperText,
  rightIcon,
  className,
  ...inputProps
}, ref) => {
  return (
    <div className={cx('container')}>
      <div
        style={{ width }}
        className={cx('wrapper')}
      >
        <input
          ref={ref}
          className={cx('input', className, { error })}
          {...inputProps}
        />
        {rightIcon && (
          <div className={cx('rightIconWrapper')}>
            {rightIcon}
          </div>
        )}
      </div>
      {helperText && (<Hint message={helperText} />)}
    </div>
  )
})

TextField.displayName = 'TextField'

export default TextField
