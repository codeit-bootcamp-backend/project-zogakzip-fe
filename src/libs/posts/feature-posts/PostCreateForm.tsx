'use client'

import classNames from 'classnames/bind'
import styles from './PostCreateForm.module.scss'
import Button from '@libs/shared/button/Button'
import { FormProvider, useForm } from 'react-hook-form'
import { PostFormInput } from '@services/api/types'
import FieldLabel from '@libs/shared/input/FieldLabel/FieldLabel'
import TextFieldConnect from '@libs/shared/form-field/TextFieldConnect'
import ImageUploadConnect from '@libs/shared/form-field/ImageUploadConnect'
import TextAreaConnect from '@libs/shared/form-field/TextAreaConnect'
import DatePickerConnect from '@libs/shared/form-field/DatePickerConnect'
import ToggleConnect from '@libs/shared/form-field/ToggleConnect'
import TagsFieldConnect from '@libs/shared/form-field/TagsFieldConnect'
import useModal from '@libs/shared/modal/useModal'
import FormModal from '@libs/shared/modal/FormModal'

const cx = classNames.bind(styles)

type PostCreateFormProps = {
  authCheckFormModal: ReturnType<typeof useModal>
  onCreate: (data: PostFormInput) => void
}

// TODO: 권한 인증 모달에 폼 내용 전달하기
const PostCreateForm = ({
  authCheckFormModal,
  onCreate,
}: PostCreateFormProps) => {
  // 참고: trigger 이후에 onChange 시 error 확인이 안돼서 넣었음. 렌더링 성능 확인 필요
  const methods = useForm<PostFormInput>({ defaultValues: { tags: [] }, mode: 'onChange' })
  const { handleSubmit, trigger } = methods

  const handleClickCompletedButton = async () => {
    const isValid = await trigger()
    if (isValid) {
      authCheckFormModal.openModal()
    }
  }

  const AuthGroupFormContent = ({ isOpened }: { isOpened: boolean }) => {
    // 참고: 권함 모달이 open 상태일 때 groupPassword 필드가 필요함
    if (!isOpened) return null
    return (
      <div className={cx('authFormContainer')}>
        <div className={cx('groupPassword')}>
          <FieldLabel label='올리기 권한 인증' />
          <TextFieldConnect
            name='groupPassword'
            placeholder='그룹 비밀번호를 입력해 주세요'
            type='password'
            rules={{
              validate: value => value.trim() !== '' || '필수 입력사항입니다.',
            }}
          />
        </div>
        <Button size='large' type='submit'>제출하기</Button>
      </div>
    )
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onCreate)}>
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
                name='image'
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
                defaultValue={false}
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
                    value: /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,16}$/,
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
          content={(
            <AuthGroupFormContent isOpened={authCheckFormModal.isOpened} />
          )}
        />
      </form>
    </FormProvider>
  )
}

export default PostCreateForm
