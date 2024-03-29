'use client'

import classNames from 'classnames/bind'
import styles from './GroupForm.module.scss'
import { GroupFormInput } from '@services/api/types'
import { FormProvider, useForm } from 'react-hook-form'
import TextFieldConnect from '@libs/shared/form-field/TextFieldConnect'
import ImageUploadConnect from '@libs/shared/form-field/ImageUploadConnect/ImageUploadConnect'
import ToggleConnect from '@libs/shared/form-field/ToggleConnect'
import Button from '@libs/shared/button/Button'
import FieldLabel from '@libs/shared/input/FieldLabel/FieldLabel'
import TextAreaConnect from '@libs/shared/form-field/TextAreaConnect'
import { PASSWORD_VALIDATION_REGEXP } from '@libs/shared/util-constants/constants'

const cx = classNames.bind(styles)

type GroupFormProps = {
  defaultValues?: Omit<GroupFormInput, 'password'>
  onSubmit: (data: GroupFormInput) => void
}

const GroupForm = ({ defaultValues, onSubmit }: GroupFormProps) => {
  const methods = useForm<GroupFormInput>({ defaultValues })
  const { handleSubmit } = methods
  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={cx('inputs')}>
          <div className={cx('name')}>
            <FieldLabel label='그룹명' />
            <TextFieldConnect
              name='name'
              placeholder='그룹명을 입력해 주세요'
              rules={{
                validate: value => value.trim() !== '' || '필수 입력사항입니다.',
                maxLength: { value: 30, message: '30자 이내로 입력해 주세요' },
              }}
            />
          </div>
          <div className={cx('image')}>
            <FieldLabel label='대표 이미지' />
            <ImageUploadConnect
              name='imageUrl'
            />
          </div>
          <div className={cx('introduction')}>
            <FieldLabel label='그룹 소개' />
            <TextAreaConnect
              name='introduction'
              placeholder='그룹을 소개해 주세요'
              rules={{
                required: '필수 입력사항입니다.',
                maxLength: { value: 150, message: '150자 이내로 입력해 주세요' },
              }}
            />
          </div>
          <div className={cx('isPublic')}>
            <FieldLabel
              label='그룹 공개 선택'
              marginBottom='20px'
            />
            <ToggleConnect
              name='isPublic'
              defaultValue={defaultValues?.isPublic ?? true}
            />
          </div>
          <div className={cx('password')}>
            <FieldLabel label={defaultValues ? '수정 권한 인증' : '비밀번호 생성'} />
            <TextFieldConnect
              name='password'
              type='password'
              placeholder={defaultValues ? '그룹 비밀번호를 입력해 주세요' : '그룹 비밀번호를 생성해 주세요'}
              rules={{
                required: '필수 입력사항입니다.',
                pattern: {
                  value: PASSWORD_VALIDATION_REGEXP,
                  message: '영문, 숫자 조합 8~16자리로 입력해주세요',
                },
              }}
            />
          </div>
        </div>
        <Button size='large' type='submit'>{defaultValues ? '수정하기' : '만들기'}</Button>
      </form>
    </FormProvider>
  )
}

export default GroupForm
