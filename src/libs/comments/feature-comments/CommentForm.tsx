import classNames from 'classnames/bind'
import styles from './CommentForm.module.scss'
import { CommentFormInput } from '@services/api/types'
import { FormProvider, useForm } from 'react-hook-form'
import FieldLabel from '@libs/shared/input/FieldLabel/FieldLabel'
import TextFieldConnect from '@libs/shared/form-field/TextFieldConnect'
import TextAreaConnect from '@libs/shared/form-field/TextAreaConnect'
import Button from '@libs/shared/button/Button'
import { PASSWORD_VALIDATION_REGEXP } from '@libs/shared/util-constants/constants'

const cx = classNames.bind(styles)

type CommentFormProps = {
  defaultValues?: Omit<CommentFormInput, 'password'>
  onSubmit: (data: CommentFormInput) => void
}

const CommentForm = ({ defaultValues, onSubmit }: CommentFormProps) => {
  const methods = useForm<CommentFormInput>({ defaultValues })
  const { handleSubmit, reset } = methods
  return (
    <FormProvider {...methods}>
      <form onSubmit={async (e) => {
        await handleSubmit(onSubmit)(e)
        if (!defaultValues) reset()
      }}
      >
        <div className={cx('container')}>
          <div className={cx('inputs')}>
            <div className={cx('nickanme')}>
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
            <div className={cx('content')}>
              <FieldLabel label='댓글' />
              <TextAreaConnect
                name='content'
                placeholder='댓글을 입력해 주세요'
                rules={{
                  required: '필수 입력사항입니다.',
                  maxLength: { value: 100, message: '100자 이내로 입력해 주세요' },
                }}
              />
            </div>
            <div className={cx('password')}>
              <FieldLabel label={defaultValues ? '수정 권한 인증' : '비밀번호 생성'} />
              <TextFieldConnect
                name='password'
                type='password'
                placeholder={defaultValues ? '댓글 비밀번호를 입력해 주세요' : '댓글 비밀번호를 생성해 주세요'}
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
          <div className={cx('submitButton')}>
            <Button
              size='large'
              type='submit'
            >{defaultValues ? '수정하기' : '등록하기'}
            </Button>
          </div>
        </div>
      </form>
    </FormProvider>
  )
}

export default CommentForm
