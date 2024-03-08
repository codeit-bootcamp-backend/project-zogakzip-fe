import classNames from 'classnames/bind'
import styles from './AuthFormContent.module.scss'
import FieldLabel from '@libs/shared/input/FieldLabel/FieldLabel'
import TextFieldConnect from '../TextFieldConnect'
import Button from '@libs/shared/button/Button'

const cx = classNames.bind(styles)

type AuthFormContentProps = {
  label: string
  fieldName?: string
  placeholder: string
  buttonText: string
}

const AuthFormContent = ({ label, buttonText, placeholder, fieldName = 'password' }: AuthFormContentProps) => {
  return (
    <div className={cx('container')}>
      <div className={cx('password')}>
        <FieldLabel label={label} />
        <TextFieldConnect
          name={fieldName}
          placeholder={placeholder}
          type='password'
          rules={{
            validate: value => value.trim() !== '' || '필수 입력사항입니다.',
          }}
        />
      </div>
      <Button size='large' type='submit'>{buttonText}</Button>
    </div>
  )
}

export default AuthFormContent
