'use client'

import { forwardRef, useState } from 'react'
import ReactDatePicker, { ReactDatePickerProps } from 'react-datepicker'
import TextField from '../TextField/TextField'
import { ko } from 'date-fns/locale'
import Icon from '@libs/shared/icon/Icon'
import 'react-datepicker/dist/react-datepicker.css'
import classNames from 'classnames/bind'
import styles from './DatePicker.module.scss'

const cx = classNames.bind(styles)

export type DatePickerProps = {
  error?: boolean
  helperText?: string
  disabled?: boolean
  onChange: (date: Date) => void
} & Omit<Partial<ReactDatePickerProps>, 'onChange'>

const DatePicker = forwardRef<HTMLInputElement, DatePickerProps>(({
  error = false,
  helperText,
  disabled = false,
  onChange,
  ...restProps
}, ref) => {
  const [date, setDate] = useState<Date>()

  const handleChange = (date: Date) => {
    setDate(date)
    onChange(date)
  }

  return (
    <div className={cx('container')}>
      {/* TODO-3: 날짜 선택 후 텍스트 커서 컨트롤 */}
      <ReactDatePicker
        {...restProps}
        selected={date}
        onChange={handleChange}
        placeholderText='YYYY-MM-DD'
        dateFormat='yyyy-MM-dd'
        locale={ko}
        disabled={disabled}
        customInput={(
          <TextField
            ref={ref}
            error={error}
            placeholder='YYYY-MM-DD'
            helperText={helperText}
            disabled={disabled}
            rightIcon={<Icon name='calendar' width={24} height={24} alt='달력 아이콘' />}
          />
        )}
      />
    </div>
  )
})

DatePicker.displayName = 'DatePicker'

export default DatePicker
