'use client'

import classNames from 'classnames/bind'
import styles from './Tab.module.scss'
import useUpdateQueryURL from '../util-hook/useUpdateQueryURL'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'

const cx = classNames.bind(styles)

type TabProps = {
  isPublicMenu: boolean
}

const Tab = ({ isPublicMenu }: TabProps) => {
  const { updateQueryURL } = useUpdateQueryURL()
  const isPublicParmas = useSearchParams().get('isPublic')
  const selected = isPublicMenu ? (isPublicParmas === 'true' || !isPublicParmas) : (isPublicParmas === 'false')

  return (
    <Link href={updateQueryURL({ 'isPublic': isPublicMenu ? 'true' : 'false' })} className={cx('container', { selected })}>
      {isPublicMenu ? '공개' : '비공개'}
    </Link>
  )
}

export default Tab
