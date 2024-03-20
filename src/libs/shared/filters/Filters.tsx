'use client'

import classNames from 'classnames/bind'
import styles from './Filters.module.scss'
import Dropdown from '@libs/shared/dropdown/Dropdown'
import Tab from '../tab/Tab'
import SearchBar from '../search-bar/SearchBar'
import { useRouter } from 'next/navigation'
import useUpdateQueryURL from '../util-hook/useUpdateQueryURL'

const cx = classNames.bind(styles)

type FiltersProps<T> = {
  placeholder: string
  filters: {
    text: string
    data: T
  }[]
  currentData: T
}

const Filters = <T extends string>({ placeholder, filters, currentData }: FiltersProps<T>) => {
  const router = useRouter()
  const { updateQueryURL } = useUpdateQueryURL()
  return (
    <div className={cx('container')}>
      <div className={cx('tabContainer')}>
        <Tab isPublicMenu={true} />
        <Tab isPublicMenu={false} />
      </div>
      <SearchBar
        placeholder={placeholder}
      />
      <Dropdown
        filters={filters}
        currentData={currentData}
        onSelect={(data) => {
          // TODO: URL 변경 전 currentData 변경 시키기
          // TODO: 필요한 것 같으면 useOutsideClick 반영
          router.push(
            updateQueryURL({
              'sortBy': data,
            }),
            { scroll: false },
          )
        }}
      />
    </div>
  )
}

export default Filters
