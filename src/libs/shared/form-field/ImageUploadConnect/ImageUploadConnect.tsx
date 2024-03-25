'use client'

import classNames from 'classnames/bind'
import styles from './ImageUploadConnect.module.scss'
import { Controller, ControllerProps, FieldPath, FieldValues, useFormContext } from 'react-hook-form'
import { useRef } from 'react'
import Button from '../../button/Button'
import TextField from '../../input/TextField/TextField'
import uploadImage from './uploadImage'

const cx = classNames.bind(styles)

type ImageUploadConnectProps<
  F extends FieldValues,
  N extends FieldPath<F>
> = {
  name: N
  rules?: ControllerProps<F, N>['rules']
}

const ImageUploadConnect = <
  F extends FieldValues,
  N extends FieldPath<F>
>({
  name,
  rules,
}: ImageUploadConnectProps<F, N>) => {
  const { setValue } = useFormContext()
  const inputRef = useRef<HTMLInputElement>(null)

  const handleUploadImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    const imageUrl = await uploadImage(file)
    // TODO-3: 타입 문제 해결. 단언으로 임시 해결 중
    if (imageUrl) setValue(name as string, imageUrl)
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
              placeholder={value ?? '파일을 선택해 주세요'}
              value={value || ''}
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

export default ImageUploadConnect
