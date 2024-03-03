import { Controller, FieldPath, FieldPathValue, FieldValues } from 'react-hook-form'
import Toggle, { ToggleProps } from '../toggle/Toggle'

type ToggleConnectProps<
  F extends FieldValues,
  N extends FieldPath<F>
> = Omit<Partial<ToggleProps>, 'onClick'> & {
  name: N
  defaultValue?: FieldPathValue<F, N>
}

const ToggleConnect = <
  F extends FieldValues,
  N extends FieldPath<F>
>({
  name,
  defaultValue,
  ...toggleProps
}: ToggleConnectProps<F, N>) => {
  return (
    <Controller
      name={name}
      defaultValue={defaultValue}
      render={({ field }) => (
        <Toggle
          {...toggleProps}
          active={field.value}
          onClick={(payload) => { field.onChange(payload) }}
        />
      )}
    />
  )
}

export default ToggleConnect
