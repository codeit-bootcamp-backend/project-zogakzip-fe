import AuthFormContent from '@libs/shared/form-field/AuthFormContent/AuthFormContent'
import { PostDeleteFormInput } from '@services/api/types'
import { FormProvider, useForm } from 'react-hook-form'

type PostDeleteFormProps = {
  onSubmit: (data: PostDeleteFormInput) => void
}

const PostDeleteForm = ({ onSubmit }: PostDeleteFormProps) => {
  const methods = useForm<PostDeleteFormInput>()
  const { handleSubmit } = methods
  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <AuthFormContent
          label='삭제 권한 인증'
          buttonText='삭제하기'
          placeholder='추억 비밀번호를 입력해 주세요'
          fieldName='postPassword'
        />
      </form>
    </FormProvider>
  )
}

export default PostDeleteForm
