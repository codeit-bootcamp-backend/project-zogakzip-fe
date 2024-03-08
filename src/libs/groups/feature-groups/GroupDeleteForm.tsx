import AuthFormContent from '@libs/shared/form-field/AuthFormContent/AuthFormContent'
import { GroupDeleteFormInput } from '@services/api/types'
import { FormProvider, useForm } from 'react-hook-form'

type GroupDeleteFormProps = {
  onSubmit: (data: GroupDeleteFormInput) => void
}

const GroupDeleteForm = ({ onSubmit }: GroupDeleteFormProps) => {
  const methods = useForm<GroupDeleteFormInput>()
  const { handleSubmit } = methods
  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <AuthFormContent
          label='삭제 권한 인증'
          buttonText='삭제하기'
          placeholder='그룹 비밀번호를 입력해 주세요'
        />
      </form>
    </FormProvider>
  )
}

export default GroupDeleteForm
