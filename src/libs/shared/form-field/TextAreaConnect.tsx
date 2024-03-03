import { Control, Controller, ControllerProps, FieldPath, FieldPathValue, FieldValues, PathValue } from 'react-hook-form'
import TextArea, { TextAreaProps } from '../input/TextArea/TextArea'

type TextAreaConnectProps<
  F extends FieldValues,
  N extends FieldPath<F>
> = Omit<TextAreaProps, 'value' | 'error' | 'onChange' | 'helperText'> & {
  name: N
  control?: Control<F>
  defaultValue?: FieldPathValue<F, N>
  rules?: ControllerProps<F, N>['rules']
}

const TextAreaConnect = <
  F extends FieldValues,
  N extends FieldPath<F>
>({
  name,
  control,
  defaultValue,
  rules,
  ...textAreaProps
}: TextAreaConnectProps<F, N>) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={(defaultValue ?? '') as PathValue<F, N>}
      rules={rules}
      render={({ field, fieldState }) => (
        <TextArea
          {...field}
          {...textAreaProps}
          error={Boolean(fieldState.error)}
          helperText={fieldState.error?.message}
        />
      )}
    />
  )
}

export default TextAreaConnect
