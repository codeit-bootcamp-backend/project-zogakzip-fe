import classNames from 'classnames/bind'
import styles from './ImageUpload.module.scss'
import { Controller, ControllerProps, FieldPath, FieldValues, useFormContext } from 'react-hook-form'
import { useRef } from 'react'
import Button from '../../button/Button'
import TextField from '../../input/TextField/TextField'

const cx = classNames.bind(styles)

type ImageUploadProps<
  F extends FieldValues,
  N extends FieldPath<F>
> = {
  name: N
  rules?: ControllerProps<F, N>['rules']
  defaultImageUrl?: string
}

const ImageUpload = <
  F extends FieldValues,
  N extends FieldPath<F>
>({
  name,
  rules,
  defaultImageUrl,
}: ImageUploadProps<F, N>) => {
  const { setValue } = useFormContext()
  const inputRef = useRef<HTMLInputElement>(null)

  const handleUploadImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    setValue('image', file)
  }

  return (
    <div className={cx('container')}>
      <Controller
        name={name}
        rules={rules}
        render={({ field: { value } }) => (
          <>
            <TextField
              disabled
              placeholder={defaultImageUrl ?? '파일을 선택해 주세요'}
              value={value?.name || ''}
            />
            <label>
              <input
                type='file'
                onChange={handleUploadImage}
                accept="image/*"
                hidden
                ref={inputRef}
              />
              <Button type='button' size='small' color='bright' onClick={() => inputRef.current?.click()}>파일 선택</Button>
            </label>
          </>
        )}
      />
    </div>
  )
}

export default ImageUpload
