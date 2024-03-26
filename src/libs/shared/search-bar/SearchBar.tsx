'use client'

import classNames from 'classnames/bind'
import styles from './SearchBar.module.scss'
import Icon from '../icon/Icon'
import { useRouter, useSearchParams } from 'next/navigation'
import useUpdateQueryURL from '../util-hook/useUpdateQueryURL'
import { useRef } from 'react'

const cx = classNames.bind(styles)

type SearchBarProps = {
  placeholder: string
}

const SearchBar = ({ placeholder }: SearchBarProps) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const searchParams = useSearchParams()
  const router = useRouter()
  const { updateQueryURL } = useUpdateQueryURL()
  const keyword = searchParams.get('keyword')

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!inputRef.current) return
    router.push(updateQueryURL({ keyword: inputRef.current.value }), { scroll: false })
  }

  return (
    <form
      className={cx('container')}
      onSubmit={handleSearch}
    >
      <label htmlFor='search' className={cx('iconWrapper')}>
        <Icon name='search' width={25} height={25} alt='돋보기 아이콘' />
      </label>
      <input
        ref={inputRef}
        id='search'
        className={cx('input')}
        placeholder={placeholder}
        defaultValue={keyword || undefined}
      />
    </form>
  )
}

export default SearchBar
