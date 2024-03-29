'use client'

import classNames from 'classnames/bind'
import styles from './PostForm.module.scss'
import Button from '@libs/shared/button/Button'
import { FormProvider, useForm } from 'react-hook-form'
import { PostCreateFormInput } from '@services/api/types'
import FieldLabel from '@libs/shared/input/FieldLabel/FieldLabel'
import TextFieldConnect from '@libs/shared/form-field/TextFieldConnect'
import ImageUploadConnect from '@libs/shared/form-field/ImageUploadConnect/ImageUploadConnect'
import TextAreaConnect from '@libs/shared/form-field/TextAreaConnect'
import DatePickerConnect from '@libs/shared/form-field/DatePickerConnect'
import ToggleConnect from '@libs/shared/form-field/ToggleConnect'
import TagsFieldConnect from '@libs/shared/form-field/TagsFieldConnect'
import useModal from '@libs/shared/modal/useModal'
import FormModal from '@libs/shared/modal/FormModal'
import AuthFormContent from '@libs/shared/form-field/AuthFormContent/AuthFormContent'
import { PASSWORD_VALIDATION_REGEXP } from '@libs/shared/util-constants/constants'

const cx = classNames.bind(styles)

type PostCreateFormProps = {
  authCheckFormModal: ReturnType<typeof useModal>
  onSubmit: (data: PostCreateFormInput) => void
}

const PostCreateForm = ({
  authCheckFormModal,
  onSubmit,
}: PostCreateFormProps) => {
  // 참고: trigger 이후에 onChange 시 error 확인이 안돼서 넣었음. 렌더링 성능 확인 필요
  const methods = useForm<PostCreateFormInput>({ defaultValues: { tags: [] }, mode: 'onChange' })
  const { handleSubmit, trigger, reset } = methods

  const handleClickCompletedButton = async () => {
    const isValid = await trigger()
    if (isValid) {
      authCheckFormModal.openModal()
    }
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={async (e) => { await handleSubmit(onSubmit)(e); reset() }}>
        <div className={cx('container')}>
          <div className={cx('section')}>
            <div className={cx('nickname')}>
              <FieldLabel label='닉네임' />
              <TextFieldConnect
                name='nickname'
                placeholder='닉네임을 입력해 주세요'
                rules={{
                  validate: value => value.trim() !== '' || '필수 입력사항입니다.',
                  maxLength: { value: 20, message: '20자 이내로 입력해 주세요' },
                }}
              />
            </div>
            <div className={cx('title')}>
              <FieldLabel label='제목' />
              <TextFieldConnect
                name='title'
                placeholder='제목을 입력해 주세요'
                rules={{
                  validate: value => value.trim() !== '' || '필수 입력사항입니다.',
                  maxLength: { value: 50, message: '50자 이내로 입력해 주세요' },
                }}
              />
            </div>
            <div className={cx('image')}>
              <FieldLabel label='이미지' />
              <ImageUploadConnect
                name='imageUrl'
              />
            </div>
            <div className={cx('content')}>
              <FieldLabel label='본문' />
              <TextAreaConnect
                name='content'
                placeholder='본문 내용을 입력해 주세요'
                rules={{
                  required: '필수 입력사항입니다.',
                  maxLength: { value: 500, message: '500자 이내로 입력해 주세요' },
                }}
              />
            </div>
          </div>
          <div className={cx('divider')} />
          <div className={cx('section')}>
            <div className={cx('tags')}>
              <FieldLabel label='태그' />
              <TagsFieldConnect
                name='tags'
              />
            </div>
            <div className={cx('location')}>
              <FieldLabel label='장소' />
              <TextFieldConnect
                name='location'
                placeholder='장소를 입력해 주세요'
                rules={{
                  validate: value => value.trim() !== '' || '필수 입력사항입니다.',
                  maxLength: { value: 10, message: '10자 이내로 입력해 주세요' },
                }}
              />
            </div>
            <div className={cx('moment')}>
              <FieldLabel label='추억의 순간' />
              <DatePickerConnect
                name='moment'
                rules={{
                  required: '필수 입력사항입니다.',
                }}
              />
            </div>
            <div className={cx('isPublic')}>
              <FieldLabel
                label='추억 공개 선택'
                marginBottom='20px'
              />
              <ToggleConnect
                name='isPublic'
                defaultValue={true}
              />
            </div>
            <div className={cx('postPassword')}>
              <FieldLabel label='비밀번호 생성' />
              <TextFieldConnect
                name='postPassword'
                type='password'
                placeholder='추억 비밀번호를 생성해 주세요'
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
        </div>
        <div className={cx('submitButton')}>
          <Button
            size='large'
            type='button'
            onClick={(e) => {
              e.preventDefault()
              handleClickCompletedButton()
            }}
          >올리기
          </Button>
        </div>
        <FormModal
          title='추억 올리기'
          titleMarginBottom='40px'
          onClose={authCheckFormModal.closeModal}
          ref={authCheckFormModal.modalRef}
          content={
            authCheckFormModal.isOpened
              ? (
                <AuthFormContent
                  label='올리기 권한 인증'
                  buttonText='제출하기'
                  fieldName='groupPassword'
                  placeholder='그룹 비밀번호를 입력해 주세요'
                />
              )
              : undefined
          }
        />
      </form>
    </FormProvider>
  )
}

export default PostCreateForm
