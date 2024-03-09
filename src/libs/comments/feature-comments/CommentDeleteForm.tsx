import { CommentDeleteFormInput } from '@services/api/types'
import { FormProvider, useForm } from 'react-hook-form'
import AuthFormContent from '@libs/shared/form-field/AuthFormContent/AuthFormContent'

type CommentDeleteFormProps = {
  onSubmit: (data: CommentDeleteFormInput) => void
}

const CommentDeleteForm = ({ onSubmit }: CommentDeleteFormProps) => {
  const methods = useForm<CommentDeleteFormInput>()
  const { handleSubmit } = methods
  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <AuthFormContent
          label='삭제 권한 인증'
          buttonText='삭제하기'
          placeholder='댓글 비밀번호를 입력해 주세요'
        />
      </form>
    </FormProvider>
  )
}

export default CommentDeleteForm
