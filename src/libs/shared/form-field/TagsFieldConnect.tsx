import classNames from 'classnames/bind'
import styles from './TagsFieldConnect.module.scss'
import { Controller, ControllerProps, FieldPath, FieldValues, useFormContext, useWatch } from 'react-hook-form'
import TextField from '../input/TextField/TextField'
import TemporaryTag from '../tag/TemporaryTag'

const cx = classNames.bind(styles)

type TagsFieldConnectProps<
  F extends FieldValues,
  N extends FieldPath<F>
> = {
  name: N
  rules?: ControllerProps<F, N>['rules']
}

const TagsFieldConnect = <
  F extends FieldValues,
  N extends FieldPath<F>
>({
  name,
  rules,
}: TagsFieldConnectProps<F, N>) => {
  const { setValue, setError } = useFormContext()
  // TODO-3: 타입 문제 해결. 단언으로 임시 해결 중
  const tags = useWatch({ name }) as string[]

  const handleAddTag = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.currentTarget.value === '') return
    if (tags.length >= 10) return setError(name, { message: '태그는 최대 10개까지 등록 가능합니다.' })
    if (e.currentTarget.value.length > 20) return setError(name, { message: '태그는 20자 이내로 입력해 주세요.' })
    // TODO-3: 타입 문제 해결. 단언으로 임시 해결 중
    setValue(name as string, [...tags, e.currentTarget.value], { shouldValidate: true })
    e.currentTarget.value = ''
  }

  const handleRemoveTag = (tag: string) => {
    setValue(name as string, tags.filter((t) => t !== tag))
  }

  return (
    <div className={cx('container')}>
      <Controller
        name={name}
        rules={rules}
        // 참고: 빈 배열은 required 에 걸리는 것으로 보임
        render={({ fieldState }) => (
          <TextField
            placeholder='태그 입력 후 Enter'
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.nativeEvent.isComposing) {
                e.preventDefault()
                handleAddTag(e)
              }
            }}
            error={Boolean(fieldState.error)}
            helperText={fieldState.error?.message}
          />
        )}
      />
      {tags.length > 0 && (
        <div className={cx('tagContainer')}>
          {tags.map((tag, idx) => (
            <TemporaryTag key={idx} tag={tag} onRemove={handleRemoveTag} />))}
        </div>
      )}
    </div>
  )
}

export default TagsFieldConnect
