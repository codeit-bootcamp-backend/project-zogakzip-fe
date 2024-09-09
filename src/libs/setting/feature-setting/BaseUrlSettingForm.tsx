'use client'

import classNames from 'classnames/bind'
import styles from './BaseUrlSettingForm.module.scss'
import { FormProvider, useForm } from 'react-hook-form'
import TextFieldConnect from '@libs/shared/form-field/TextFieldConnect'
import Button from '@libs/shared/button/Button'
import { BaseUrlSettingFormInput } from '@services/api/types'
import { useRouter } from 'next/navigation'
import setBaseUrlCookie from '../data-access-setting/setBaseUrlCookie'
import FieldLabel from '@libs/shared/input/FieldLabel/FieldLabel'
import { URL_VALIDATION_REGEXP } from '@libs/shared/util-constants/constants'

const cx = classNames.bind(styles)

type BaseUrlSettingFormProps = {

}

const BaseUrlSettingForm = ({ }: BaseUrlSettingFormProps) => {
  const methods = useForm<BaseUrlSettingFormInput>()
  const { handleSubmit } = methods
  const router = useRouter()

  const handleSetBaseUrlCookie = async (data: BaseUrlSettingFormInput) => {
    await setBaseUrlCookie(data)
    router.push('/')
  }

  // 참고: 예시 - https://project-howdoilook-be.onrender.com/api
  return (
    <FormProvider {...methods}>
      <form className={cx('container')} onSubmit={handleSubmit(handleSetBaseUrlCookie)}>
        <div>
          <FieldLabel label='Base URL' />
          <TextFieldConnect
            name='baseUrl'
            placeholder='서비스에 사용할 API의 base URL을 입력해 주세요.'
            rules={{
              required: '필수 입력사항입니다.',
              pattern: {
                value: URL_VALIDATION_REGEXP,
                message: '올바른 url 형식이 아닙니다.',
              },
            }}
          />
        </div>
        <div className={cx('submitButton')}>
          <Button size='large' type='submit'>설정하기</Button>
        </div>
      </form>
    </FormProvider>
  )
}

export default BaseUrlSettingForm
