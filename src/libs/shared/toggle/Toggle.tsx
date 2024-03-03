'use client'

import classNames from 'classnames/bind'
import styles from './Toggle.module.scss'

const cx = classNames.bind(styles)

export type ToggleProps = {
  active: boolean
  onClick: (active: boolean) => void
}

const Toggle = ({ active, onClick }: ToggleProps) => {
  return (
    <div className={cx('container')}>
      <div className={cx('valueText')}>{active ? '공개' : '비공개'}</div>
      {/* TODO: 아래 eslint 룰 위반 원인 및 해결 방법 */}
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label htmlFor='toggle' className={cx('toggle', { active })}>
        <input
          type='checkbox'
          id='toggle'
          defaultChecked
          hidden
          onChange={() => onClick(!active)}
        />
        <span className={cx('handle', { active })} />
      </label>
    </div>
  )
}

export default Toggle
