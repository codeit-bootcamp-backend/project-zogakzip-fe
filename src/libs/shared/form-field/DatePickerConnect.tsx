import { Controller, ControllerProps, FieldPath, FieldPathValue, FieldValues } from 'react-hook-form'
import DatePicker, { DatePickerProps } from '../input/DatePicker/DatePicker'
import { format } from 'date-fns'

type DatePickerConnectProps<
  F extends FieldValues,
  N extends FieldPath<F>
> = Omit<DatePickerProps, 'value' | 'error' | 'onChange' | 'helperText'> & {
  name: N
  defaultValue?: FieldPathValue<F, N>
  rules?: ControllerProps<F, N>['rules']
}

const DatePickerConnect = <
  F extends FieldValues,
  N extends FieldPath<F>
>({
  name,
  defaultValue,
  rules,
  ...datePickerProps
}: DatePickerConnectProps<F, N>) => {
  return (
    <Controller
      name={name}
      defaultValue={defaultValue}
      rules={rules}
      render={({ field, fieldState }) => (
        // TODO-1: 추억 올리기 이후 인풋 값 초기화 안되고 있음
        <DatePicker
          {...field}
          {...datePickerProps}
          error={Boolean(fieldState.error)}
          helperText={fieldState.error?.message}
          onChange={(date) => field.onChange(date && format(date, 'yyyy-MM-dd'))}
        />
      )}
    />
  )
}

export default DatePickerConnect
